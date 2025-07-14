import {Physics} from "../classPhysics.js";

export class World extends Physics
{
    modelGeometry = 'rectangle'     // для определения типа столкновения
    modelName = 'world'        // для пойска модели в сцене
    static sprite

    constructor (state, x, y, w, h, url)
    {
        super(state, x, y)
        this.context = state.context

        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.width = w
        this.height = h

        World.sprite = super.loadImage(url, ()=>{})
    }

    draw() {


        let deltaCameraX = this.state.getObjectFromShared('camera').deltaX
        let deltaCameraY = this.state.getObjectFromShared('camera').deltaY

        this.context.drawImage(World.sprite, this.pos.x-deltaCameraX, this.pos.y-deltaCameraY, this.w, this.h);
    }

    update(secondsPassed) {
        // let camera = this.state.getObjectFromShared('camera')
        // this.state.getObjectFromShared('camera').modifier(this)
        // camera.modificator(World)
        // this.attach(camera)
    }
}