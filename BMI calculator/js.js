function fun() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    if ((weight != '' && weight > 0) && (height != '' && height > 0)) {

        h = height * 12 * 0.025;
        bmi = weight / Math.pow(h, 2);

        document.getElementById('result').value = Math.round(bmi);
        if (Math.round(bmi) <= 18) {
            document.querySelector('.description').innerHTML = `You're a Weak Person`;
        }

        else if (Math.round(bmi) > 18 && Math.round(bmi) <= 25) {
            document.querySelector('.description').innerHTML = `You're a Healthy Person`;
        }

        else if (Math.round(bmi) > 25 && Math.round(bmi) <= 29.5) {
            document.querySelector('.description').innerHTML = `You're OverWeight`;
        }

        else {
            document.querySelector('.description').innerHTML = `You're OBESE !!`;
        }
    }
    else {
        document.querySelector('.description').innerHTML = `Please Enter all Values Correctly!!!`;
        document.querySelector('.description');
    }

}