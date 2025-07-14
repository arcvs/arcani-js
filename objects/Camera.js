import {Line, Rectangle, Point, Circle, Polygon} from "../classPrimitives.js";
import {Storage} from "../classStorage.js";

export class Camera extends Point
{
    modelGeometry = 'rectangle'     // для определения типа столкновения
    modelName = 'camera'            // для пойска модели в сцене

    constructor(vx, vy)
    {
        super(vx, vy);
        this.width = 40
        this.height = 40
        this.pos.x = Storage.canvasWidth / 2 - this.width / 2;
        this.pos.y = Storage.canvasHeight / 2 - this.height / 2;
        this.deltaX = 0
        this.deltaY = 0
    }

    calcDeltaPosCamera(player){
        this.deltaX = player.pos.x - this.pos.x
        this.deltaY = player.pos.y - this.pos.y
        // console.log('Player: ' + player.pos + ' --- Camera: ' + this.pos + ' Delta: ' + (player.pos.x - this.pos.x) )
    }

    draw(ctx)
    {
        ctx.fillStyle = '#8000ff30';
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }

    update(dt) {
        // let player = this.state.getObjectFromShared('player');
        // this.direction.zero();
    }
}
