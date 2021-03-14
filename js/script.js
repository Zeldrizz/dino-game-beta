const dino = document.querySelector('.dino'),
      cactus = document.querySelector('.cactus'),
      count = document.querySelector('.count'),
      result = document.querySelector('.result'),
      amount = document.querySelector('.amount'),
      btn = document.querySelector('.result__btn'),
      bird = document.querySelector('.bird'),
      bird2 = document.querySelector('.bird2'),
      bird3 = document.querySelector('.bird3');

    btn.addEventListener('click', function(){
        location.reload();
    });

document.addEventListener('keydown', function(event){
    jumping();
});

document.addEventListener('click', function(event){
    jumping();
});

function jumping() {
    if (dino.classList != 'jumping') {
        dino.classList.add('jumping');
    }
    setTimeout( function() {
        dino.classList.remove('jumping');
    }, 500);
};

let alive = setInterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 70 && cactusLeft > 0 && dinoTop >= 120) {
        cactus.style.animation = 'none';
        bird.style.animation = 'none';
        bird2.style.animation = 'none';
        bird3.style.animation = 'none';
        clearInterval(interval);
        result.style.display = 'flex';
        amount.innerHTML = number;
    }
}, 10);

let number = 0;

let interval = setInterval(() => {
    number += 1;
    count.innerHTML = number;
}, 100);


