//@flow
'use strict';

const tap = require('tap');

function numToString(num:number):string{
	return num.toString();
}

tap.equal(numToString(3), "3");