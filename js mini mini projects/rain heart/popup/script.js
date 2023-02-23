const openup=document.getElementById("open");
const closeup=document.getElementById("close");
const popsup=document.getElementById("content");
openup.addEventListener("click", () => {
    popsup.classList.add("active");
});

closeup.addEventListener("click", () => {
    popsup.classList.remove("active");
});