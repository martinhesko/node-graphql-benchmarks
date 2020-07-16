#!/usr/bin/env node
"use strict";
const { performance } = require('perf_hooks');
const { fork, execSync, spawn } = require("child_process");
const ora = require("ora");
const path = require("path");
const { fire } = require("./autocannon");
const { genData } = require("./data.js");
const waitOn = require("wait-on");
const psTree = require("ps-tree");
const waitOnOpts = {
  resources: ["http-get://localhost:4000/.well-known/apollo/server-health"],
  interval: 100, // poll interval in ms, default 250ms
  timeout: 20000, // timeout in ms, default Infinity
};

const doBench = async (opts, handler) => {
  const spinner = ora(`Started ${handler}`).start();
  if(handler.includes("postgres")) {
    console.log("waiting for postgres");
    execSync("./lib/waitForPostgres.sh");
  }
  const forked = fork(path.join(__dirname, "..", "benchmarks", handler));
  var startupTime;
  try {
    spinner.color = "magenta";
    spinner.text = `Warming ${handler}`;
    const before = performance.now();
    await waitOn(waitOnOpts);
    startupTime = (performance.now() - before) / 1000;
    await genData();
    await fire(opts, handler, false, startupTime);
  } catch (error) {
    psTree(forked.pid, function (err, children) {
      spawn(
        "kill",
        ["-9"].concat(
          children.map(function (p) {
            return p.PID;
          })
        )
      );
    });
    return console.log(error);
  } finally {
    spinner.color = "yellow";
    spinner.text = `Working ${handler}`;
  }

  try {
    await fire(opts, handler, true, startupTime);
    psTree(forked.pid, function (err, children) {
      spawn(
        "kill",
        ["-9"].concat(
          children.map(function (p) {
            return p.PID;
          })
        )
      );
    });
    spinner.text = `Results saved for ${handler}`;
    spinner.succeed();
    return true;
  } catch (error) {
    psTree(forked.pid, function (err, children) {
      spawn(
        "kill",
        ["-9"].concat(
          children.map(function (p) {
            return p.PID;
          })
        )
      );
    });
    return console.log(error);
  }
};

let index = 0;
const start = async (opts, list) => {
  if (list.length === index) {
    console.log("done");
    return true;
  }

  try {
    await doBench(opts, list[index]);
    index += 1;
    execSync("./lib/restartMongo.sh", (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });
    return start(opts, list);
  } catch (error) {
    return console.log(error);
  }
};

module.exports = start;
