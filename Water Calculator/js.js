function Result(){

    let age = document.getElementById('Age').value;
    let weight = document.getElementById('Weight').value;
    if(age<16 && age>6){
        essnForSmallAge = "1.4 ";
        window.alert("1.4 litre")
    }
    if (age<60 && age>15){
        essnForAdult = weight * 0.033;
        window.alert(essnForAdult+" Litre")
    }
}