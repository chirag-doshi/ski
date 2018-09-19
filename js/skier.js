
'use strict';
import { ctx } from './variables.js';
import {obstaclesClass} from './obstacles';
import { vars } from './variables.js';
// var vars =  new variables();
export class skier {
    constructor(obstacleObj) {
        this.obstacleObj = obstacleObj;
    }
    moveSkier() {
        switch(vars.skierDirection) {
        case 2:
            vars.skierMapX -= Math.round(vars.skierSpeed / 1.4142);
            vars.skierMapY += Math.round(vars.skierSpeed / 1.4142);

           this.obstacleObj.placeNewObstacle(vars.skierDirection);
            break;
        case 3:
            vars.skierMapY += vars.skierSpeed;

           this.obstacleObj.placeNewObstacle(vars.skierDirection);
            break;
        case 4:
            vars.skierMapX += vars.skierSpeed / 1.4142;
            vars.skierMapY += vars.skierSpeed / 1.4142;

            this.obstacleObj.placeNewObstacle(vars.skierDirection);
            break;
        }
    };

    getSkierAsset() {
        var skierAssetName;
        switch(vars.skierDirection) {
        case 0:
            skierAssetName = 'skierCrash';
            break;
        case 1:
            skierAssetName = 'skierLeft';
            break;
        case 2:
            skierAssetName = 'skierLeftDown';
            break;
        case 3:
            skierAssetName = 'skierDown';
            break;
        case 4:
            skierAssetName = 'skierRightDown';
            break;
        case 5:
            skierAssetName = 'skierRight';
            break;
        // case 6:
        //     skierAssetName = skierAssetName;
        //     break;
        }

        return skierAssetName;
    };

    drawSkier() {
        var skierAssetName = this.getSkierAsset();
        var skierImage = vars.loadedAssets[skierAssetName];
        var x = (vars.gameWidth - skierImage.width) / 2;
        var y = (vars.gameHeight - skierImage.height) / 2;

        ctx.drawImage(skierImage, x, y, skierImage.width, skierImage.height);
    };
};