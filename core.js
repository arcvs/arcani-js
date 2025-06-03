"use strict";
import {ObjBox} from './ObjGame_Box_Test.js';
import {FPS} from './objFPS.js';

window.onload = initializeCanvas;

let state= {
    canvas: null,
    context: null,
    frame: {
        currentTimeStampMs: 0,
        lastTimeStampMs: 0,
    },
    pressedKeys: new Set(),
    gameObjects: []
}

function initializeCanvas() {
    state.canvas = document.getElementById('canvas');
    state.context = state.canvas.getContext('2d');

    document.addEventListener('keydown', (e) => state.pressedKeys.add(e.code));
    document.addEventListener('keyup', (e) => state.pressedKeys.delete(e.code));
    state.canvas.addEventListener("click", (e) => console.log(e));

    // Create Scene
    state.gameObjects.push(new FPS(state,10,30, 0,0,0));
    state.gameObjects.push(new ObjBox(state,110,90,0,0, 0));
    state.gameObjects.push(new ObjBox(state,150,320,0,0,0));

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
    // Calculate the number of seconds passed since the last frame
    state.frame.currentTimeStampMs = (timeStamp - state.frame.lastTimeStampMs) / 1000;
    state.frame.currentTimeStampMs = Math.min(state.frame.currentTimeStampMs, 0.1);
    state.frame.lastTimeStampMs = timeStamp;

    for (let i = 0; i <  state.gameObjects.length; i++) {
        state.gameObjects[i].update(state.frame.currentTimeStampMs);
    }

    // Collision detection
    for (let i = 0; i <  state.gameObjects.length; i++) {
        for (let j = i + 1; j <  state.gameObjects.length; j++) {
            if (state.gameObjects[i].isInteract === true && state.gameObjects[j].isInteract === true) {
                if (state.gameObjects[i].checkColliding(state.gameObjects[j])) {
                    state.gameObjects[i].isColliding = true;
                    state.gameObjects[j].isColliding = true;
                }
            }
        }
    }

    state.context.clearRect(0, 0, state.canvas.width, state.canvas.height);

    for (let i = 0; i <  state.gameObjects.length; i++) {
        state.gameObjects[i].draw();
    }

    // The loop function has reached it's end. Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}


