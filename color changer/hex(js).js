const hex_color = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const color = document.getElementById('curr_color');
const button = document.getElementById('btn');


function changeColor()
{
    let random_color = '#';
    for(let i=0; i<6; i++)
    {
        random_color += hex_color[random_no()];
    }
    // adding colors and text to html
    document.body.style.backgroundColor = random_color;
    color.innerHTML = random_color;
}

function random_no()
{
    return Math.floor(Math.random() * hex_color.length);
}

button.addEventListener('click', function(){
    changeColor();
})