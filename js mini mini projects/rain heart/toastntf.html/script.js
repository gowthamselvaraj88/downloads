const btnn =document.querySelector('#btn');
const itm =document.querySelector('#cnt')
btnn.addEventListener('click',()=>{
    console.log("hello")
        creatntf();
});

function creatntf(){
    console.log("every one")

    const elentf =document.createElement('div');
     elentf.classList.add("tost");
    elentf.innerHTML="welcome every one";
    itm.appendChild(elentf)

    setTimeout(() => {
        elentf.remove();
    }, 3000);
}