'use strict';
import {skier} from './skier.js';
import { loadedAssets } from './variables.js';
import { obstacles } from './variables.js';
import { vars } from './variables.js';
export class collision {
    constructor(skierObj, obstacleObj) {
        this.skierObj = skierObj;
        this.obstacleObj = obstacleObj;
    }

    checkIfSkierHitObstacle() {
        var skierAssetName = this.skierObj.getSkierAsset();
        var skierImage = vars.loadedAssets[skierAssetName];
        var skierRect = {
            left: vars.skierMapX + vars.gameWidth / 2,
            right: vars.skierMapX + skierImage.width + vars.gameWidth / 2,
            top: vars.skierMapY + skierImage.height - 5 + vars.gameHeight / 2,
            bottom: vars.skierMapY + skierImage.height + vars.gameHeight / 2
        };

        var context = this;
        var loadedAssetsData = vars.loadedAssets;

        var collision = _.find(obstacles, function(obstacle) {
            var obstacleImage = loadedAssetsData[obstacle.type];
            var obstacleRect = {
                left: obstacle.x,
                right: obstacle.x + obstacleImage.width,
                top: obstacle.y + obstacleImage.height - 5,
                bottom: obstacle.y + obstacleImage.height
            };

            return context.intersectRect(skierRect, obstacleRect);
        });

        if(collision) {
            vars.skierDirection = 0;
        }
    };

    intersectRect(r1, r2) {
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
    };
};
