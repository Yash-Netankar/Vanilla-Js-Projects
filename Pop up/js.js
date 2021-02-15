const popup = document.querySelector(".popup");
const show = document.getElementById("show");
const closee = document.getElementById("close");
const container =  document.querySelector(".container");
const submit_btn = document.getElementById("submit-btn");

show.addEventListener("click", ()=>{
    popup.classList.toggle("show");
    container.classList.add("popup-style");
    container.setAttribute("style", "pointer-events:none");
});

closee.addEventListener("click", ()=>{
    popup.classList.toggle("show");
    container.classList.remove("popup-style");
    container.setAttribute("style", "pointer-events:all");
});

submit_btn.addEventListener("click",()=>{
    let pwd = document.getElementById("pwd").value;
    let email = document.getElementById("email").value;
    
    if(pwd == "" || email == ""){
        alert('Please Enter All Details');
    }
    else{
        popup.classList.toggle("show");
        container.classList.remove("popup-style");
        container.setAttribute("style", "pointer-events:all");
    }
});