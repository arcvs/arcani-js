import {Storage} from './classStorage.js'

export default class Game {

    pressedKeys = Storage.pressedKeys

    constructor(storage) {
        Storage.bindStorage(storage)
    }

    // игровой цикл
    loop(timeStamp) {

        // вычисление времени, прошедшего с момента последнего кадра
        Storage.timeCurrentFrameMs = (timeStamp - Storage.timeLastFrameMs) / 1000;
        Storage.timeCurrentFrameMs = Math.min(Storage.timeCurrentFrameMs, 0.1);
        Storage.timeLastFrameMs = timeStamp;


        // перебор всех слоев активной сцены

        let scene = Storage.scenes[Storage.activeSceneName];

        for (let layerName in scene.layers) {
            let objects = scene.layers[layerName];

            // обновление состояний игровых объектов в каждом слое сцены
            for (let i = 0; i <  objects.length; i++) {
                objects[i].update(Storage.timeCurrentFrameMs);
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
        Storage.context.clearRect(0, 0, Storage.canvasWidth, Storage.canvasHeight);


        for (let layerName in scene.layers) {
            let objects = scene.layers[layerName];

            // отрисовка игровых объектов для каждого слоя
            for (let i = 0; i < objects.length; i++) {
                objects[i].draw(Storage.context);
            }
        }

        // игровой цикл достиг своего конца, запрос следующего кадра
        window.requestAnimationFrame(this.loop.bind(this));
    }
}