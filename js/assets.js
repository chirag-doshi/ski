'use strict';
import { vars } from './variables.js';
import { assets } from './variables.js';

/**
 * assetsClass
 * show the game instructions on the page
 * 
 */
export class assetsClass {

    /**
     * loadAssets()
     * loads the assets to the loadedAssets array
     * 
     */
    loadAssets() {
        var assetPromises = [];
        var loadedAssetsData = vars.loadedAssets;

        _.each(assets, function (asset, assetName) {
            var assetImage = new Image();
            var assetDeferred = new $.Deferred();

            assetImage.onload = function () {
                assetImage.width /= 2;
                assetImage.height /= 2;
                loadedAssetsData[assetName] = assetImage;
                assetDeferred.resolve();
            };
            assetImage.src = asset;

            assetPromises.push(assetDeferred.promise());
        });

        return $.when.apply($, assetPromises);
    };
};