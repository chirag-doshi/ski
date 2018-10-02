var assert = require('chai').assert;
import { vars } from '../js/variables';
import { assets } from '../js/variables';
import {assetsClass} from '../js/assets.js';

describe('Assets Class', function () {
    describe('loadAssets', function() {
        it('should be an function ', function () {
            var assetObj = new assetsClass;
            assert.isFunction(assetObj.loadAssets, 'loadAssets is a function');
        });
    });
});