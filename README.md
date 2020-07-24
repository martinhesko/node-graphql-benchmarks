

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
| [mongo10types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/mongo10types.js)                     | 514.2      | 9.25    | 1.77          | 3.74         |
| [mongo100types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/mongo100types.js)                   | 504.2      | 9.42    | 1.72          | 8.44         |
| [postgres10types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/postgres10types.js)               | 479.4      | 9.87    | 1.30          | 3.23         |
| [postgres100types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/postgres100types.js)             | 440.6      | 10.92   | 1.19          | 8.65         |
