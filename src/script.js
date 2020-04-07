'use strict';

//видео с выполнением задания не смотрел специально, решил сначала попробовать самомтоятельно сделать
//потом посмотрю как надо))

// переменные
const  messageStart = 'Угадай число от 1 до 100',
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
        rnd = random,
        win = '';
    return function () {
        //debugger;
        i++;

        if (i <= 10) {
            let  number = num(messageStart);
            if (number !== 'false') {
                if (number === rnd) {
                    if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                        i = 0;
                        rnd = randomInteger(min, max);
                        console.log( i, rnd);
                        game();
                    } else {
                        win = 'end'
                    }
                } else if (number > rnd) {
                    alert(`Загаданное число меньше, осталось попыток ${10 - i}`);
                    console.log('число меньше', i, rnd);
                    game();
                } else if (number < rnd) {
                    alert(`Загаданное число больше, осталось попыток ${10 - i}`);
                    console.log('число больше', i, rnd);
                    game();
                }

            }
            win = 'end'
        }
        if (win !== 'end') {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                i = 0;
                rnd = randomInteger(min, max);
                console.log( i, rnd);
                game();
            }
        }

    };
}

const game = startGame(randomInteger(min, max));
game();
alert('Пока');


