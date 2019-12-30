/* Mobile Menu */
const hamburger = document.querySelector('#hamburger');
const checker = document.querySelector('#checker');
let overlay = document.querySelector('.overlay');
let nav = document.querySelector('nav');
let menuOpen = true;

hamburger.addEventListener("touchstart", function() {
    if(checker.checked != true){
        overlay.classList.add("menu-open");
        nav.classList.add("menu-open");
        hamburger.classList.add("menu-open");
    } else {
        overlay.classList.remove("menu-open");
        nav.classList.remove("menu-open");
        hamburger.classList.remove("menu-open");
    }
});

/* Interactive background */
const interactiveBg = document.getElementById('interactiveBg');
function classToggle() {
    interactiveBg.classList.toggle('animated');
    interactiveBg.classList.toggle('pause');
}
document.querySelector('#lamp').addEventListener('mouseenter', classToggle);
document.querySelector('#lamp').addEventListener('mouseleave', classToggle);