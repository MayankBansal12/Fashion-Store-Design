const barEl=document.getElementById("nav_toggle");
const navmenu=document.getElementById("nav-menu");

barEl.addEventListener("click",()=>{
    navmenu.classList.toggle("show");
});
