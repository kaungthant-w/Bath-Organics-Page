let organicId = document.querySelector("#organicId");
let floatingCircle = document.querySelector("#floatingCircle");
let nav = document.querySelector("#nav");
// let menu = document.querySelector("#menu");
let overlay = document.querySelector("#overlay");
let menuIconOpen = document.querySelector("#menuIconOpen");
// let menuIconClose = document.querySelector("#menuIconClose");
// floating circle
const initialCoords = organicId.getBoundingClientRect();
window.addEventListener("scroll", function() {
    if(window.scrollY > initialCoords.top) {
        floatingCircle.style.display = "block";
    } else {
        floatingCircle.style.display = "none";

    }
});


// nav
let show = function() {
    nav.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    // menuIconClose.classList.toggle("hidden");
    menuIconOpen.classList.toggle("hidden");
}
// menuIconClose.addEventListener("click", show);
menuIconOpen.addEventListener("click", show);
overlay.addEventListener("click", show);