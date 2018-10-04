'use strict';
import { vars } from './variables.js';
import { obstacles } from './variables.js';
import { clearCanvas } from './clearcanvas';
import { initGame } from './initgame';

/**
 * setupKeyhandler(obstacleObj) requires the obstacle Object
 * determines what action is generated on certain key press
 * 
 */
export function setupKeyhandler(assetsObj, obstacleObj, gameLoop) {

    $(window).keydown(function (event) {

    var obstaclesArray = obstacles;
        switch (event.which) {
            case 37: // left
                if (vars.skierDirection == 1) {
                    vars.skierMapX -= vars.skierSpeed;
                    obstacleObj.placeNewObstacle(vars.skierDirection);
                } else if (vars.skierDirection <= 0) {
                    vars.skierDirection = 1;
                } else {
                    vars.skierDirection--;
                }
                event.preventDefault();
                break;
            case 39: // right
                if (vars.skierDirection == 5) {
                    vars.skierMapX += vars.skierSpeed;
                    obstacleObj.placeNewObstacle(vars.skierDirection);
                } else {
                    vars.skierDirection++;
                }
                event.preventDefault();
                break;
            case 38: // up
                if (vars.skierDirection == 1 || vars.skierDirection == 5) {
                    vars.skierMapY -= vars.skierSpeed;
                    obstacleObj.placeNewObstacle(6);
                }
                event.preventDefault();
                break;
            case 40: // down
                if (vars.skierDirection == 0) {
                    document.location.reload();
                }
                vars.skierDirection = 3;
                event.preventDefault();
                break;
            case 32: // space key
                vars.skierDirection = 6;
                event.preventDefault();
                break;
            case 13: // enter key
                initGame(assetsObj, obstacleObj, gameLoop);
                document.location.reload();
                event.preventDefault();
        }
    });
};