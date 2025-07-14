import {Physics} from "../classPhysics.js";

export class Player extends Physics
{
    modelGeometry = 'rectangle'     // для определения типа столкновения
    modelName = 'player'            // для пойска модели в сцене
    modelType = 'mobile'            // определяет отскок объекта при столкновении

    static sprite

    gravityPlayer = 0

    constructor (state, x, y, vx, vy, mass)
    {
        // Pass params to super class
        super(state, x, y, vx, vy, mass);
        this.context = state.context;
        this.state = state;
        this.isInteract = true;
        this.isRebound = true;

        // ширина и высота объекта
        this.w = 10;
        this.h = 90;
        this.width = 10;
        this.height = 90;

        // нормализация векора сокрости
        this.norm = this.vel.clone().normalize();
        // console.log(this)
    }

    draw() {

        let deltaCameraX = this.state.getObjectFromShared('camera').deltaX
        let deltaCameraY = this.state.getObjectFromShared('camera').deltaY

        this.context.fillStyle = "red";
        this.context.fillRect(this.pos.x - deltaCameraX, this.pos.y - deltaCameraY, this.w, this.h);
    }

    update(secondsPassed) {

        // сброс вектора направления
        this.vel.zero();

        // подключение гравитации
        // this.gravityPlayer +=  this.gravity
        // this.vel.addScalarY(this.gravityPlayer);

        // установка вектора скорости по осевому направлению
        if (this.isKeyDown('KeyD')) this.vel.x += this.vx; // вправо
        if (this.isKeyDown('KeyA')) this.vel.x -= this.vx; // влево
        if (this.isKeyDown('KeyW')) this.vel.y -= this.vy; // вверх
        if (this.isKeyDown('KeyS')) this.vel.y += this.vy; // вниз
        if (this.isKeyDown('Space')) this.vel.y = -200; // вниз



        // определение движения по диогонали и его корректировка с помощью нормализации
        if (this.vel.x && this.vel.y) {
            this.pos.x += this.vel.x * this.norm.x * secondsPassed;
            this.pos.y += this.vel.y * this.norm.y * secondsPassed;
            // this.state.getObjectFromShared('camera').modifier(this)
        } else {
            this.pos.x += this.vel.x * secondsPassed;
            this.pos.y += this.vel.y * secondsPassed;
            // this.pos.add(this.vel.clone().multiplyScalar(secondsPassed));
        }



        // this.state.getObjectFromShared('camera').calcDeltaPosCamera(this)

        // console.log('Player - Pos: ' + this.pos + ' --- Vel: ' + this.vel)

        // if (this.pos.y <= 0) {
        //     // console.log(this.state)
        //     this.state.setScene('Level2');
        // }
        //
        // if (this.pos.x <= 0) {
        //     // console.log(this.state)
        //     this.state.setScene('Level1');
        // }


        // if (this.isKeyDown('KeyD')) this.pos.addX(this.vel.clone().multiplyScalarX(secondsPassed));
        // if (this.isKeyDown('KeyA')) this.pos.subtractX(this.vel.clone().multiplyScalarX(secondsPassed));
        // if (this.isKeyDown('KeyW')) this.pos.subtractY(this.vel.clone().multiplyScalarY(secondsPassed));
        // if (this.isKeyDown('KeyS')) this.pos.addY(this.vel.clone().multiplyScalarY(secondsPassed));
    }
}