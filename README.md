# flow-tap
Run tap on files with flow types.

Allows you to run [tap](http://www.node-tap.org/basics/) on files with [flow static types annotations](https://flow.org/en/). This module makes use of [flow-remove-types](https://github.com/flowtype/flow-remove-types) which is lighter weight and faster than babel-node.

### Install
`npm install flow-tap --save-dev`

In your package.json file:
`
"scripts": {
	"test": "flow-tap test/**/*.js"
}
`
Then you can run `npm run test`.

### Usage

```javascript
//@flow
'use strict';

const tap = require('tap');

function numToString(num:number):string{
	return num.toString();
}

tap.equal(numToString(3), "3");
```

Use both tap and flow the way you usually do. If your tests don't use static types, but your modules do, I suggest using `//@flow` at the top of your test anyways. This will catch any improper usage of your modules and obviate the need to test unexpected arguments. **NOTE**: This won't check types, only remove them so tests work as expected. Continue using flow to check your types.

I wrote a [blog post about the creation of flow-tap](http://blog.jonnew.com/posts/flow-plus-tap-equals-flow-tap).