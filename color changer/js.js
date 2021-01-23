const colors = ["#88B04B", "#009B77", "#EFC050", "#9B2335", "#2A4B7C", "#797B3A", "#578CA9"];

// getting dom elements
const button = document.getElementById('btn');
const color = document.querySelector('.color-text');


function changeColor(clr)
{
    document.body.style.backgroundColor = clr;
    color.innerHTML = clr;
}

function getColor()
{
   let random_no = Math.floor(Math.random() * colors.length);
   changeColor(colors[random_no]);
}

// adding event listners and calling functions that changes colours
button.addEventListener('click', function(){
    getColor();
})