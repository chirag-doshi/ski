'use strict';
import { ctx } from './variables.js';

/**
 * showInstructions()
 * show the game instructions on the page
 * 
 */
export function showInstructions() {
    ctx.font = '20px serif';
    ctx.fillText('Instructions: Down - Move down, Left - move left, Right - move right', 150, 30);
    ctx.fillText('Space - pause, Return key - reset game  ', 150, 50);
    ctx.fillText('Enjoy!  ', 150, 70);
}