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
$(function() {



    var assetsObj = new assetsClass();
    var obstacleObj = new obstaclesClass();
    var skierObj =  new skier(obstacleObj);
    var collisionObj = new collision(skierObj, obstacleObj);

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
        ctx.restore();
        requestAnimationFrame(gameLoop);
    };


    var setupKeyhandler = function() {
        
        $(window).keydown(function(event) {
            var skierDirectionData = vars.skierDirection;
            switch(event.which) {
            case 37: // left
                if(skierDirectionData == 1) {
                    vars.skierMapX -= vars.skierSpeed;
                    obstacleObj.placeNewObstacle(skierDirectionData);
                }
                else {
                    vars.skierDirection = 1;
                }
                event.preventDefault();
                break;
            case 39: // right
                if(skierDirectionData == 5) {
                    vars.skierMapX += vars.skierSpeed;
                    obstacleObj.placeNewObstacle(skierDirectionData);
                }
                else {
                    vars.skierDirection++;
                }
                event.preventDefault();
                break;
            case 38: // up
                if(skierDirectionData == 1 || skierDirectionData == 5) {
                    vars.skierMapY -= vars.skierSpeed;
                    obstacleObj.placeNewObstacle(6);
                }
                event.preventDefault();
                break;
            case 40: // down
                vars.skierDirection = 3;
                event.preventDefault();
                break;
            // case 32: // space key
            //     vars.skierDirection = 6;
            //     event.preventDefault();
            //     break;
            }
        });
    };

    var initGame = function() {
        setupKeyhandler();
        assetsObj.loadAssets().then(function() {
            obstacleObj.placeInitialObstacles();

            requestAnimationFrame(gameLoop);
        });
    };

    initGame(gameLoop);
});