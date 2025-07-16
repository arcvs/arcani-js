import {World} from "../objects/World.js";
import {BoxBall} from "../objects/BoxBall.js";
import {Player} from "../objects/Player.js";
import {BlockH} from "../objects/BlockH.js";
import {BlockV} from "../objects/BlockV.js";

import {FPS} from "../objects/TextFPS.js";
import {BoxYellow} from "../objects/BoxYellow.js";
import {Circle} from "../objects/Circle.js";
import {Camera} from "../objects/Camera.js";
import {LineOne} from "../objects/LineOne.js";
import {Scene} from "../classScene.js";
import {State} from "../classState.js";


export default class Level1 extends Scene {

    nameScenes = 'Level1'
    widthScene = 2000
    heightScene = 500

    constructor() {
        super()
        // this.addToLayer('global', new Ball(0,0, 100,100))
        this.addToLayer('global', new Camera(100,100))
        this.addToLayer('layer1', new FPS(0, 0, 10, 30))
        this.addToLayer('layer2', new BoxBall(100,100, 100,100, 25,25))
        // this.addToLayer('layer1', new World(0,0, 500,500, '../sprites/RSQy0SXpBmM.jpg'))
        // this.addToLayer('global', new BoxBall(0,0, 100,100, 25,25))
        // this.addToLayer('layer2', new Player(scopeScene,canvasWidth/2,180,100,100, 10))
    }

    createObjects(scopeScene)
    {

        // this.addToLayer('global', new Ball(0,0, 100,100))
        // this.addToLayer('global', new Camera(scopeScene,0,0, 100,100))

        // this.addToLayer('global', )
        // this.addToLayer('layer1', )
        // this.addToLayer('layer2', )

        // // создание объектов сцены
        // let camera = new Camera(scopeScene,0,0, 100,100)
        // let world = new World(scopeScene,0,0, 500,500, '../sprites/RSQy0SXpBmM.jpg')
        // let player = new Player(scopeScene,canvasWidth/2,180,100,100, 10)
        // let blockUP = new BlockH(scopeScene,0,0,0,0,10)
        // let blockDown = new BlockH(scopeScene,0,canvasHeight-10,0,0,10)
        //
        // let blockLeft = new BlockV(scopeScene,0,11,0,0,10)
        //
        // let line = new LineOne(0,0,10,10,200,200)
        //
        // let blockRight = new BlockV(scopeScene,(canvasWidth-10)/2+50,11,0,0,10)
        //
        // scopeScene.addObjectToShared(player)
        // scopeScene.addObjectToShared(camera)
        //
        // // camera.attach(player)
        // // player.attach(camera)
        //
        // layer0.push(camera)
        //
        // layer0.push(world)
        // layer1.push(blockUP)
        // layer1.push(blockDown)
        // layer1.push(blockLeft)
        // layer1.push(blockRight)
        //
        // layer1.push(player)
        //
        // // layer1.push(line)
        //
        // layer1.push(new FPS(scopeScene,10,30, 0,0,10))
        // layer1.push(new Circle(scopeScene,50,250,0,-1000,5))
        // layer1.push(new BoxYellow(scopeScene,150,90,500/1.5,200/1.5,10))
        //
        // layer1.push(new BoxYellow(scopeScene,450,196,0,0,10))
        // layer1.push(new BoxYellow(scopeScene,450,197,0,0,10))
        // // layer1.push(new Circle(scopeScene,150,50,0,20,10));
        // // layer1.push(new Circle(scopeScene,250,50,-2000 ,20,15));
        // // layer1.push(new Circle(scopeScene,350,50,2000,20,20));
        // // layer1.push(new Circle(scopeScene,450,50,-100,-100,25));
        // // layer1.push(new Circle(scopeScene,550,50,0,10,30));
        // // layer1.push(new Circle(scopeScene,650,50,0,0,35));
    }
}