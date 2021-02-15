
 function bubble(){
   let size;
   size= Math.random() * 60;
   const div = document.querySelector('.DrinkWater');
   const createEle = document.createElement('p');
  
    createEle.style.width = 20 + size + 'px';
    createEle.style.height = 20 + size +'px';
    createEle.style.left = Math.random() * (innerWidth-70) + 'px';
  
    div.appendChild(createEle);
  
    setTimeout(()=>{
      createEle.remove();
    },2000);
    
  }
 let inter = setInterval(bubble,60);

  
  setInterval(()=>{
   clearInterval(inter);
  },1000);