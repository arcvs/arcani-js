import {Physics} from "./classPhysics.js";

// modelGeometry - тип фигуры для определения столкновения
// {Line, Rectangle, Point, Circle, Polygon}

export class Line extends Physics {

    modelGeometry = 'line'
    modelType = 'dynamic'

    constructor(vx, vy, x1, y1, x2, y2) {
        super(vx, vy);
        this.vel = new Victor(vx, vy)
        this.posA = new Victor(x1, y1)
        this.posB = new Victor(x2, y2)
    }
}


export class Rectangle extends Physics {

    modelGeometry = 'rectangle'
    modelType = 'static'

    constructor(vx, vy, x, y, width, height) {
        super(vx, vy)
        this.vel = new Victor(vx, vy)
        this.pos = new Victor(x, y)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.posA = this.pos
        this.posB = this.pos.clone().add({x: width, y: 0})
        this.posC = this.pos.clone().add({x: width, y: height})
        this.posD = this.pos.clone().add({x: 0, y: height})
    }
}


export class Point extends Physics {

    modelGeometry = 'point'
    modelType = 'static'

    constructor(vx, vy, x, y) {
        super(vx, vy)
        this.vel = new Victor(vx, vy)
        this.pos = new Victor(x, y)
    }
}


export class Circle extends Physics {

    modelGeometry = 'circle'
    modelType = 'static'

    constructor(vx, vy, x, y, radius) {
        super()
        this.pos = new Victor(x, y)
        this.vel = new Victor(vx, vy)
        this.radius = radius
    }
}


export class Polygon extends Physics {

    modelGeometry = 'polygon'
    modelType = 'static'

    constructor(x, y, vx, vy) {
        super()
    }
}