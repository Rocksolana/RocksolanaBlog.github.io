let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");
mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu");
if (mobileMenu.classList.contains("active-menu")){
    mainMenu.classList.add("active-menu")
} else {
    mainMenu.classList.remove("active-menu")
}

})
let modalBlock = document.querySelector(".modal-block");
function ShowModal(){
 if ( pageYOffset > document.body.scrollHeight / 2 ) {
    function openModal(){
        modalBlock.classList.add("show");
        modalBlock.classList.remove("hide");
    }
 }
}
 function openModal(){
    modalBlock.classList.add("show");
    modalBlock.classList.remove("hide");
 }