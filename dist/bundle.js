/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/assets.js":
/*!**********************!*\
  !*** ./js/assets.js ***!
  \**********************/
/*! exports provided: assetsClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assetsClass\", function() { return assetsClass; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n\n\n\nclass assetsClass {\n    loadAssets() {\n        var assetPromises = [];\n        var loadedAssetsData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets;\n\n        _.each(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"assets\"], function(asset, assetName) {\n            var assetImage = new Image();\n            var assetDeferred = new $.Deferred();\n\n            assetImage.onload = function() {\n                assetImage.width /= 2;\n                assetImage.height /= 2;\n                loadedAssetsData[assetName] = assetImage;\n                assetDeferred.resolve();\n            };\n            assetImage.src = asset;\n\n            assetPromises.push(assetDeferred.promise());\n        });\n\n        return $.when.apply($, assetPromises);\n    };\n};\n\n//# sourceURL=webpack:///./js/assets.js?");

/***/ }),

/***/ "./js/collision.js":
/*!*************************!*\
  !*** ./js/collision.js ***!
  \*************************/
/*! exports provided: collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collision\", function() { return collision; });\n/* harmony import */ var _skier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skier.js */ \"./js/skier.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n\n\n\n\n\nclass collision {\n    constructor(skierObj, obstacleObj) {\n        this.skierObj = skierObj;\n        this.obstacleObj = obstacleObj;\n    }\n\n    checkIfSkierHitObstacle() {\n        var skierAssetName = this.skierObj.getSkierAsset();\n        var skierImage = _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].loadedAssets[skierAssetName];\n        var skierRect = {\n            left: _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].skierMapX + _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].gameWidth / 2,\n            right: _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].skierMapX + skierImage.width + _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].gameWidth / 2,\n            top: _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].skierMapY + skierImage.height - 5 + _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].gameHeight / 2,\n            bottom: _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].skierMapY + skierImage.height + _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].gameHeight / 2\n        };\n\n        var context = this;\n        var loadedAssetsData = _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].loadedAssets;\n\n        var collision = _.find(_variables_js__WEBPACK_IMPORTED_MODULE_1__[\"obstacles\"], function(obstacle) {\n            var obstacleImage = loadedAssetsData[obstacle.type];\n            var obstacleRect = {\n                left: obstacle.x,\n                right: obstacle.x + obstacleImage.width,\n                top: obstacle.y + obstacleImage.height - 5,\n                bottom: obstacle.y + obstacleImage.height\n            };\n\n            return context.intersectRect(skierRect, obstacleRect);\n        });\n\n        if(collision) {\n            _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"vars\"].skierDirection = 0;\n        }\n    };\n\n    intersectRect(r1, r2) {\n        return !(r2.left > r1.right ||\n            r2.right < r1.left ||\n            r2.top > r1.bottom ||\n            r2.bottom < r1.top);\n    };\n};\n\n\n//# sourceURL=webpack:///./js/collision.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.js */ \"./js/score.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacles */ \"./js/obstacles.js\");\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets.js */ \"./js/assets.js\");\n/* harmony import */ var _collision_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collision.js */ \"./js/collision.js\");\n/* harmony import */ var _skier_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skier.js */ \"./js/skier.js\");\n\n// import {variables} from './variables.js';\n\n\n\n\n\n\n\n\n\n\n\n\n\n$(function() {\n\n\n\n    var assetsObj = new _assets_js__WEBPACK_IMPORTED_MODULE_3__[\"assetsClass\"]();\n    var obstacleObj = new _obstacles__WEBPACK_IMPORTED_MODULE_2__[\"obstaclesClass\"]();\n    var skierObj =  new _skier_js__WEBPACK_IMPORTED_MODULE_5__[\"skier\"](obstacleObj);\n    var collisionObj = new _collision_js__WEBPACK_IMPORTED_MODULE_4__[\"collision\"](skierObj, obstacleObj);\n\n    var clearCanvas = function() {\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].clearRect(0, 0, _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth, _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight);\n    };\n\n    var gameLoop = function() {\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].save();\n        // Retina support\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].scale(window.devicePixelRatio, window.devicePixelRatio);\n        clearCanvas();\n        skierObj.moveSkier();\n        collisionObj.checkIfSkierHitObstacle();\n        skierObj.drawSkier();\n        obstacleObj.drawObstacles();\n        Object(_score_js__WEBPACK_IMPORTED_MODULE_1__[\"writeScore\"])();\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].restore();\n        requestAnimationFrame(gameLoop);\n    };\n\n\n    var setupKeyhandler = function() {\n        \n        $(window).keydown(function(event) {\n            var skierDirectionData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection;\n            switch(event.which) {\n            case 37: // left\n                if(skierDirectionData == 1) {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX -= _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed;\n                    obstacleObj.placeNewObstacle(skierDirectionData);\n                }\n                else {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection = 1;\n                }\n                event.preventDefault();\n                break;\n            case 39: // right\n                if(skierDirectionData == 5) {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX += _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed;\n                    obstacleObj.placeNewObstacle(skierDirectionData);\n                }\n                else {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection++;\n                }\n                event.preventDefault();\n                break;\n            case 38: // up\n                if(skierDirectionData == 1 || skierDirectionData == 5) {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY -= _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed;\n                    obstacleObj.placeNewObstacle(6);\n                }\n                event.preventDefault();\n                break;\n            case 40: // down\n                _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection = 3;\n                event.preventDefault();\n                break;\n            // case 32: // space key\n            //     vars.skierDirection = 6;\n            //     event.preventDefault();\n            //     break;\n            }\n        });\n    };\n\n    var initGame = function() {\n        setupKeyhandler();\n        assetsObj.loadAssets().then(function() {\n            obstacleObj.placeInitialObstacles();\n\n            requestAnimationFrame(gameLoop);\n        });\n    };\n\n    initGame(gameLoop);\n});\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/obstacles.js":
/*!*************************!*\
  !*** ./js/obstacles.js ***!
  \*************************/
/*! exports provided: obstaclesClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obstaclesClass\", function() { return obstaclesClass; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n\n\n\n\n\nclass obstaclesClass {\n\n    drawObstacles() {\n        var newObstacles = [];\n        var loadedAssetsData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets;\n        var gameWidthData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth;\n        var gameHeightData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight;\n        var ctxData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"];\n        var skierMapXData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX;\n        var skierMapYData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY;\n        var obstaclesData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"];\n\n        _.each(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"], function(obstacle) {\n            var obstacleImage = loadedAssetsData[obstacle.type];\n            var x = obstacle.x - skierMapXData - obstacleImage.width / 2;\n            var y = obstacle.y - skierMapYData - obstacleImage.height / 2;\n\n            if(x < -100 || x > gameWidthData + 50 || y < -100 || y > gameHeightData + 50) {\n                return;\n            }\n\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(obstacleImage, x, y, obstacleImage.width, obstacleImage.height);\n\n            newObstacles.push(obstacle);\n        });\n\n        obstaclesData = newObstacles;\n    };\n\n    placeInitialObstacles() {\n        var numberObstacles = Math.ceil(_.random(5, 7) * (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth / 800) * (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].GameHeight / 500));\n\n        var minX = -50;\n        var maxX = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth + 50;\n        var minY = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight / 2 + 100;\n        var maxY = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight + 50;\n\n        var loadedAssetsData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets;\n        for(var i = 0; i < numberObstacles; i++) {\n            this.placeRandomObstacle(minX, maxX, minY, maxY);\n        }\n\n        var obstacles = _.sortBy(obstacles, function(obstacle) {\n            var obstacleImage = loadedAssetsData[obstacle.type];\n            return obstacle.y + obstacleImage.height;\n        });\n    };\n\n    placeNewObstacle(direction) {\n        var shouldPlaceObstacle = _.random(1, 8);\n        if(shouldPlaceObstacle !== 8) {\n            return;\n        }\n\n        var leftEdge = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX;\n        var rightEdge = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth;\n        var topEdge = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY;\n        var bottomEdge = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight;\n\n        switch(direction) {\n        case 1: // left\n            this.placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);\n            break;\n        case 2: // left down\n            this.placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);\n            this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);\n            break;\n        case 3: // down\n            this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);\n            break;\n        case 4: // right down\n            this.placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);\n            this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);\n            break;\n        case 5: // right\n            this.placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);\n            break;\n        case 6: // up\n            this.placeRandomObstacle(leftEdge, rightEdge, topEdge - 50, topEdge);\n            break;\n        }\n    };\n\n    placeRandomObstacle(minX, maxX, minY, maxY) {\n        var obstacleIndex = _.random(0, _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacleTypes\"].length - 1);\n\n        var position = this.calculateOpenPosition(minX, maxX, minY, maxY);\n\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"].push({\n            type : _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacleTypes\"][obstacleIndex],\n            x : position.x,\n            y : position.y\n        })\n    };\n\n    calculateOpenPosition(minX, maxX, minY, maxY) {\n        var x = _.random(minX, maxX);\n        var y = _.random(minY, maxY);\n\n        var foundCollision = _.find(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"], function(obstacle) {\n            return x > (obstacle.x - 50) && x < (obstacle.x + 50) && y > (obstacle.y - 50) && y < (obstacle.y + 50);\n        });\n\n        if(foundCollision) {\n            return this.calculateOpenPosition(minX, maxX, minY, maxY);\n        }\n        else {\n            return {\n                x: x,\n                y: y\n            }\n        }\n    };\n};\n\n//# sourceURL=webpack:///./js/obstacles.js?");

/***/ }),

/***/ "./js/score.js":
/*!*********************!*\
  !*** ./js/score.js ***!
  \*********************/
/*! exports provided: writeScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"writeScore\", function() { return writeScore; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n\n\n\n function writeScore() {\n    if(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 2 || _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 3 || _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 4) {\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].score ++;\n    }\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].font = '24px serif';\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText('Score: ' + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].score, 10, 30);\n}\n\n//# sourceURL=webpack:///./js/score.js?");

/***/ }),

/***/ "./js/skier.js":
/*!*********************!*\
  !*** ./js/skier.js ***!
  \*********************/
/*! exports provided: skier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"skier\", function() { return skier; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacles */ \"./js/obstacles.js\");\n\n\n\n\n\n// var vars =  new variables();\nclass skier {\n    constructor(obstacleObj) {\n        this.obstacleObj = obstacleObj;\n    }\n    moveSkier() {\n        switch(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection) {\n        case 2:\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX -= Math.round(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed / 1.4142);\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY += Math.round(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed / 1.4142);\n\n           this.obstacleObj.placeNewObstacle(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection);\n            break;\n        case 3:\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY += _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed;\n\n           this.obstacleObj.placeNewObstacle(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection);\n            break;\n        case 4:\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX += _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed / 1.4142;\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY += _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed / 1.4142;\n\n            this.obstacleObj.placeNewObstacle(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection);\n            break;\n        }\n    };\n\n    getSkierAsset() {\n        var skierAssetName;\n        switch(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection) {\n        case 0:\n            skierAssetName = 'skierCrash';\n            break;\n        case 1:\n            skierAssetName = 'skierLeft';\n            break;\n        case 2:\n            skierAssetName = 'skierLeftDown';\n            break;\n        case 3:\n            skierAssetName = 'skierDown';\n            break;\n        case 4:\n            skierAssetName = 'skierRightDown';\n            break;\n        case 5:\n            skierAssetName = 'skierRight';\n            break;\n        // case 6:\n        //     skierAssetName = skierAssetName;\n        //     break;\n        }\n\n        return skierAssetName;\n    };\n\n    drawSkier() {\n        var skierAssetName = this.getSkierAsset();\n        var skierImage = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets[skierAssetName];\n        var x = (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth - skierImage.width) / 2;\n        var y = (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight - skierImage.height) / 2;\n\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(skierImage, x, y, skierImage.width, skierImage.height);\n    };\n};\n\n//# sourceURL=webpack:///./js/skier.js?");

/***/ }),

/***/ "./js/variables.js":
/*!*************************!*\
  !*** ./js/variables.js ***!
  \*************************/
/*! exports provided: canvas, ctx, obstacleTypes, obstacles, assets, vars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obstacleTypes\", function() { return obstacleTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obstacles\", function() { return obstacles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assets\", function() { return assets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vars\", function() { return vars; });\n\nlet vars = {\n    'loadedAssets' : {},\n    'skierDirection' : 5,\n    'skierMapX' : 0,\n    'skierMapY' : 0,\n    'skierSpeed' : 8,\n    'score' : 0,\n    'gameWidth' : window.innerWidth,\n    'gameHeight' : window.innerHeight\n}\n\nlet canvas = $('<canvas></canvas>')\n    .attr('width', vars.gameWidth * window.devicePixelRatio)\n    .attr('height', vars.gameHeight * window.devicePixelRatio)\n    .css({\n        width: vars.gameWidth + 'px',\n        height: vars.gameHeight + 'px'\n    });\n    $('body').append(canvas);\nlet ctx = canvas[0].getContext('2d');\nlet obstacleTypes = [ \n    'tree',\n    'treeCluster',\n    'rock1',\n    'rock2'\n]; \nlet obstacles = [];\nconst assets = {\n    'skierCrash' : 'img/skier_crash.png',\n    'skierLeft' : 'img/skier_left.png',\n    'skierLeftDown' : 'img/skier_left_down.png',\n    'skierDown' : 'img/skier_down.png',\n    'skierRightDown' : 'img/skier_right_down.png',\n    'skierRight' : 'img/skier_right.png',\n    'tree' : 'img/tree_1.png',\n    'treeCluster' : 'img/tree_cluster.png',\n    'rock1' : 'img/rock_1.png',\n    'rock2' : 'img/rock_2.png',\n\n    'rhino' : 'img/rhino_default.png',\n    'rhinoLift' : 'img/rhino_lift.png',\n    'rhinoLiftMouthOpen' : 'img/rhino_lift_mouth_open.png',\n    'rhinoEat1' : 'img/rhino_lift_eat_1.png',\n    'rhinoEat2' : 'img/rhino_lift_eat_2.png',\n    'rhinoEat3' : 'img/rhino_lift_eat_3.png',\n    'rhinoEat4' : 'img/rhino_lift_eat_4.png',\n    'rhinoRunLeft' : 'img/rhino_run_left.png',\n    'rhinoRunLeft2' : 'img/rhino_run_left_2.png'\n};\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/variables.js?");

/***/ })

/******/ });