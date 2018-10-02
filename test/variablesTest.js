
var assert = require('chai').assert;
import { vars } from '../js/variables';
import { assets } from '../js/variables';
import { obstacleTypes } from '../js/variables';

describe('variables', function () {
    describe('vars', function() {
        it('should be an object ', function () {
            assert.isObject(vars, 'vars is an object');
        });
    });
    describe('vars', function() {
        it('should be object size 8', function () {
            assert.equal(Object.keys(vars).length, 8);
        });
    });
    describe('vars', function() {
        it('should have skierDirection 5', function () {
            assert.equal(vars.skierDirection, 5);
        });

    });
    describe('Obstacle type', function() {
        it('should be an array ', function () {
            assert.isArray(obstacleTypes, 'obstacle type is an array');
        });
    });
    describe('Obstacle type', function() {
        it('should have array length ', function () {
            assert.equal(obstacleTypes.length, 4);
        });
    });
    describe('Obstacle type', function() {
        it('should have array 1 as a tree ', function () {
            assert.equal(obstacleTypes[0], 'tree');
        });
    });
    describe('Assets', function() {
        it('should be object', function () {
            assert.isObject(assets, 'assets is an object');
        });
    });
    describe('Assets', function() {
        it('should be object size 10', function () {
            assert.equal(Object.keys(assets).length, 10);
        });
    });
    describe('Assets', function() {
        it('should have skierCrash image as skier_crash.png', function () {
            assert.equal(assets.skierCrash, 'img/skier_crash.png');
        });
    });
});
