
'use strict';
import { setupKeyhandler } from './keyhandler.js';

    /**
     * initGame(assetsObj, obstacleObj, gameLoop) accepts assets object, 
     * obstacle object and gameloop
     * 
     * initializes the game
     * 
     */
    export function initGame(assetsObj, obstacleObj, gameLoop) {
        setupKeyhandler(assetsObj, obstacleObj, gameLoop);
        assetsObj.loadAssets().then(function () {
            obstacleObj.placeInitialObstacles();
            requestAnimationFrame(gameLoop);
        });
    };