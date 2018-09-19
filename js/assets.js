
import { vars } from './variables.js';
import { assets } from './variables.js';
export class assetsClass {
    loadAssets() {
        var assetPromises = [];
        var loadedAssetsData = vars.loadedAssets;

        _.each(assets, function(asset, assetName) {
            var assetImage = new Image();
            var assetDeferred = new $.Deferred();

            assetImage.onload = function() {
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