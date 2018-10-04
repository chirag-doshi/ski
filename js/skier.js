'use strict';
import { ctx } from './variables.js';
import { obstaclesClass } from './obstacles';
import { vars } from './variables.js';

/**
 * skier requires obstacleObj on object initiation
 * has methods that deals with the skier object
 * 
 */
export class skier {

    /**
     * constructor(obstacleObj)
     * skier class constructor
     * 
     */
    constructor(obstacleObj) {
        this.obstacleObj = obstacleObj;
    }

    /**
     * moveSkier()
     * moves the skier in the game
     * 
     */
    moveSkier() {
        switch (vars.skierDirection) {
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

    /**
     * getSkierAsset()
     * get the skier asset name according to the direction of skier
     * 
     */
    getSkierAsset() {
        var skierAssetName;
        switch (vars.skierDirection) {
            case 0:
                skierAssetName = 'skierCrash'
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
            case 6:
                skierAssetName = 'skierRight';
                break;
        }

        return skierAssetName;
    };

    /**
     * drawSkier()
     * draws the skier on the canvas
     * 
     */
    drawSkier() {
        var skierAssetName = this.getSkierAsset();
        var skierImage = vars.loadedAssets[skierAssetName];
        var x = (vars.gameWidth - skierImage.width) / 2;
        var y = (vars.gameHeight - skierImage.height) / 2;
        ctx.drawImage(skierImage, x, y, skierImage.width, skierImage.height);
    };

    /**
     * skierPause()
     * pauses the skier in the game
     * 
     */
    skierPause() {
        if (vars.skierDirection == 6) {
            var skierAssetName = this.getSkierAsset();
            var skierImage = vars.loadedAssets[skierAssetName];
            var x = (vars.gameWidth) / 3;
            var y = (vars.gameHeight - (skierImage.height * 2)) / 2;
            ctx.font = '24px serif';
            ctx.fillStyle = 'red';
            ctx.fillText('Game Paused. Press down key to continue ...', x, y);
        }
    }

    /**
     * skierIncreaseSpeed()
     * Increases the skiers speed level when certain scores are achieved
     * 
     */
    skierIncreaseSpeed() {
        if (vars.score == 500) {
            vars.skierSpeed++;
        } else if (vars.score == 1000) {
            vars.skierSpeed += 2;
        } else if (vars.score == 2000) {
            vars.skierSpeed += 4;
        }
    }
};