let user_score = 0;
let comp_score = 0;

// getting DOM elements
const user_score_span = document.getElementById("user");
const computer_score_span = document.getElementById("comp");
const score_board = document.querySelector(".scores");
const result_txt =document.querySelector(".result > p");
const rock_img = document.getElementById('r');
const paper_img = document.getElementById('p');
const scissor_img = document.getElementById('s');

function get_comp_choice()
{
    const choices = ['r', 'p',' s', 's', 'p','r','r' ,'p', 's', 'p', 'r', 'r', 'r'];
    const random_no = Math.floor(Math.random() * 13);
    return choices[random_no];
}

function win(user_c)
{
    user_score++;
    user_score_span.innerHTML = user_score;
    computer_score_span.innerHTML = comp_score;
    result_txt.innerHTML = `You beat Computer,You Won!!`;
    document.getElementById(user_c).classList.add('green');

    setTimeout(function() { document.getElementById(user_c).classList.remove('green') },300);
}
function lose(user_c)
{
    comp_score++;
    user_score_span.innerHTML = user_score;
    computer_score_span.innerHTML = comp_score;
    result_txt.innerHTML = `Computer Beats you this Time`;
    document.getElementById(user_c).classList.add('red');

    setTimeout(function() {document.getElementById(user_c).classList.remove('red'); },300);
}
function draw(user_c)
{
    user_score_span.innerHTML = user_score;
    computer_score_span.innerHTML = comp_score;
    result_txt.innerHTML = `DRAW :o)`;
    document.getElementById(user_c).classList.add('blue');

    setTimeout(function() { document.getElementById(user_c).classList.remove('blue');},300);
}

function game(user_choice)
{
    const computer_choice = get_comp_choice();
    switch (user_choice + computer_choice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(user_choice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(user_choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(user_choice);
            break;
    }
}


function main()
{
    rock_img.addEventListener('click',function(){
        game("r");
    });
    paper_img.addEventListener('click',function(){
        game("p");
    });
    scissor_img.addEventListener('click',function(){
        game("s");
    });
}
main();

