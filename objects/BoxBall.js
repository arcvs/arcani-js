import {Line, Rectangle, Point, Circle, Polygon} from "../classPrimitives.js";
import {Storage} from "../classStorage.js";
import {Scene} from "../classScene.js";

export class BoxBall extends Rectangle {

    modelName = 'ball'

    constructor(vx, vy, x, y, width, height)
    {
        super(vx, vy, x, y, width, height)
        // this.isInteract = false;
        this.pos.x = Storage.canvasWidth / 2
        this.pos.y = Storage.canvasHeight / 2

        this.defaultVel = this.vel.clone()
        this.norm = this.vel.clone().normalize();

        console.log(Scene.getObject('global', 'camera'))

    }

    update(dt) {

        // console.log(this.vel)

        // сброс вектора направления
        this.vel.zero();

        // подключение гравитации
        // this.gravityPlayer +=  this.gravity
        // this.vel.addScalarY(this.gravityPlayer);

        // установка вектора скорости по осевому направлению
        if (this.isKeyDown('KeyD')) this.vel.x += this.defaultVel.x; // вправо
        if (this.isKeyDown('KeyA')) this.vel.x -= this.defaultVel.x; // влево
        if (this.isKeyDown('KeyW')) this.vel.y -= this.defaultVel.y; // вверх
        if (this.isKeyDown('KeyS')) this.vel.y += this.defaultVel.y; // вниз
        // if (this.isKeyDown('Space')) this.vel.y = -200; // вниз

        // определение движения по диагонали и его корректировка с помощью нормализации
        if (this.vel.x && this.vel.y) {
            this.pos.x += this.vel.x * this.norm.x * dt;
            this.pos.y += this.vel.y * this.norm.y * dt;
            // this.state.getObjectFromShared('camera').modifier(this)
        } else {
            this.pos.x += this.vel.x * dt;
            this.pos.y += this.vel.y * dt;
            // this.pos.add(this.vel.clone().m1ultiplyScalar(secondsPassed));
        }
    }

    draw(ctx) {
        let deltaCameraX = 0
        let deltaCameraY = 0

        ctx.fillStyle = this.isColliding ? 'white' : 'green'
        ctx.fillRect(this.pos.x - deltaCameraX, this.pos.y - deltaCameraY, this.width, this.height)
        // console.log(this.pos)
    }
}