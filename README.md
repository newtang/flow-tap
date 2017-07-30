# flow-tap
Run tap on files with flow types.

Allows you to run [tap](http://www.node-tap.org/basics/) on files with [flow static types annotations](https://flow.org/en/). Makes use of [flow-remove-types](https://github.com/flowtype/flow-remove-types) which is lighter weight and faster than babel-node.

```bash
flow-tap 'test/**/*.js'
```

# Usage

```javascript
//@flow
'use strict';

const tap = require('tap');

function numToString(num:number):string{
	return num.toString();
}

tap.equal(numToString(3), "3");
```

Use both tap and flow the way you usually do. If your tests don't use static types, but your modules do, I suggest using `//@flow` at the top of your test anyways. This will catch any improper usage of your modules and obviate the need to test unexpected arguments.