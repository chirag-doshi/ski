'use strict';
import { ctx } from './variables.js';
import { vars } from './variables.js';

/**
 * writescore()
 * writes the score on the canvas
 * 
 */
export function writeScore() {
    if (vars.skierDirection == 2 || vars.skierDirection == 3 || vars.skierDirection == 4) {
        vars.score++;
    }
    ctx.font = '24px serif';
    ctx.fillText('Score: ' + vars.score, 10, 30);
}