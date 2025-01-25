const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');

const startGame = () => {
    pipe.classList.add('pipe-animation');
    start.style.display = 'none';
    loop();
}

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = () => {
    const loopInterval = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = 'Imagens/game over.png'; 
            mario.style.width = '80px';
            mario.style.marginLeft = '50px';

            gameOver.style.display = 'flex';

            clearInterval(loopInterval);
        }
    }, 10);
}

document.addEventListener('keypress', e => {
    if (e.code === 'Space') {
        jump();
    }
});