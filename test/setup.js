
var assert = require('chai').assert;
var jsdom = require('jsdom');
global.$ = global.jQuery = require('jquery');
global._ = require('lodash');
const window = document.defaultView;
const utils = require("jsdom/lib/jsdom/utils");
const canvas = require("canvas");
require = require("esm")(module/*, options*/);

