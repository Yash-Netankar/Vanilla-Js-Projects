
function Submit(){
    var cYear = new Date().getFullYear()
    // window.alert(cYear)
    let lifeSpan = 0;
    let hReduce = 0;
    let wReduce = 0;
    let sReduce = 0;
    let dReduce = 0;
    let pReduce = 0;
    let rReduce = 0;
    let perReduce = 0;

    // Gender
    var Gender;
    if (document.getElementById("male").checked){
         // Gender  = document.getElementById("male").value;
         Gender = "male";
    }
    else if (document.getElementById("female").checked){
        // Gender = document.getElementById("female").value;
        Gender = "female";
    }
    // let person = document.getElementById('nature').value;
    var person;
    if (document.getElementById('introvert').checked){
        // person = document.getElementById('introvert');
        person = "introvert";
    }
    else if (document.getElementById('extrovert').checked){
        // person = document.getElementById('extrovert');
        person = "extrovert";
    }
    // let rStaus = document.getElementById('relationStatus').value;
    var rStaus;
    if(document.getElementById('single').checked){
        // rStaus = document.getElementById('single').value;
        rStaus = "single";
    }
    else if (document.getElementById('commited').checked){
        // rStaus = document.getElementById('commited');
        rStaus = "commited";
    }
    else if (document.getElementById('Married').checked){
        // rStaus = document.getElementById('Married').value;
        rStaus = "Married";
    }
    // let place = document.getElementById('resident').value;
    var place;
    if(document.getElementById('city').checked){
        // place = document.getElementById('city').value;
        place = "city";
    }
    else if(document.getElementById('village').checked){
        // place = document.getElementById('village').value;
        place = "village";
    }
    // let drink = document.getElementById('Drink').value;
    var drink;
    if(document.getElementById('drink-Y').checked){
        // drink = document.getElementById('drink-Y').value;
        drink = "drink-Y";
    }

    // let smoke = document.getElementById('Smoke').value;
    var smoke;
    if(document.getElementById("YesSmoke").checked){
        // smoke = document.getElementById('YesSmoke').value;
        smoke = "YesSmoke";
    }
    else if (document.getElementById("nSmoke").checked){
        // smoke = document.getElementById('nSmoke').value;
        smoke = "nSmoke";
    }
    let bWeight = document.getElementById('Weight').value;
    let bHeight = document.getElementById('Height').value;
    let bYear = document.getElementById('DOB').value;
    let Name = document.getElementById('Name').value;
    if (Gender == "male"){
        lifeSpan = 76;
        console.log("Male");
    }
    else if (Gender == "female"){
        lifeSpan = 81;
        console.log("Female");
    }

    mainYear = cYear - bYear;
    lifeSpan = lifeSpan - mainYear;


    if (bHeight <= 172){
        hReduce = 1;
    }
    else if (bHeight > 172){
        hReduce = 2;
    }


    if (bWeight <= 70){
        wReduce = 1;
    }
    else if (bWeight > 70){
        wReduce = 2;
    }


    if (smoke == "YesSmoke") {
        dReduce = 4;
    }


    if (drink == "Y") {
        let dtraite = document.getElementById('exercise').value;
        if (dtraite == "Daily") {
            dReduce = 4;
        } else if (dtraite == "Monthly") {
            dReduce = 3;
        } else if (dtraite == "Weekly") {
            dReduce = 2;
        }
    }


        if (place == "city"){
            pReduce = 2;
        }


        if (rStaus == "commited"){
            rReduce = 2;
        }
        else if (rStaus == "Married"){
            rReduce = 3;
        }

        if (person == "introvert"){
            perReduce = 2;
        }
        else if (person == "extrovert"){
            perReduce = 1;
        }

        lifeSpan = lifeSpan - hReduce - wReduce - sReduce - dReduce - pReduce - rReduce - perReduce;
        var DeathYear = cYear + lifeSpan;
        window.alert(`${Name} Age will be ${lifeSpan}, Death Year ${DeathYear}`);





}