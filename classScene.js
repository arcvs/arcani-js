import {State} from './classState.js'

export class Scene {

    static #NAME_LAYER_GLOBAL = 'global'
    static #layerGlobal = []

    layers = {}

    constructor() {
        this.#initGlobalLayer()
    }

    #initGlobalLayer() {
        this.layers[Scene.#NAME_LAYER_GLOBAL] = Scene.#layerGlobal
    }

    static getObject(nameLayer, nameObj) {
        return State.activeScene.layers[nameLayer].find(obj => obj.modelName === nameObj)
        // return this.layers[nameLayer]
    }

    addToLayer(typeLayer, obj) {

        if ( !this.layers[typeLayer] ) {
            this.layers[typeLayer] = []
        }

        if (typeLayer === Scene.#NAME_LAYER_GLOBAL) {
            Scene.#layerGlobal.push(obj)
        } else {
            this.layers[typeLayer].push(obj)
        }
    }

    static setActiveScene(nameScene) {
        State.activeScene = State.scenes[nameScene]
    }
}
