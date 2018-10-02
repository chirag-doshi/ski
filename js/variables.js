
let vars = {
    'loadedAssets' : {},
    'skierDirection' : 5,
    'skierMapX' : 0,
    'skierMapY' : 0,
    'skierSpeed' : 8,
    'score' : 0,
    'gameWidth' : window.innerWidth,
    'gameHeight' : window.innerHeight
}

let canvas = $('<canvas></canvas>')
    .attr('width', vars.gameWidth * window.devicePixelRatio)
    .attr('height', vars.gameHeight * window.devicePixelRatio)
    .css({
        width: vars.gameWidth + 'px',
        height: vars.gameHeight + 'px'
    });
    $('body').append(canvas);
let ctx = canvas[0].getContext('2d');
let obstacleTypes = [ 
    'tree',
    'treeCluster',
    'rock1',
    'rock2'
]; 
let obstacles = [];
const assets = {
    'skierCrash' : 'img/skier_crash.png',
    'skierLeft' : 'img/skier_left.png',
    'skierLeftDown' : 'img/skier_left_down.png',
    'skierDown' : 'img/skier_down.png',
    'skierRightDown' : 'img/skier_right_down.png',
    'skierRight' : 'img/skier_right.png',
    'tree' : 'img/tree_1.png',
    'treeCluster' : 'img/tree_cluster.png',
    'rock1' : 'img/rock_1.png',
    'rock2' : 'img/rock_2.png'
};

export { canvas };
export { ctx };
export { obstacleTypes };
export { obstacles };
export { assets };
export { vars };


