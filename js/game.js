'use strict';
// import {variables} from './variables.js';

import { ctx } from './variables.js';
import { obstacleTypes } from './variables.js';
import { obstacles } from './variables.js';
import { assets } from './variables.js';
import { loadedAssets } from './variables.js';
import { vars } from './variables.js';
import {writeScore} from './score.js';
import {obstaclesClass} from './obstacles';
import {assetsClass} from './assets.js';
import {collision} from './collision.js';
import {skier} from './skier.js';
import { asset } from './variables.js';
import { setupKeyhandler } from './keyhandler.js';
import {showInstructions} from './instructions';
$(function() {

    var assetsObj = new assetsClass();
    var obstacleObj = new obstaclesClass();
    var skierObj =  new skier(obstacleObj);
    var collisionObj = new collision(skierObj, obstacleObj);
    // var keyHandlerObj =  new keyHandler(obstacleObj);

    var clearCanvas = function() {
        ctx.clearRect(0, 0, vars.gameWidth, vars.gameHeight);
    };

    var gameLoop = function() {
        ctx.save();
        // Retina support
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

    var initGame = function() {
        setupKeyhandler(obstacleObj);
        assetsObj.loadAssets().then(function() {
            obstacleObj.placeInitialObstacles();

            requestAnimationFrame(gameLoop);
        });
    };

    initGame(gameLoop);
});