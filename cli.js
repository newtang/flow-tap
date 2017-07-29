#!/usr/bin/env node
'use strict';
process.execPath = require.resolve('.bin/flow-node');
require('tap/bin/run.js');
