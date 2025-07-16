import {Line, Rectangle, Point, Circle, Polygon} from "../classPrimitives.js";
import {State} from '../classState.js'

export class FPS extends Point
{
    fps = 0;

    constructor (...args)
    {
        super(...args);
        // console.log(this)
        // this.isInteract = false;
    }

    draw(ctx)
    {
        ctx.font = '17px Arial';
        ctx.fillStyle = 'red';
        ctx.fillStyle = this.isKeyDown('KeyQ') ? 'white' : 'red';
        ctx.fillText("FPS: " + this.fps, this.pos.x, this.pos.y);
    }

    update(dt)
    {
        this.fps = Math.round(1 / dt);
    }
}