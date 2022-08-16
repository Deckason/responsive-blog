const navItems = document.querySelector(".nav__items");
const burgerBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");

//OPEN NAV
burgerBtn.addEventListener("click", ()=> {
    navItems.style.display = "flex";
    burgerBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
})

//CLOSE NAV
closeBtn.addEventListener("click", ()=> {
    navItems.style.display = "none";
    burgerBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})

//TOGGLE ADMIN NAV
const aside = document.querySelector("aside");
const hideBtn = document.querySelector("#hide__sidebar-btn");
const showBtn = document.querySelector("#show__sidebar-btn");

//HIDE THE ADMIN SIDEBAR AND TOGGLE THE BUTTON TO OPEN
hideBtn.addEventListener("click", ()=>{
    aside.style.left = "-100%";
    hideBtn.style.display = "none";
    showBtn.style.display = "inline-block";

})

//HIDE THE ADMIN SIDEBAR AND TOGGLE THE BUTTON TO OPEN
showBtn.addEventListener("click", ()=>{
    aside.style.left = 0;
    hideBtn.style.display = "inline-block";
    showBtn.style.display = "none";

})

const checkBox = document.querySelector("#is_featured");

checkBox.addEventListener("click", ()=>console.log("Clicked"))