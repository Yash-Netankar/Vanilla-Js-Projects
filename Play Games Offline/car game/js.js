// Getting DOM elements
const score = document.querySelector('.score');
const startScr = document.querySelector('.startscreen');
const gArea = document.querySelector('.gamearea');


// keys that we need to navigate our vehicle
let keys = {
    ArrowUp: false,
    ArrowRight: false,
    ArrowLeft: false,
    ArrowDown:false
};

//adding event listners...
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
startScr.addEventListener('click', start);

let player = { speed : 5, score: 0};

function keydown(e){
    keys[e.key] = true;
    e.preventDefault(e);
}
function keyup(e){
    keys[e.key] = false;
    e.preventDefault(e);
}

function collide(a,b){
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();

    return !((aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right));
}

function movelines(){
    let liness = document.querySelectorAll('.lines');
    liness.forEach(function(item){
        if(item.y >= 700)
        {
            item.y -= 750;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";

    })
}
function endgame(){
    player.start = false;
    startScr.classList.remove('hide');
    startScr.innerHTML = "You're Busted!!<br> Your Score is "+player.score+" <br>Press Here To Play Again";
}

function moveEnemy(car){
    let enemy = document.querySelectorAll('.enemy');
    enemy.forEach(function(item){

        if(collide(car, item))
        {
            console.log('collided...');
            endgame();
        }
        if(item.y >= 750)
        {
            item.y = -300;
            item.style.left = Math.floor(Math.random() * 350) + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";

    })
}
// writing JS for animation.
function gamePlay()
{
    let car = document.querySelector('.car');
    let road = gArea.getBoundingClientRect();
    if(player.start)
    {
        movelines();
        moveEnemy(car);

        if(keys.ArrowUp && player.y > (road.top + 100))
        {
            player.y -= player.speed
        }
        else if(keys.ArrowDown && player.y < road.bottom - 80)
        {
            player.y += player.speed
        }
        else if(keys.ArrowLeft && player.x > 0)
        {
            player.x -= player.speed
        }
        else if(keys.ArrowRight && player.x < road.width - 50)
        {
            player.x += player.speed
        }

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";

        window.requestAnimationFrame(gamePlay);  //looping the function
        console.log(player.score++);

        player.score++;
        let ps = player.score - 2;
        score.innerText = "Score: "+ ps;
    }
}

function start(){
    // gArea.classList.remove('hide');
    startScr.classList.add('hide');
    gArea.innerHTML = "";

    player.start = true;
    player.score = 0;
    window.requestAnimationFrame(gamePlay);

    for(let i=0; i<5; i++)
    {
        let roadline = document.createElement('div');
        roadline.setAttribute('class', 'lines');
        roadline.y = i*150;
        roadline.style.top = roadline.y + "px";
        gArea.appendChild(roadline);
    }

    let car = document.createElement('div');
    car.setAttribute('class', 'car');
     gArea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    for(let i=0; i<3; i++)
    {
        let enemycar = document.createElement('div');
        enemycar.setAttribute('class', 'enemy');
        enemycar.y = ((i+1) * 350 ) * -1;
        enemycar.style.top = enemycar.y + "px";
        enemycar.style.backgroundColor = 'transparent';
        enemycar.style.left = Math.floor(Math.random() * 350) + "px";
        gArea.appendChild(enemycar);
    }
}

