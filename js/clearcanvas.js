
'use strict';
import { ctx } from './variables.js';
import { vars } from './variables.js';

/**
 * clearCanvas()
 * clears the canvas for the next image placements
 * 
 */
export function clearCanvas() {
    ctx.clearRect(0, 0, vars.gameWidth, vars.gameHeight);
};