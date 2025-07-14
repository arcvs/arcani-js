import {Storage} from './classStorage.js'
export class Physics extends Storage
{
    static storage

    constructor (state, x, y, vx, vy, mass) {
        super()
        this.state = state;
        this.pos = new Victor(x, y);
        this.vel = new Victor(vx, vy);
        // this.vx = vx
        // this.vy = vy

        this.gravity = 10;
        this.restitution = 1;
        this.mass = mass;
        // this.isInteract = false;     // взаимодействие с другими объектами
        this.isRebound = false;         // отскакивание от других объектов
        this.isColliding = false;       // состояние пересечения объекта
        this.isKeyDown = (key) => Storage.pressedKeys.has(key);

    }

    // loadImage(context, urlPic, x, y, w, h)
    loadImage(url, cb)
    {
        // Check for an existing image
        // if (!sprite)
        // {
            // No image found, create a new element
            let sprite = new Image();

            // Handle a successful load
            sprite.onload = () =>
            {
                // Define the size of a frame
                // GameObject.frameWidth = GameObject.sprite.width / GameObject.numColumns;
                // GameObject.frameHeight = GameObject.sprite.height / GameObject.numRows;
                // console.log(`Изображение загружено, размеры ${sprite.width}x${sprite.height}`);
                cb();
            };

            // Start loading the image
            sprite.src = url;
            return sprite;
        // }
    }

    resetCollisionState() {
        this.isColliding = false;
    }

    detectCollision(obj2) {

        let obj1 = this;

        if (this.isRebound === false || obj2.isRebound === false) return false;

        if (this.radius && obj2.radius) {
            if (this.circleIntersect(this.pos.x, this.pos.y, this.radius, obj2.pos.x, obj2.pos.y, obj2.radius)) {
                this.isColliding = true;
                obj2.isColliding = true;
                this.makeReboundCircle(this, obj2)
            }
        }
        else if (this.radius || obj2.radius) {

        }
        // else if (this.rectIntersect(this.pos.x, this.pos.y, this.w, this.h, obj2.pos.x, obj2.pos.y, obj2.w, obj2.h)) {
        else if (this.rectIntersect(obj1, obj2)) {
            obj1.isColliding = true;
            obj2.isColliding = true;
            this.makeReboundRect(obj1, obj2)
        }
    }


    // отскок окружностей
    makeReboundCircle(obj1, obj2) {
        let vCollision = {x: obj2.pos.x - obj1.pos.x, y: obj2.pos.y - obj1.pos.y};
        let distance = Math.sqrt((obj2.pos.x-obj1.pos.x)*(obj2.pos.x-obj1.pos.x) + (obj2.pos.y-obj1.pos.y)*(obj2.pos.y-obj1.pos.y));
        let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
        let vRelativeVelocity = {x: obj1.vel.x - obj2.vel.x, y: obj1.vel.y - obj2.vel.y};
        let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
        speed *= Math.min(obj1.restitution, obj2.restitution);
        if (speed > 0){
            let impulse = 2 * speed / (obj1.mass + obj2.mass);
            obj1.vel.x -= (impulse * obj2.mass * vCollisionNorm.x);
            obj1.vel.y -= (impulse * obj2.mass * vCollisionNorm.y);
            obj2.vel.x += (impulse * obj1.mass * vCollisionNorm.x);
            obj2.vel.y += (impulse * obj1.mass * vCollisionNorm.y);
        }
    }

    makeReboundRect1(obj1, obj2){

        let [top1, right1, left1, bottom1] = [
            obj1.pos,
            obj1.pos.clone().add({x: obj1.width, y: 0}),
            obj1.pos.clone().add({x: obj1.width, y: obj1.height}),
            obj1.pos.clone().add({x: 0, y: obj1.height})
        ]

        let [top2, right2, left2, bottom2] = [
            obj2.pos,
            obj2.pos.clone().add({x: obj2.width, y: 0}),
            obj2.pos.clone().add({x: obj2.width, y: obj2.height}),
            obj2.pos.clone().add({x: 0, y: obj2.height})
        ]
    }

    liniPoint(obj1, obj2) {

    }

    lineLine(obj1, obj2) {

        let line = []

        // calculate the direction of the lines
        let uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
        let uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));

        // if uA and uB are between 0-1, lines are colliding
        if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
            return true;
        }

        return false;
    }

    // Отскок прямоугольников (т.к предварительно проверяется состояние пересечения по всем осям,
    // то проверку для отскока можно делать по одной стороне)
    makeReboundRect(obj1, obj2){

        // if (obj1.modelType === 'fixed') {
        // if (obj2.modelType === 'fixed') {


        // if (obj1.pos.y + obj1.h >= obj2.pos.y && obj2.pos.y + obj2.h >= obj1.pos.y) {
        // if (obj1.pos.x + obj1.w >= obj2.pos.x && obj2.pos.x + obj2.w >= obj1.pos.x) {

        // obj1.pos.;

        let height;
        let width;

        let summHeight = obj1.h + obj2.h
        let summWidth = obj1.w + obj2.w;


        // Определяемя глубину проникновения по осям

        // Height
        // высчитывает общую высоту с учетом пересечения объектов
        if (obj1.pos.y < obj2.pos.y) {
            height = obj2.pos.y + obj2.h - obj1.pos.y;
        } else

        // высчитывает общую высоту с учетом пересечения объектов
        if (obj1.pos.y > obj2.pos.y) {
            height = obj1.pos.y + obj1.h- obj2.pos.y;
        }

        // Width
        // высчитывает общую ширину с учетом пересечения объектов
        if (obj1.pos.x < obj2.pos.x) {
            width = obj2.pos.x + obj2.w - obj1.pos.x;
        } else

        // высчитывает общую ширину с учетом пересечения объектов
        if (obj1.pos.x > obj2.pos.x) {
            width = obj1.pos.x + obj1.w - obj2.pos.x;
        }


        if (summHeight - height > summWidth - width) {

            if (obj1.vel.x > 0) {obj1.pos.x = obj2.pos.x - obj1.w; obj1.vel.invertX(); }
            else if (obj1.vel.x < 0) {obj1.pos.x = obj2.pos.x + obj2.w; obj1.vel.invertX(); }

            else if (obj2.vel.x > 0) { obj2.pos.x = obj1.pos.x - obj2.w; obj2.vel.invertX(); }
            else if (obj2.vel.x < 0) { obj2.pos.x = obj1.pos.x + obj1.w; obj2.vel.invertX(); }

        } else {

            if (obj1.vel.y > 0) {obj1.pos.y = obj2.pos.y - obj1.h; obj1.vel.invertY();}
            else if (obj1.vel.y < 0) {obj1.pos.y = obj2.pos.y + obj2.h; obj1.vel.invertY();}

            else if (obj2.vel.y > 0) { obj2.pos.y = obj1.pos.y - obj2.h; obj2.vel.invertY(); }
            else if (obj2.vel.y < 0) { obj2.pos.y = obj1.pos.y + obj1.h; obj2.vel.invertY(); }
        }

        // if (obj2.pos.y + obj2.h > obj1.pos.y) {
        //     console.log("Y")
        //     obj1.vel.invertY();
        //     obj1.pos.y = -10;
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

        // console.log('Rect', ' Obj1: ' + obj1.pos + ' Obj2: ' + obj2.pos);
    }

    pointLineIntersect(obj1, obj2) {


        if (obj1.pos.y < obj2.pos.y) {

        }
    }

    rectIntersect(obj1, obj2) {

        // return !(x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2);

        let xCollision= false;
        let yCollision= false;

        if ((obj1.pos.x + obj1.w >= obj2.pos.x) && (obj1.pos.x <= obj2.pos.x + obj2.w))
            xCollision = 'x'

        if ((obj1.pos.y + obj1.h >= obj2.pos.y) && (obj1.pos.y <= obj2.pos.y + obj2.h))
            yCollision = 'y'


        return (xCollision && yCollision);
    }


    circleIntersect(x1, y1, r1, x2, y2, r2) {
        return (r1 + r2) * (r1 + r2) >= (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    }
}