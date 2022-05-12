
function moveToDescription() {
    window.scrollTo(0, 1000);
}

function moveToProjets() {
    window.scrollTo(0, 1800);
}

function moveToContact() {
    window.scrollTo(0, 2500);
}

const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})


const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(function(item){

    item.addEventListener('click', function(){
        menu.classList.toggle('active');
    })

})
