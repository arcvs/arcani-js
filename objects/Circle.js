import {Physics} from "../classPhysics.js";

export class Circle extends Physics
{
    modelGeometry = 'circle'        // для определения типа столкновения
    modelName = 'ball'              // для пойска модели в сцене

    constructor (state, x, y, vx, vy, mass)
    {
        // Pass params to super class
        super(state, x, y, vx, vy, mass);

        this.context = state.context;
        // this.isInteract = true;
        this.isRebound = true;
        this.radius = this.mass;
        this.gravity = 10;
        this.restitution = 0.9;
        this.inertia = 0.997;
    }

    draw()
    {

        let deltaCameraX = this.state.getObjectFromShared('camera').deltaX
        let deltaCameraY = this.state.getObjectFromShared('camera').deltaY


        this.context.fillStyle = this.isColliding ? 'white' : 'red';
        this.context.beginPath();

        this.context.arc(this.pos.x-deltaCameraX, this.pos.y-deltaCameraY
            , this.mass, 0, 2 * Math.PI, false);

        this.context.fill();
    }


    update(secondsPassed)
    {
        if (this.radius > this.pos.x) {
            // this.vx = -this.vx * this.restitution;
            this.vel.invertX().multiplyScalarX(this.restitution);
            this.pos.x = this.radius;
        }
        else if (this.pos.x + this.radius > this.state.canvas.width) {
            // this.vx = -this.vx * this.restitution;
            this.vel.invertX().multiplyScalarX(this.restitution);
            this.pos.x = this.state.canvas.width - this.radius;
        }

        if (this.radius > this.pos.y) {
            // this.vy = -this.vy * this.restitution;
            this.vel.invertY().multiplyScalarY(this.restitution);
            this.pos.y = this.radius;
        }
        else if (this.pos.y + this.radius > this.state.canvas.height) {
            // this.vy = -this.vy * this.restitution;
            this.vel.invertY().multiplyScalarY(this.restitution);
            this.pos.y = this.state.canvas.height - this.radius;
        }

        this.vel.addScalarY(this.gravity);

        // console.log('Circle - Pos: ' + this.pos + ' --- Vel: ' + this.vel)

        this.vel.multiplyScalarX(this.inertia);

        this.pos.add(this.vel.clone().multiplyScalar(secondsPassed));
    }

}