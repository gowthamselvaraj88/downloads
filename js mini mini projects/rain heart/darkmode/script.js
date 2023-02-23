const dark =document.getElementById("toggle")

//dark.addEventListener("change",(e)=>{
   // document.body.classList.toggle("dark",e.target.checked)
//})


dark.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});