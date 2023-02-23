function creatheart(){
    const heart =document.createElement('div');
    heart.classList.add("hearst");
    heart.innerHTML=" 💜 ";
    document.body.appendChild(heart);
    heart.style.left= Math.random()*100+"vw";
    heart.style.animationDuration=Math.random()*2+3+"s";
    setTimeout(() => {
      heart.remove()
    },5000 );
  
  }

   


/*window.onload=function(){
  creatheart();
}*/

const setintervl=setInterval(() => {
  creatheart()
}, 300);

