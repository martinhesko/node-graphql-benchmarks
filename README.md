# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance
- type-graphql adds overhead

# Explanation

For further details, please check out [this video](https://www.youtube.com/watch?v=JbV7MCeEPb8).

# Usage

```
git clone https://github.com/benawad/benchmarks
cd benchmarks
npm install
npm start
```

# Benchmarks
duration: 5.02s
connections: 5
pipelining: 1

| Server                                                                                                                            | Requests/s | Latency | Throughput/Mb | Startup time |
| :--                                                                                                                               | --:        | :-:     | --:           | --:          |
| [mongo10types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/mongo10types.js)                     | 1116.8     | 4.24    | 3.84          | 4.17         |
| [postgres10types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/postgres10types.js)               | 1113.6     | 4.14    | 3.14          | 3.04         |
| [mongo100types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/mongo100types.js)                   | 1070.8     | 4.28    | 3.65          | 9.85         |
| [postgres100types](https://github.com/martinhesko/node-graphql-benchmarks/tree/master/benchmarks/postgres100types.js)             | 1059.2     | 4.29    | 2.96          | 10.16        |
