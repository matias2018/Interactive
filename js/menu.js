const hamburger = document.querySelector('#hamburger');
console.log(hamburger);
let changeIcon = true;

hamburger.addEventListener("click", function(){
    let overlay = document.querySelector('.overlay');
    let nav = document.querySelector('nav');
    let icon = document.querySelector('.menu-toggle i');
    var elementsIO = document.querySelectorAll('.navLi');
    

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if( changeIcon ){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        changeIcon = false;
        
        for(i = 0; i < elementsIO.length; i++){
            elementsIO[i].classList.add("goingOut");
        }
    } else {
        for(i = 0; i < elementsIO.length; i++){
            elementsIO[i].classList.remove("goingOut");
        }
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }

});

const interactiveBg = document.getElementById('interactiveBg');
function classToggle() {
    interactiveBg.classList.toggle('animated');
    interactiveBg.classList.toggle('pause');
}
document.querySelector('#lamp').addEventListener('mouseenter', classToggle);
document.querySelector('#lamp').addEventListener('mouseleave', classToggle);