function fun(){
    let random = Math.random() *100;
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;

    if((name1 == "") || (name2 == "")){
        document.getElementById('para').innerHTML=`Please Enter Names`;
    }
    else{
        document.getElementById('text').value = Math.round(random)+'%';
        if(random <= 40)
        {
            document.getElementById('para').innerHTML=`You love ${name2} by ${ Math.round(random)}%.Don't Worry...It's Only for Fun :)`
        }
        else{
            document.getElementById('para').innerHTML=`Wow! You love ${name2} by ${ Math.round(random)}%`;
        } 
    }
}