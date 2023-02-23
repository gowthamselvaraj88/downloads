const text="hello"
console.log(text)
 let index=0;

 function autotxt(){
    document.body.innerHTML=text.slice(0,index)
    index++
if(index>text.length){
    index=0;
}

 }

setInterval(autotxt,300)