import {Physics} from "../classPhysics.js";

export class BlockH extends Physics
{
    modelGeometry = 'rectangle'     // для определения типа столкновения
    modelName = 'blockH'            // для пойска модели в сцене
    modelType = 'fixed'             // определяет отскок объекта при столкновении


    constructor(state, x, y, vx, vy, mass)
    {
        // Pass params to super class
        super(state, x, y, vx, vy, mass);
        this.context = state.context;
        this.isInteract = true;
        this.isRebound = true;
        this.w = state.canvas.width;
        this.h = 5;
        this.width = state.canvas.width;
        this.height = 5;
    }

    draw()
    {
        let deltaCameraX = this.state.getObjectFromShared('camera').deltaX
        let deltaCameraY = this.state.getObjectFromShared('camera').deltaY

        this.context.fillStyle = this.isColliding ? 'white' : 'green'
        this.context.fillRect(this.pos.x - deltaCameraX, this.pos.y - deltaCameraY, this.w, this.h)
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

        // this.pos.x = -player.pos.x / 4 + 30
        // this.pos.y = -player.pos.y / 4 + 50

        // this.pos.add(this.vel.clone().multiplyScalar(secondsPassed));

        // this.pos.x += this.vel.x * secondsPassed;
        // this.pos.y += this.vel.y * secondsPassed;
    }
}