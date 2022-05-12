function moveToEpreuves(){
    window.scrollTo(0, 850);
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

document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".acc-btn-droppy");
  
  
    function accordion() {
  
      this.classList.toggle("is-open");
    
  
      const content = this.nextElementSibling;
    
  
      if (content.style.maxHeight) content.style.maxHeight = null;
      // else content.style.maxHeight = "100%";
      else content.style.maxHeight = 30000 + "px";
      // else content.style.maxHeight = content.scrollHeight + "px";
    }
    
    // event
    btns.forEach((el) => el.addEventListener("click", accordion));
    
    
    });