'use strict';
import { ctx } from './variables.js';
import { obstacleTypes } from './variables.js';
import { obstacles } from './variables.js';
import { assets } from './variables.js';
import { vars } from './variables.js';
import { writeScore } from './score.js';
import { obstaclesClass } from './obstacles';
import { assetsClass } from './assets.js';
import { collision } from './collision.js';
import { skier } from './skier.js';
import { showInstructions } from './instructions';
import { clearCanvas } from './clearcanvas';
import { initGame } from './initgame';

/**
 * jquery document ready function()
 * 
 */
$(function () {

    var assetsObj = new assetsClass();
    var obstacleObj = new obstaclesClass();
    var skierObj = new skier(obstacleObj);
    var collisionObj = new collision(skierObj, obstacleObj);

    /**
     * gameLoop()
     * game loop method for looping the elements of the game
     * 
     */
    function gameLoop() {
        ctx.save();
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        clearCanvas();
        skierObj.moveSkier();
        collisionObj.checkIfSkierHitObstacle();
        skierObj.drawSkier();
        obstacleObj.drawObstacles();
        writeScore();
        showInstructions();
        skierObj.skierPause()
        skierObj.skierIncreaseSpeed();
        collisionObj.crash();
        ctx.restore();
        requestAnimationFrame(gameLoop);
    };


    initGame(assetsObj, obstacleObj, gameLoop);
});