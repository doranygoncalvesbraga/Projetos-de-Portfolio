const mario = document .querySelector {".supermario"};
const pipe = document .querySelector {"pipe-game"};

const jump = () => {
    mario.classlist.add("jump-mario");

    setTimeout{() => {
        mario.classlist.remove("jump-mario"), } 500);
    
    }
};

const loopGame = setInterval(()=> {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation ="none";
    mario.style.bottom =`${marioPosition}px`;

    mario.src = "./images/mario-game-over.png";
    mario.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval (loopGame)
})
document .addEventListener