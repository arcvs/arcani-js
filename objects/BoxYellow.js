import {Physics} from "../classPhysics.js";
import {Line, Rectangle, Point, Circle, Polygon} from "../classPrimitives.js";


export class BoxYellow extends Physics
{
    modelGeometry = 'rectangle'     // для определения типа столкновения

    constructor(...args)
    {
        // Pass params to super class
        super(...args);
        this.context = state.context;
        this.isInteract = true;
        this.isRebound = true;
        this.w = 10;
        this.h = 10;
        this.width = 10;
        this.height = 10;
    }

    draw()
    {

        let deltaCameraX = this.state.getObjectFromShared('camera').deltaX
        let deltaCameraY = this.state.getObjectFromShared('camera').deltaY

        this.context.fillStyle = this.isColliding ? 'white' : 'yellow';
        this.context.fillRect(this.pos.x - deltaCameraX, this.pos.y - deltaCameraY, this.w, this.h);
    }

    update(secondsPassed) {

        // if (this.pos.x < 0) {
        //     this.vel.invertX().x;
        //     this.pos.x = 0;
        // }
        // else if (this.pos.x + this.w > this.state.canvas.width) {
        //     this.vel.invertX();
        //     this.pos.x = this.state.canvas.width - this.w;
        // }
        //
        // if (this.pos.y < 0) {
        //     this.vel.invertY();
        //     this.pos.y = 0;
        // }
        // else if (this.pos.y + this.h > this.state.canvas.height) {
        //     this.vel.invertY();
        //     this.pos.y = this.state.canvas.height - this.h;
        // }



        this.pos.add(this.vel.clone().multiplyScalar(secondsPassed));

        // this.pos.x += this.vel.x * secondsPassed;
        // this.pos.y += this.vel.y * secondsPassed;

    }

}