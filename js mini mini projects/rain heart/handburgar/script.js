const btnn =document.querySelector('#btn');
const nav =document.querySelector('#nv');

btnn.addEventListener("click",()=>{
    btnn.classList.toggle("active");
    nav.classList.toggle("active");
});