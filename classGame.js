import {State} from './classState.js'

export default class Game {

    pressedKeys = State.pressedKeys

    constructor(state) {
        State.bindState(state)
    }

    // игровой цикл
    loop(timeStamp) {

        // вычисление времени, прошедшего с момента последнего кадра
        State.timeCurrentFrameMs = (timeStamp - State.timeLastFrameMs) / 1000;
        State.timeCurrentFrameMs = Math.min(State.timeCurrentFrameMs, 0.1);
        State.timeLastFrameMs = timeStamp;


        // перебор всех слоев активной сцены

        let scene = State.scenes[State.activeSceneName];

        for (let layerName in scene.layers) {
            let objects = scene.layers[layerName];

            // обновление состояний игровых объектов в каждом слое сцены
            for (let i = 0; i <  objects.length; i++) {
                objects[i].update(State.timeCurrentFrameMs);
            }

            // сброс состояния столкновений объектов в каждом слое сцены
            for (let i = 0; i <  objects.length; i++) {
                objects[i].resetCollisionState();
            }

            // обнаружение столкновений, сравнение объектов друг с другом
            for (let i = 0; i <  objects.length; i++) {
                for (let j = i + 1; j <  objects.length; j++) {
                    objects[i].detectCollision(objects[j])
                    // state.gameObjects[i].makeRebound(state.gameObjects[j]);
                }
            }
        }

        // очистка холста
        State.context.clearRect(0, 0, State.canvasWidth, State.canvasHeight);


        for (let layerName in scene.layers) {
            let objects = scene.layers[layerName];

            // отрисовка игровых объектов для каждого слоя
            for (let i = 0; i < objects.length; i++) {
                objects[i].draw(State.context);
            }
        }

        // игровой цикл достиг своего конца, запрос следующего кадра
        window.requestAnimationFrame(this.loop.bind(this));
    }
}