const btn =document.getElementById("change")


btn.addEventListener('click',()=>{
    document.body.style.background=changerdm();
});

function changerdm(){
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`;
}

//`rgb(${Math.random()*100},${Math.random()*100},${Math.random()*100})`