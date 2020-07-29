
apollo standalone testcases currently not working 

# Prerequisites

- [podman-compose](https://github.com/containers/podman-compose) if using podman

# Usage

```
git clone https://github.com/martinhesko/node-graphql-benchmarks.git 
cd node-graphql-benchmarks
npm install
./prepare.sh
npm start
```

# Benchmarks
duration: 5.02s
connections: 5
pipelining: 1

duration: 5.02s
connections: 5
pipelining: 1

| Server                                                                                                                            | Requests/s | Latency | Throughput/Mb | Startup time |
| :--                                                                                                                               | --:        | :-:     | --:           | --:          |
| [mongo10types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/mongo10types.js)                     | 516.2      | 9.21    | 1.76          | 3.16         |
| [mongo100types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/mongo100types.js)                   | 495.6      | 9.56    | 1.69          | 8.54         |
| [postgres10types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/postgres10types.js)               | 442.6      | 10.77   | 1.23          | 3.21         |
| [postgres100types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/postgres100types.js)             | 413.6      | 11.59   | 1.14          | 8.57         |
