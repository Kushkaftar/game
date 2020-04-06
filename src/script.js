'use strict';

//видео с выполнением задания не смотрел специально, решил сначала попробовать самомтоятельно сделать
//потом посмотрю как надо))

// переменные
const  messageStart = 'Угадай число от 1 до 100',
    messageLess = 'Загаданное число меньше',
    messageLarger = 'Загаданное число больше',
    messageInput = 'Введи число!',
    min = 1,
    max = 100;

// isNumber ...
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// randomInteger ...
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// getNumber ...
function getNumber() {
    let ret = null;
    return function (msg) {
        let number = prompt(msg);
        if (isNumber(number)) {
            ret = +number;
        }else if (number === null) {
            ret = 'false';
        } else {
            num(messageInput);
        }
        return ret;

    }
}

const num = getNumber();

// startGame ...
function startGame(random) {
    let i = 0,
        rnd = random;
    return function () {
        //debugger;
        i++;
        if (i <= 10) {
            let  number = num(messageStart);
            if (number !== 'false') {
                if (number === rnd) {
                    alert('WIN');
                } else if (number > rnd) {
                    alert(messageLess);
                    game();
                } else if (number < rnd) {
                    alert(messageLarger);
                    game();
                }

            }

        }
    };
}

const game = startGame(randomInteger(min, max));
game();