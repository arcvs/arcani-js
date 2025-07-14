;"use strict";
import Game from './classGame.js';
import Level1 from './scenes/Level1.js';
import Level2 from './scenes/Level2.js';

window.onload = () => {

    // инициализация игрового класса, холста и контекста

    let game = new Game({
        canvas: document.getElementById( 'canvas' ),
        context: canvas.getContext( '2d' ),
        listScenes: [
            Level1,
            Level2
        ],
        activeScene: 'Level1'
    });

    // инициализация обрабочиков событий клавиатуры и мыши
    document.addEventListener('keydown', (e) => game.pressedKeys.add(e.code));
    document.addEventListener('keyup', (e) => { console.log(e.code); game.pressedKeys.delete(e.code)});
    // game.canvas.addEventListener("click", (e) => console.log(game));

    // запуск игрового цикла
    window.requestAnimationFrame(game.loop.bind(game));
};