export class Storage {

    static canvas
    static context
    static canvasWidth
    static canvasHeight
    static activeSceneName
    static activeScene
    static scenes
    static timeCurrentFrameMs = 0
    static timeLastFrameMs = 0
    static pressedKeys = new Set()
    static layerGlobal
    static listScenes

    static bindStorage(storage) {

        Storage.canvas = storage.canvas
        Storage.context = storage.context
        Storage.canvasWidth = storage.canvas.width
        Storage.canvasHeight = storage.canvas.height
        Storage.scenes = Storage.#arrToObject(storage.listScenes)
        Storage.activeSceneName = storage.activeScene
        Storage.activeScene = Storage.scenes[storage.activeScene]

        console.log(Storage)
        // Storage.listScenes = storage.listScenes
    }

    static #arrToObject(array) {
        return array.reduce((obj, value) => {
            obj[value.name] = new value();
            return obj;
        }, {})
    }
}