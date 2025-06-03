import {GameObject} from "./classGameObject.js";
// alert("asd");
export class FPS extends GameObject
{
    fps = 0;

    constructor (state, x, y, vx, vy, mass)
    {
        // Pass params to super class
        super(state, x, y, vx, vy, mass);
        // this.state = state;
        this.context = state.context;
        this.isInteract = true;
    }

    draw()
    {
        this.context.font = '17px Arial';
        this.context.fillStyle = this.isKeyDown('KeyD') ? 'white' : 'red';
        this.context.fillText("FPS: " + this.fps, this.x, this.y);
    }

    update(secondsPassed)
    {
        this.fps = Math.round(1 / secondsPassed);
    }

    checkColliding(obj2) {
        // console.log(obj2);
        // this.rectIntersect()
    }


}