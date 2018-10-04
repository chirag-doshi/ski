'use strict';
import { vars } from './variables.js';
import { obstacles } from './variables.js';
import { obstacleTypes } from './variables.js';
import { ctx } from './variables.js';

/**
 * obstaclesClass() 
 * deals with the obstacles of the game
 * 
 */
export class obstaclesClass {

    drawObstacles() {
        var newObstacles = [];
        var loadedAssetsData = vars.loadedAssets;
        var gameWidthData = vars.gameWidth;
        var gameHeightData = vars.gameHeight;
        var ctxData = ctx;
        var skierMapXData = vars.skierMapX;
        var skierMapYData = vars.skierMapY;
        var obstaclesData = obstacles;

        _.each(obstacles, function (obstacle) {
            var obstacleImage = loadedAssetsData[obstacle.type];
            var x = obstacle.x - skierMapXData - obstacleImage.width / 2;
            var y = obstacle.y - skierMapYData - obstacleImage.height / 2;

            if (x < -100 || x > gameWidthData + 50 || y < -100 || y > gameHeightData + 50) {
                return;
            }

            ctx.drawImage(obstacleImage, x, y, obstacleImage.width, obstacleImage.height);
            newObstacles.push(obstacle);
        });

        obstaclesData = newObstacles;
    };

    /**
     * placeInitialObstacles()
     * add the obstacles for the start of the game
     * 
     */
    placeInitialObstacles() {
        var numberObstacles = Math.ceil(_.random(5, 7) * (vars.gameWidth / 800) * (vars.GameHeight / 500));
        var minX = -50;
        var maxX = vars.gameWidth + 50;
        var minY = vars.gameHeight / 2 + 100;
        var maxY = vars.gameHeight + 50;
        var loadedAssetsData = vars.loadedAssets;

        for (var i = 0; i < numberObstacles; i++) {
            this.placeRandomObstacle(minX, maxX, minY, maxY);
        }

        var obstacles = _.sortBy(obstacles, function (obstacle) {
            var obstacleImage = loadedAssetsData[obstacle.type];
            return obstacle.y + obstacleImage.height;
        });
    };

    /**
     * placeNewObstacle(direction) takes a direction variable
     * adds new obstacles as the skier moves
     * 
     */
    placeNewObstacle(direction) {
        var shouldPlaceObstacle = _.random(1, 8);

        if (shouldPlaceObstacle !== 8) {
            return;
        }

        var leftEdge = vars.skierMapX;
        var rightEdge = vars.skierMapX + vars.gameWidth;
        var topEdge = vars.skierMapY;
        var bottomEdge = vars.skierMapY + vars.gameHeight;

        switch (direction) {
            case 1: // left
                this.placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);
                break;
            case 2: // left down
                this.placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);
                this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);
                break;
            case 3: // down
                this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);
                break;
            case 4: // right down
                this.placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);
                this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);
                break;
            case 5: // right
                this.placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);
                break;
            case 6: // up
                this.placeRandomObstacle(leftEdge, rightEdge, topEdge - 50, topEdge);
                break;
        }
    };

    /**
     * placeRandomObstacle(minX, maxX, minY, maxY) takes the coordinates of the canvas
     * places random object positions
     * 
     */
    placeRandomObstacle(minX, maxX, minY, maxY) {
        var obstacleIndex = _.random(0, obstacleTypes.length - 1);
        var position = this.calculateOpenPosition(minX, maxX, minY, maxY);

        obstacles.push({
            type: obstacleTypes[obstacleIndex],
            x: position.x,
            y: position.y
        })
    };

    /**
     * calculateOpenPosition(minX, maxX, minY, maxY) takes the coordinates of the canvas
     * calculates positions that are open for object placement
     * 
     */
    calculateOpenPosition(minX, maxX, minY, maxY) {
        var x = _.random(minX, maxX);
        var y = _.random(minY, maxY);

        var foundCollision = _.find(obstacles, function (obstacle) {
            return x > (obstacle.x - 50) && x < (obstacle.x + 50) && y > (obstacle.y - 50) && y < (obstacle.y + 50);
        });

        if (foundCollision) {
            return this.calculateOpenPosition(minX, maxX, minY, maxY);
        } else {
            return {
                x: x,
                y: y
            }
        }
    };
};