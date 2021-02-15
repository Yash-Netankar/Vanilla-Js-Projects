names = () => {

// taking usernames
window.user1 = prompt(`Enter Name of Player 1`);
window.user2 = prompt(`Enter Name of Player 2`);

if(user1 != '')
{
    document.getElementById('para1').innerHTML = user1;
    }
else
{
    document.getElementById('para1').innerHTML = 'Player 1';
    }

if(user2 != ''){
    document.getElementById('para2').innerHTML = user2;
    }
else
{
    document.getElementById('para2').innerHTML ='Player 2';
    }

}

fun = () => {
// first dice
const rand = Math.floor(Math.random() * 6) + 1;
const dice = `./images/dice${rand}.png`;
document.getElementById('img1').setAttribute('src', dice);

// second dice
const rand1 = Math.floor(Math.random() * 6) + 1;
const dice1 = `./images/dice${rand1}.png`;
document.getElementById('img2').setAttribute('src', dice1);

// display result
    if((rand > rand1) && (window.user1 != ''))
    {
        document.querySelector('h1').innerHTML = window.user1 + ' Wins';
    }
    else if(rand > rand1){
        document.querySelector('h1').innerHTML = 'Player1 Wins';
    }


    else if((rand < rand1) && (window.user2 != ''))
    {
        document.querySelector('h1').innerHTML = window.user2 + ' Wins';
    }
    else if(rand < rand1){
        document.querySelector('h1').innerHTML = 'Player2 Wins';
    }

    else
    {
        document.querySelector('h1').innerHTML = 'DRAW!!';
    }

}
// window makes the variable global ,here