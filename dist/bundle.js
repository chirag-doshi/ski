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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assetsClass\", function() { return assetsClass; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n\n\n\n\n/**\n * assetsClass\n * show the game instructions on the page\n * \n */\nclass assetsClass {\n\n    /**\n     * loadAssets()\n     * loads the assets to the loadedAssets array\n     * \n     */\n    loadAssets() {\n        var assetPromises = [];\n        var loadedAssetsData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets;\n\n        _.each(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"assets\"], function (asset, assetName) {\n            var assetImage = new Image();\n            var assetDeferred = new $.Deferred();\n\n            assetImage.onload = function () {\n                assetImage.width /= 2;\n                assetImage.height /= 2;\n                loadedAssetsData[assetName] = assetImage;\n                assetDeferred.resolve();\n            };\n            assetImage.src = asset;\n\n            assetPromises.push(assetDeferred.promise());\n        });\n\n        return $.when.apply($, assetPromises);\n    };\n};\n\n//# sourceURL=webpack:///./js/assets.js?");

/***/ }),

/***/ "./js/clearcanvas.js":
/*!***************************!*\
  !*** ./js/clearcanvas.js ***!
  \***************************/
/*! exports provided: clearCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearCanvas\", function() { return clearCanvas; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n\n\n\n\n\n/**\n * clearCanvas()\n * clears the canvas for the next image placements\n * \n */\nfunction clearCanvas() {\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].clearRect(0, 0, _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth, _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight);\n};\n\n//# sourceURL=webpack:///./js/clearcanvas.js?");

/***/ }),

/***/ "./js/collision.js":
/*!*************************!*\
  !*** ./js/collision.js ***!
  \*************************/
/*! exports provided: collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collision\", function() { return collision; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n/* harmony import */ var _skier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skier.js */ \"./js/skier.js\");\n\n\n\n\n\n\n/**\n * collision class\n * has methods that deal with the collision of the skier and obstacles\n * requires skier object and obstacle Object\n * \n */\nclass collision {\n\n    /**\n     * constructor()\n     * constructor for the collision class\n     * \n     */\n    constructor(skierObj, obstacleObj) {\n        this.skierObj = skierObj;\n        this.obstacleObj = obstacleObj;\n        this.collision == null;\n    }\n\n    /**\n     * checkIfSkierHistsObstacle()\n     * checks if the skier object instersects with any obstacles\n     * \n     */\n    checkIfSkierHitObstacle() {\n        var skierAssetName = this.skierObj.getSkierAsset();\n        var skierImage = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets[skierAssetName];\n        var skierRect = {\n            left: _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth / 2,\n            right: _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX + skierImage.width + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth / 2,\n            top: _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY + skierImage.height - 5 + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight / 2,\n            bottom: _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY + skierImage.height + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight / 2\n        };\n\n        var context = this;\n        var loadedAssetsData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets;\n\n        var collision = _.find(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"], function (obstacle) {\n            var obstacleImage = loadedAssetsData[obstacle.type];\n            var obstacleRect = {\n                left: obstacle.x,\n                right: obstacle.x + obstacleImage.width,\n                top: obstacle.y + obstacleImage.height - 5,\n                bottom: obstacle.y + obstacleImage.height\n            };\n\n            return context.intersectRect(skierRect, obstacleRect);\n        });\n\n        if (collision) {\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection = 0;\n        }\n    };\n\n    /**\n     * intersectRect()\n     * determines if the blocks of images intersect\n     * \n     */\n    intersectRect(r1, r2) {\n        return !(r2.left > r1.right ||\n            r2.right < r1.left ||\n            r2.top > r1.bottom ||\n            r2.bottom < r1.top);\n    };\n\n    /**\n     * crash()\n     * actions when the skier crash is determined\n     * \n     */\n    crash() {\n        if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 0) {\n            var skierAssetName = this.skierObj.getSkierAsset();\n            var skierImage = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets[skierAssetName];\n            var x = (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth) / 3;\n            var y = (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight - (skierImage.height * 2)) / 2;\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].font = '24px serif';\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = 'red';\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText('Game Over!', x, y);\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText('Your Score: (' + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].score + ')', x, y + 25);\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText('Press enter key to reset', x, y + 50);\n        }\n    }\n};\n\n//# sourceURL=webpack:///./js/collision.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.js */ \"./js/score.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacles */ \"./js/obstacles.js\");\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets.js */ \"./js/assets.js\");\n/* harmony import */ var _collision_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collision.js */ \"./js/collision.js\");\n/* harmony import */ var _skier_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skier.js */ \"./js/skier.js\");\n/* harmony import */ var _instructions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instructions */ \"./js/instructions.js\");\n/* harmony import */ var _clearcanvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clearcanvas */ \"./js/clearcanvas.js\");\n/* harmony import */ var _initgame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initgame */ \"./js/initgame.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * jquery document ready function()\n * \n */\n$(function () {\n\n    var assetsObj = new _assets_js__WEBPACK_IMPORTED_MODULE_3__[\"assetsClass\"]();\n    var obstacleObj = new _obstacles__WEBPACK_IMPORTED_MODULE_2__[\"obstaclesClass\"]();\n    var skierObj = new _skier_js__WEBPACK_IMPORTED_MODULE_5__[\"skier\"](obstacleObj);\n    var collisionObj = new _collision_js__WEBPACK_IMPORTED_MODULE_4__[\"collision\"](skierObj, obstacleObj);\n\n    /**\n     * gameLoop()\n     * game loop method for looping the elements of the game\n     * \n     */\n    function gameLoop() {\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].save();\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].scale(window.devicePixelRatio, window.devicePixelRatio);\n        Object(_clearcanvas__WEBPACK_IMPORTED_MODULE_7__[\"clearCanvas\"])();\n        skierObj.moveSkier();\n        collisionObj.checkIfSkierHitObstacle();\n        skierObj.drawSkier();\n        obstacleObj.drawObstacles();\n        Object(_score_js__WEBPACK_IMPORTED_MODULE_1__[\"writeScore\"])();\n        Object(_instructions__WEBPACK_IMPORTED_MODULE_6__[\"showInstructions\"])();\n        skierObj.skierPause()\n        skierObj.skierIncreaseSpeed();\n        collisionObj.crash();\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].restore();\n        requestAnimationFrame(gameLoop);\n    };\n\n\n    Object(_initgame__WEBPACK_IMPORTED_MODULE_8__[\"initGame\"])(assetsObj, obstacleObj, gameLoop);\n});\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/initgame.js":
/*!************************!*\
  !*** ./js/initgame.js ***!
  \************************/
/*! exports provided: initGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initGame\", function() { return initGame; });\n/* harmony import */ var _keyhandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyhandler.js */ \"./js/keyhandler.js\");\n\n\n\n\n    /**\n     * initGame(assetsObj, obstacleObj, gameLoop) accepts assets object, \n     * obstacle object and gameloop\n     * \n     * initializes the game\n     * \n     */\n    function initGame(assetsObj, obstacleObj, gameLoop) {\n        Object(_keyhandler_js__WEBPACK_IMPORTED_MODULE_0__[\"setupKeyhandler\"])(assetsObj, obstacleObj, gameLoop);\n        assetsObj.loadAssets().then(function () {\n            obstacleObj.placeInitialObstacles();\n            requestAnimationFrame(gameLoop);\n        });\n    };\n\n//# sourceURL=webpack:///./js/initgame.js?");

/***/ }),

/***/ "./js/instructions.js":
/*!****************************!*\
  !*** ./js/instructions.js ***!
  \****************************/
/*! exports provided: showInstructions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showInstructions\", function() { return showInstructions; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n\n\n\n/**\n * showInstructions()\n * show the game instructions on the page\n * \n */\nfunction showInstructions() {\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].font = '20px serif';\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText('Instructions: Down - Move down, Left - move left, Right - move right', 150, 30);\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText('Space - pause, Return key - reset game  ', 150, 50);\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText('Enjoy!  ', 150, 70);\n}\n\n//# sourceURL=webpack:///./js/instructions.js?");

/***/ }),

/***/ "./js/keyhandler.js":
/*!**************************!*\
  !*** ./js/keyhandler.js ***!
  \**************************/
/*! exports provided: setupKeyhandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupKeyhandler\", function() { return setupKeyhandler; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n/* harmony import */ var _clearcanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearcanvas */ \"./js/clearcanvas.js\");\n/* harmony import */ var _initgame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initgame */ \"./js/initgame.js\");\n\n\n\n\n\n\n/**\n * setupKeyhandler(obstacleObj) requires the obstacle Object\n * determines what action is generated on certain key press\n * \n */\nfunction setupKeyhandler(assetsObj, obstacleObj, gameLoop) {\n\n    $(window).keydown(function (event) {\n\n    var obstaclesArray = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"];\n        switch (event.which) {\n            case 37: // left\n                if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 1) {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX -= _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed;\n                    obstacleObj.placeNewObstacle(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection);\n                } else if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection <= 0) {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection = 1;\n                } else {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection--;\n                }\n                event.preventDefault();\n                break;\n            case 39: // right\n                if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 5) {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX += _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed;\n                    obstacleObj.placeNewObstacle(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection);\n                } else {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection++;\n                }\n                event.preventDefault();\n                break;\n            case 38: // up\n                if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 1 || _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 5) {\n                    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY -= _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed;\n                    obstacleObj.placeNewObstacle(6);\n                }\n                event.preventDefault();\n                break;\n            case 40: // down\n                if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 0) {\n                    document.location.reload();\n                }\n                _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection = 3;\n                event.preventDefault();\n                break;\n            case 32: // space key\n                _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection = 6;\n                event.preventDefault();\n                break;\n            case 13: // enter key\n                Object(_initgame__WEBPACK_IMPORTED_MODULE_2__[\"initGame\"])(assetsObj, obstacleObj, gameLoop);\n                document.location.reload();\n                event.preventDefault();\n        }\n    });\n};\n\n//# sourceURL=webpack:///./js/keyhandler.js?");

/***/ }),

/***/ "./js/obstacles.js":
/*!*************************!*\
  !*** ./js/obstacles.js ***!
  \*************************/
/*! exports provided: obstaclesClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obstaclesClass\", function() { return obstaclesClass; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n\n\n\n\n\n\n/**\n * obstaclesClass() \n * deals with the obstacles of the game\n * \n */\nclass obstaclesClass {\n\n    drawObstacles() {\n        var newObstacles = [];\n        var loadedAssetsData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets;\n        var gameWidthData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth;\n        var gameHeightData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight;\n        var ctxData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"];\n        var skierMapXData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX;\n        var skierMapYData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY;\n        var obstaclesData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"];\n\n        _.each(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"], function (obstacle) {\n            var obstacleImage = loadedAssetsData[obstacle.type];\n            var x = obstacle.x - skierMapXData - obstacleImage.width / 2;\n            var y = obstacle.y - skierMapYData - obstacleImage.height / 2;\n\n            if (x < -100 || x > gameWidthData + 50 || y < -100 || y > gameHeightData + 50) {\n                return;\n            }\n\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(obstacleImage, x, y, obstacleImage.width, obstacleImage.height);\n            newObstacles.push(obstacle);\n        });\n\n        obstaclesData = newObstacles;\n    };\n\n    /**\n     * placeInitialObstacles()\n     * add the obstacles for the start of the game\n     * \n     */\n    placeInitialObstacles() {\n        var numberObstacles = Math.ceil(_.random(5, 7) * (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth / 800) * (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].GameHeight / 500));\n        var minX = -50;\n        var maxX = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth + 50;\n        var minY = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight / 2 + 100;\n        var maxY = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight + 50;\n        var loadedAssetsData = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets;\n\n        for (var i = 0; i < numberObstacles; i++) {\n            this.placeRandomObstacle(minX, maxX, minY, maxY);\n        }\n\n        var obstacles = _.sortBy(obstacles, function (obstacle) {\n            var obstacleImage = loadedAssetsData[obstacle.type];\n            return obstacle.y + obstacleImage.height;\n        });\n    };\n\n    /**\n     * placeNewObstacle(direction) takes a direction variable\n     * adds new obstacles as the skier moves\n     * \n     */\n    placeNewObstacle(direction) {\n        var shouldPlaceObstacle = _.random(1, 8);\n\n        if (shouldPlaceObstacle !== 8) {\n            return;\n        }\n\n        var leftEdge = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX;\n        var rightEdge = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth;\n        var topEdge = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY;\n        var bottomEdge = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight;\n\n        switch (direction) {\n            case 1: // left\n                this.placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);\n                break;\n            case 2: // left down\n                this.placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);\n                this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);\n                break;\n            case 3: // down\n                this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);\n                break;\n            case 4: // right down\n                this.placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);\n                this.placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);\n                break;\n            case 5: // right\n                this.placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);\n                break;\n            case 6: // up\n                this.placeRandomObstacle(leftEdge, rightEdge, topEdge - 50, topEdge);\n                break;\n        }\n    };\n\n    /**\n     * placeRandomObstacle(minX, maxX, minY, maxY) takes the coordinates of the canvas\n     * places random object positions\n     * \n     */\n    placeRandomObstacle(minX, maxX, minY, maxY) {\n        var obstacleIndex = _.random(0, _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacleTypes\"].length - 1);\n        var position = this.calculateOpenPosition(minX, maxX, minY, maxY);\n\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"].push({\n            type: _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacleTypes\"][obstacleIndex],\n            x: position.x,\n            y: position.y\n        })\n    };\n\n    /**\n     * calculateOpenPosition(minX, maxX, minY, maxY) takes the coordinates of the canvas\n     * calculates positions that are open for object placement\n     * \n     */\n    calculateOpenPosition(minX, maxX, minY, maxY) {\n        var x = _.random(minX, maxX);\n        var y = _.random(minY, maxY);\n\n        var foundCollision = _.find(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"obstacles\"], function (obstacle) {\n            return x > (obstacle.x - 50) && x < (obstacle.x + 50) && y > (obstacle.y - 50) && y < (obstacle.y + 50);\n        });\n\n        if (foundCollision) {\n            return this.calculateOpenPosition(minX, maxX, minY, maxY);\n        } else {\n            return {\n                x: x,\n                y: y\n            }\n        }\n    };\n};\n\n//# sourceURL=webpack:///./js/obstacles.js?");

/***/ }),

/***/ "./js/score.js":
/*!*********************!*\
  !*** ./js/score.js ***!
  \*********************/
/*! exports provided: writeScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"writeScore\", function() { return writeScore; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n\n\n\n\n/**\n * writescore()\n * writes the score on the canvas\n * \n */\nfunction writeScore() {\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 2 || _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 3 || _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 4) {\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].score++;\n    }\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].font = '24px serif';\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText('Score: ' + _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].score, 10, 30);\n}\n\n//# sourceURL=webpack:///./js/score.js?");

/***/ }),

/***/ "./js/skier.js":
/*!*********************!*\
  !*** ./js/skier.js ***!
  \*********************/
/*! exports provided: skier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"skier\", function() { return skier; });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./js/variables.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacles */ \"./js/obstacles.js\");\n\n\n\n\n\n/**\n * skier requires obstacleObj on object initiation\n * has methods that deals with the skier object\n * \n */\nclass skier {\n\n    /**\n     * constructor(obstacleObj)\n     * skier class constructor\n     * \n     */\n    constructor(obstacleObj) {\n        this.obstacleObj = obstacleObj;\n    }\n\n    /**\n     * moveSkier()\n     * moves the skier in the game\n     * \n     */\n    moveSkier() {\n        switch (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection) {\n            case 2:\n                _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX -= Math.round(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed / 1.4142);\n                _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY += Math.round(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed / 1.4142);\n                this.obstacleObj.placeNewObstacle(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection);\n                break;\n            case 3:\n                _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY += _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed;\n                this.obstacleObj.placeNewObstacle(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection);\n                break;\n            case 4:\n                _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapX += _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed / 1.4142;\n                _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierMapY += _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed / 1.4142;\n                this.obstacleObj.placeNewObstacle(_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection);\n                break;\n        }\n    };\n\n    /**\n     * getSkierAsset()\n     * get the skier asset name according to the direction of skier\n     * \n     */\n    getSkierAsset() {\n        var skierAssetName;\n        switch (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection) {\n            case 0:\n                skierAssetName = 'skierCrash'\n                break;\n            case 1:\n                skierAssetName = 'skierLeft';\n                break;\n            case 2:\n                skierAssetName = 'skierLeftDown';\n                break;\n            case 3:\n                skierAssetName = 'skierDown';\n                break;\n            case 4:\n                skierAssetName = 'skierRightDown';\n                break;\n            case 5:\n                skierAssetName = 'skierRight';\n                break;\n            case 6:\n                skierAssetName = 'skierRight';\n                break;\n        }\n\n        return skierAssetName;\n    };\n\n    /**\n     * drawSkier()\n     * draws the skier on the canvas\n     * \n     */\n    drawSkier() {\n        var skierAssetName = this.getSkierAsset();\n        var skierImage = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets[skierAssetName];\n        var x = (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth - skierImage.width) / 2;\n        var y = (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight - skierImage.height) / 2;\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(skierImage, x, y, skierImage.width, skierImage.height);\n    };\n\n    /**\n     * skierPause()\n     * pauses the skier in the game\n     * \n     */\n    skierPause() {\n        if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierDirection == 6) {\n            var skierAssetName = this.getSkierAsset();\n            var skierImage = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].loadedAssets[skierAssetName];\n            var x = (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameWidth) / 3;\n            var y = (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].gameHeight - (skierImage.height * 2)) / 2;\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].font = '24px serif';\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = 'red';\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText('Game Paused. Press down key to continue ...', x, y);\n        }\n    }\n\n    /**\n     * skierIncreaseSpeed()\n     * Increases the skiers speed level when certain scores are achieved\n     * \n     */\n    skierIncreaseSpeed() {\n        if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].score == 500) {\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed++;\n        } else if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].score == 1000) {\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed += 2;\n        } else if (_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].score == 2000) {\n            _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"vars\"].skierSpeed += 4;\n        }\n    }\n};\n\n//# sourceURL=webpack:///./js/skier.js?");

/***/ }),

/***/ "./js/variables.js":
/*!*************************!*\
  !*** ./js/variables.js ***!
  \*************************/
/*! exports provided: canvas, ctx, obstacleTypes, obstacles, assets, vars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obstacleTypes\", function() { return obstacleTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obstacles\", function() { return obstacles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assets\", function() { return assets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vars\", function() { return vars; });\n\n\n/**\n * vars - general variables object\n * \n */\nlet vars = {\n    'loadedAssets': {},\n    'skierDirection': 5,\n    'skierMapX': 0,\n    'skierMapY': 0,\n    'skierSpeed': 8,\n    'score': 0,\n    'gameWidth': window.innerWidth,\n    'gameHeight': window.innerHeight\n}\n\n/**\n * canvas - canvas variable\n * \n */\nlet canvas = $('<canvas></canvas>')\n    .attr('width', vars.gameWidth * window.devicePixelRatio)\n    .attr('height', vars.gameHeight * window.devicePixelRatio)\n    .css({\n        width: vars.gameWidth + 'px',\n        height: vars.gameHeight + 'px'\n    });\n\n/**\n * append the canvas to the body of the page\n * \n */\n$('body').append(canvas);\n\n/**\n *  ctx - set variable to canvas 2d\n * \n */\nlet ctx = canvas[0].getContext('2d');\n\n/**\n * obstacleTypes - array of obstacle types\n * \n */\nlet obstacleTypes = [\n    'tree',\n    'treeCluster',\n    'rock1',\n    'rock2'\n];\n\n/**\n * obstacles - array of obstacles\n * \n */\nlet obstacles = [];\n\n/**\n * assets - assets objects with image link\n * \n */\nconst assets = {\n    'skierCrash': 'img/skier_crash.png',\n    'skierLeft': 'img/skier_left.png',\n    'skierLeftDown': 'img/skier_left_down.png',\n    'skierDown': 'img/skier_down.png',\n    'skierRightDown': 'img/skier_right_down.png',\n    'skierRight': 'img/skier_right.png',\n    'tree': 'img/tree_1.png',\n    'treeCluster': 'img/tree_cluster.png',\n    'rock1': 'img/rock_1.png',\n    'rock2': 'img/rock_2.png'\n};\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/variables.js?");

/***/ })

/******/ });