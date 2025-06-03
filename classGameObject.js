export class GameObject
{
    constructor (state, x, y, vx, vy, mass) {
        this.state = state;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.mass = mass;
        this.isInteract = false;
        this.isColliding = false;
        this.isKeyDown = (key) => state.pressedKeys.has(key);
        // console.log(this.context);
    }

    rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
        if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
            return false;
        }
        return true;
    }

    circleIntersect() {
    }

}