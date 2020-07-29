
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

| Server                                                                                                                            | Requests/s | Latency | Throughput/Mb | Startup time |
| :--                                                                                                                               | --:        | :-:     | --:           | --:          |
| [mongo100types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/mongo100types.js)                   | 496.4      | 9.56    | 1.69          | 8.85         |
| [mongo10types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/mongo10types.js)                     | 493.2      | 9.63    | 1.69          | 4.07         |
| [postgres10types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/postgres10types.js)               | 458.8      | 10.37   | 1.26          | 3.44         |
| [postgres100types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/postgres100types.js)             | 439.2      | 10.85   | 1.22          | 8.83         |
| [builtin10types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/builtin10types.js)                 | 433.6      | 11.03   | 1.20          | 0.95         |
| [builtin100types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/builtin100types.js)               | 425.6      | 11.22   | 1.17          | 3.85         |
