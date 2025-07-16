export class State {

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

    static bindState(state) {

        State.canvas = state.canvas
        State.context = state.context
        State.canvasWidth = state.canvas.width
        State.canvasHeight = state.canvas.height
        State.scenes = State.#arrToObject(state.listScenes)
        State.activeSceneName = state.activeScene
        State.activeScene = State.scenes[state.activeScene]

        console.log(State)
        // State.listScenes = State.listScenes
    }

    static #arrToObject(array) {
        return array.reduce((obj, value) => {
            obj[value.name] = new value();
            return obj;
        }, {})
    }
}