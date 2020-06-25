#!/usr/bin/env node
'use strict'

const { fork, exec } = require('child_process')
const ora = require('ora')
const path = require('path')
const { fire } = require('./autocannon')
const { genData } = require('./data.js')
const doBench = async (opts, handler) => {
  const spinner = ora(`Started ${handler}`).start()
  const forked = fork(path.join(__dirname, '..', 'benchmarks', handler))

  try {
    spinner.color = 'magenta'
    spinner.text = `Warming ${handler}`
    await genData()
    await fire(opts, handler, false)
  } catch (error) {
    return console.log(error)
  } finally {
    spinner.color = 'yellow'
    spinner.text = `Working ${handler}`
  }

  try {
    await fire(opts, handler, true)
    forked.kill('SIGINT')
    spinner.text = `Results saved for ${handler}`
    spinner.succeed()
    return true
  } catch (error) {
    return console.log(error)
  }
}

let index = 0
const start = async (opts, list) => {
  if (list.length === index) {
    return true
  }

  try {
    await doBench(opts, list[index])
    index += 1
    await exec('./lib/restartMongo.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
    return start(opts, list)
  } catch (error) {
    return console.log(error)
  }
}

module.exports = start
