$(document).ready(function() {

    let assets = {
        'skierCrash' : 'img/skier_crash.png',
        'skierLeft' : 'img/skier_left.png',
        'skierLeftDown' : 'img/skier_left_down.png',
        'skierDown' : 'img/skier_down.png',
        'skierRightDown' : 'img/skier_right_down.png',
        'skierRight' : 'img/skier_right.png',
        'tree' : 'img/tree_1.png',
        'treeCluster' : 'img/tree_cluster.png',
        'rock1' : 'img/rock_1.png',
        'rock2' : 'img/rock_2.png',

        'rhino' : 'img/rhino_default.png',
        'rhinoLift' : 'img/rhino_lift.png',
        'rhinoLiftMouthOpen' : 'img/rhino_lift_mouth_open.png',
        'rhinoEat1' : 'img/rhino_lift_eat_1.png',
        'rhinoEat2' : 'img/rhino_lift_eat_2.png',
        'rhinoEat3' : 'img/rhino_lift_eat_3.png',
        'rhinoEat4' : 'img/rhino_lift_eat_4.png',
        'rhinoRunLeft' : 'img/rhino_run_left.png',
        'rhinoRunLeft2' : 'img/rhino_run_left_2.png'
    };
    let loadedAssets = {};

    let obstacleTypes = [
        'tree',
        'treeCluster',
        'rock1',
        'rock2'
    ];

    let obstacles = [];

    let gameWidth = window.innerWidth;
    let gameHeight = window.innerHeight;
    let canvas = $('<canvas></canvas>')
        .attr('width', gameWidth * window.devicePixelRatio)
        .attr('height', gameHeight * window.devicePixelRatio)
        .css({
            width: gameWidth + 'px',
            height: gameHeight + 'px'
        });
    $('body').append(canvas);
    let ctx = canvas[0].getContext('2d');

    let skierDirection = 5;
    let skierMapX = 0;
    let skierMapY = 0;
    let skierSpeed = 8;

    let clearCanvas = function() {
        ctx.clearRect(0, 0, gameWidth, gameHeight);
    };

    let moveSkier = function() {
        switch(skierDirection) {
            case 2:
                skierMapX -= Math.round(skierSpeed / 1.4142);
                skierMapY += Math.round(skierSpeed / 1.4142);

                placeNewObstacle(skierDirection);
                break;
            case 3:
                skierMapY += skierSpeed;

                placeNewObstacle(skierDirection);
                break;
            case 4:
                skierMapX += skierSpeed / 1.4142;
                skierMapY += skierSpeed / 1.4142;

                placeNewObstacle(skierDirection);
                break;
        }
    };

    let getSkierAsset = function() {
        let skierAssetName;
        switch(skierDirection) {
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
        }

        return skierAssetName;
    };

    let drawSkier = function() {
        let skierAssetName = getSkierAsset();
        let skierImage = loadedAssets[skierAssetName];
        let x = (gameWidth - skierImage.width) / 2;
        let y = (gameHeight - skierImage.height) / 2;

        ctx.drawImage(skierImage, x, y, skierImage.width, skierImage.height);
    };

    let drawObstacles = function() {
        let newObstacles = [];

        _.each(obstacles, function(obstacle) {
            let obstacleImage = loadedAssets[obstacle.type];
            let x = obstacle.x - skierMapX - obstacleImage.width / 2;
            let y = obstacle.y - skierMapY - obstacleImage.height / 2;

            if(x < -100 || x > gameWidth + 50 || y < -100 || y > gameHeight + 50) {
                return;
            }

            ctx.drawImage(obstacleImage, x, y, obstacleImage.width, obstacleImage.height);

            newObstacles.push(obstacle);
        });

        obstacles = newObstacles;
    };

    let placeInitialObstacles = function() {
        let numberObstacles = Math.ceil(_.random(5, 7) * (gameWidth / 800) * (gameHeight / 500));

        let minX = -50;
        let maxX = gameWidth + 50;
        let minY = gameHeight / 2 + 100;
        let maxY = gameHeight + 50;

        for(let i = 0; i < numberObstacles; i++) {
            placeRandomObstacle(minX, maxX, minY, maxY);
        }

        obstacles = _.sortBy(obstacles, function(obstacle) {
            let obstacleImage = loadedAssets[obstacle.type];
            return obstacle.y + obstacleImage.height;
        });
    };

    let placeNewObstacle = function(direction) {
        let shouldPlaceObstacle = _.random(1, 8);
        if(shouldPlaceObstacle !== 8) {
            return;
        }

        let leftEdge = skierMapX;
        let rightEdge = skierMapX + gameWidth;
        let topEdge = skierMapY;
        let bottomEdge = skierMapY + gameHeight;

        switch(direction) {
            case 1: // left
                placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);
                break;
            case 2: // left down
                placeRandomObstacle(leftEdge - 50, leftEdge, topEdge, bottomEdge);
                placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);
                break;
            case 3: // down
                placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);
                break;
            case 4: // right down
                placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);
                placeRandomObstacle(leftEdge, rightEdge, bottomEdge, bottomEdge + 50);
                break;
            case 5: // right
                placeRandomObstacle(rightEdge, rightEdge + 50, topEdge, bottomEdge);
                break;
            case 6: // up
                placeRandomObstacle(leftEdge, rightEdge, topEdge - 50, topEdge);
                break;
        }
    };

    let placeRandomObstacle = function(minX, maxX, minY, maxY) {
        let obstacleIndex = _.random(0, obstacleTypes.length - 1);

        let position = calculateOpenPosition(minX, maxX, minY, maxY);

        obstacles.push({
            type : obstacleTypes[obstacleIndex],
            x : position.x,
            y : position.y
        })
    };

    let calculateOpenPosition = function(minX, maxX, minY, maxY) {
        let x = _.random(minX, maxX);
        let y = _.random(minY, maxY);

        let foundCollision = _.find(obstacles, function(obstacle) {
            return x > (obstacle.x - 50) && x < (obstacle.x + 50) && y > (obstacle.y - 50) && y < (obstacle.y + 50);
        });

        if(foundCollision) {
            return calculateOpenPosition(minX, maxX, minY, maxY);
        }
        else {
            return {
                x: x,
                y: y
            }
        }
    };

    let checkIfSkierHitObstacle = function() {
        let skierAssetName = getSkierAsset();
        let skierImage = loadedAssets[skierAssetName];
        let skierRect = {
            left: skierMapX + gameWidth / 2,
            right: skierMapX + skierImage.width + gameWidth / 2,
            top: skierMapY + skierImage.height - 5 + gameHeight / 2,
            bottom: skierMapY + skierImage.height + gameHeight / 2
        };

        let collision = _.find(obstacles, function(obstacle) {
            let obstacleImage = loadedAssets[obstacle.type];
            let obstacleRect = {
                left: obstacle.x,
                right: obstacle.x + obstacleImage.width,
                top: obstacle.y + obstacleImage.height - 5,
                bottom: obstacle.y + obstacleImage.height
            };

            return intersectRect(skierRect, obstacleRect);
        });

        if(collision) {
            skierDirection = 0;
        }
    };

    let intersectRect = function(r1, r2) {
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
    };

    let gameLoop = function() {

        ctx.save();

        // Retina support
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        clearCanvas();

        moveSkier();

        checkIfSkierHitObstacle();

        drawSkier();

        drawObstacles();

        ctx.restore();

        requestAnimationFrame(gameLoop);
    };

    let loadAssets = function() {
        let assetPromises = [];

        _.each(assets, function(asset, assetName) {
            let assetImage = new Image();
            let assetDeferred = new $.Deferred();

            assetImage.onload = function() {
                assetImage.width /= 2;
                assetImage.height /= 2;

                loadedAssets[assetName] = assetImage;
                assetDeferred.resolve();
            };
            assetImage.src = asset;

            assetPromises.push(assetDeferred.promise());
        });

        return $.when.apply($, assetPromises);
    };

    let setupKeyhandler = function() {
        $(window).keydown(function(event) {
            switch(event.which) {
                case 37: // left
                    if(skierDirection === 1) {
                        skierMapX -= skierSpeed;
                        placeNewObstacle(skierDirection);
                    }
                    else {
                        skierDirection = 1;
                    }
                    event.preventDefault();
                    break;
                case 39: // right
                    if(skierDirection === 5) {
                        skierMapX += skierSpeed;
                        placeNewObstacle(skierDirection);
                    }
                    else {
                        skierDirection++;
                    }
                    event.preventDefault();
                    break;
                case 38: // up
                    if(skierDirection === 1 || skierDirection === 5) {
                        skierMapY -= skierSpeed;
                        placeNewObstacle(6);
                    }
                    event.preventDefault();
                    break;
                case 40: // down
                    skierDirection = 3;
                    event.preventDefault();
                    break;
            }
        });
    };

    let initGame = function() {
        setupKeyhandler();
        loadAssets().then(function() {
            placeInitialObstacles();

            requestAnimationFrame(gameLoop);
        });
    };

    initGame(gameLoop);
});
