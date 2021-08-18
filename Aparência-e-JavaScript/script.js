//Interação Dino

const dino = document.querySelector(".dino");
const background = document.querySelector(".background")
let isJumping = false;
let position = 0;
function handleKeyDown(event) {
    if(event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >=160) {
            clearInterval(upInterval);
        
            //Desce
            let downInterval = setInterval(() => {
                if(position <= 20){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                 position -= 20;
                 dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            //Sobe
            position += 20;

            dino.style.bottom = position + 'px';
        }
    }, 20)
}

//Cactos

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1840;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1840 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 20 && cactusPosition < 80 && position < 80) { 
            //Game Over

            clearInterval(leftInterval);
            document.body.innerHTML = '<div class="alinhamento"><h1 class="game-over" onClick >Você Perdeu!</h1> <button class="play-again" onClick="window.location.reload();">Jogar de Novo</button></div>';
        } else {
             cactusPosition -= 10;
             cactus.style.left = cactusPosition + 'px';
        }
    }, 20)

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keydown', handleKeyDown);