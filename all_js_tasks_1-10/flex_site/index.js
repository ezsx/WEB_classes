const close = document.getElementById('close');
const nav = document.getElementById('nav');
const open = document.getElementById('open')


close.addEventListener('click', ()=>{
    nav.style.display = 'none'
})
open.addEventListener('click', ()=>{
    nav.style.display = 'flex'
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-up").style.display = "block";
    } else {
        document.getElementById("btn-up").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}