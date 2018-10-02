var assert = require('chai').assert;
import { vars } from '../js/variables';
import { ctx } from '../js/variables';
import {skier} from '../js/skier.js';
import {obstaclesClass} from '../js/obstacles';
import {collision} from '../js/collision.js';
describe('Collision Class', function () {
    var obstacleObj = new obstaclesClass();
    var skierObj =  new skier(obstacleObj);
    var collisionObj = new collision(skierObj, obstacleObj);
    describe('checkIfSkierHitObstacle', function() {
        it('should be an function ', function () {
            assert.isFunction(collisionObj.checkIfSkierHitObstacle, 'checkIfSkierHitObstacle is a function');
        });
    });
    describe('intersectRect', function() {
        it('should be an function ', function () {
            assert.isFunction(collisionObj.intersectRect, 'intersectRect is a function');
        });
    });
    describe('crash', function() {
        it('should be an function ', function () {
            assert.isFunction(collisionObj.crash, 'crash is a function');
        });
    });
    // describe('If direction is 0', function() {
    //     console.log(collisionObj.crash());
    //     it('should show game over', function () {
    //         assert.equal(collisionObj.crash(), 'crash is a function');
    //     });
    // });
});