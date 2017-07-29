# flow-tap
Run tap on files with flow types.

Allows you to run [tap](http://www.node-tap.org/basics/) on files with [flow static types annotations](https://flow.org/en/). Makes use of [flow-remove-types](https://github.com/flowtype/flow-remove-types) which is lighter weight and faster than babel-node.

```bash
flow-tap 'test/**/*.js'
```
