const showBtn = document.querySelector(".show");
const hideBtn = document.querySelector(".hide");
const pop = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");

showBtn.addEventListener("click", ()=>{
    pop.classList.add("active");
    overlay.classList.add("blur");
    showBtn.setAttribute("style", "top:75%;");
    
    let intr = setTimeout(() => {
        document.querySelector(".container-pop").setAttribute("style", "display:block");
        document.querySelector(".container").setAttribute("style", "display:none");
    }, 2000);

});

hideBtn.addEventListener("click", ()=>{
    pop.classList.remove("active");
    overlay.classList.remove("blur");
    showBtn.setAttribute("style", "top:50%;");
    document.querySelector(".container-pop").setAttribute("style", "display:none");
    document.querySelector(".container").setAttribute("style", "display:display");
    clearTimeout(intr);
});


let msg;
// function onclick
function fun() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    if ((weight != '' && weight > 0) && (height != '' && height > 0)) {

        h = height * 12 * 0.025;
        bmi = weight / Math.pow(h, 2);

        document.getElementById('result').value = Math.round(bmi);
        if (Math.round(bmi) <= 18) {
            let weak = `You're a Weak Person`;
            msg = `${weak}\nDo Exercise And Eat More`;
            document.querySelector('.description').innerHTML = weak ;
            document.querySelector(".msg-title").innerText = `WEAK`;
            document.querySelector(".pop-description").innerText = msg;
        }

        else if (Math.round(bmi) > 18 && Math.round(bmi) <= 25) {
            let healthy = `You're a Healthy Person`;
            msg = `${healthy}\nEnjoy But maintain it Bro :)`;
            document.querySelector('.description').innerHTML = healthy;
            document.querySelector(".msg-title").innerText = `HEALTHY`;
            document.querySelector(".pop-description").innerText = msg;
        }

        else if (Math.round(bmi) > 25 && Math.round(bmi) <= 29.5) {
            let overWeigth = `You're OverWeight`;
            msg = `${overWeigth}\nDo Exercise And Eat Less`;
            document.querySelector('.description').innerHTML = overWeigth;
            document.querySelector(".msg-title").innerText = `OVERWEIGHT`;
            document.querySelector(".pop-description").innerText = msg;
        }
        
        else {
            let obese = `You're OBESE !!`;
            msg = `${obese}\nYou need to eat less :/`;
            document.querySelector('.description').innerHTML = obese;
            document.querySelector(".msg-title").innerText = `OBESE`;
            document.querySelector(".pop-description").innerText = msg;
        }
    }
    else {
        let errror = `Please Enter all Values Correctly!!!`;
        document.querySelector('.description').innerHTML = errror;
        document.querySelector(".msg-title").innerText = `ERROR!!`;
        msg = `${errror}\nEither you've Left all values Blank`;
        document.querySelector(".pop-description").innerText = msg;
    }

}