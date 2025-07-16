import {World} from "../objects/World.js";
import {FPS} from "../objects/TextFPS.js";
import {Player} from "../objects/Player.js";
import {BoxYellow} from "../objects/BoxYellow.js";
import {Circle} from "../objects/Circle.js";

import {Scene} from "../classScene.js";
import {State} from "../classState.js";

export default class Level2 extends Scene {

    nameScenes = 'Level2'
    widthScene = 2000
    heightScene = 500

    constructor() {
        super()
        // this.addToLayer('layer1', new FPS(0, 0, 10, 30))
    }

}