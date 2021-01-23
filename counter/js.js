let count = 0;
// getting elements for addding event listners
const number = document.getElementById('number');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(b) {
        const btn_class = b.currentTarget.classList;
        if(btn_class.contains('Decrease'))
        {
            count--;
        }
        else if(btn_class.contains('Increase'))
        {
            count++;
        }
        else{
            count = 0
        }
        // adding styles 
        if(count > 0)
        {
            number.setAttribute("style", `color: green; 
            text-shadow: 1px 1.5px 2px black;`);
        }
        else if(count < 0)
        {
            number.setAttribute("style", `color: red; 
            text-shadow: 1px 1.5px 2px black;`);
        }
        if(count === 0)
        {
            number.setAttribute("style", `color: royalblue; 
            text-shadow: 1px 1.5px 2px black;`);
        }

        // showing values on web-page
        number.innerHTML = count;
    });
});