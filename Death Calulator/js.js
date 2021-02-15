// scripting pop up
const seeDeathBtn = document.getElementById("See-Your-Death");
const popUp = document.querySelector(".scary-pop-up");

seeDeathBtn.addEventListener("click", ()=>{
    let pop_interval = setInterval(()=>{
        popUp.classList.add("show-scary-pop-up");
    },1000);

    setTimeout(()=>{
        window.open("./calculator.html");
    },4000);

    setTimeout(()=>{
        popUp.classList.remove("show-scary-pop-up");
        clearInterval(pop_interval);
    },4500);
});