// ******** Auto typing **********
var typed = new Typed(".auto-type",{
    strings : ["Web Developer","Prompt Engineer","AI Chatbot Developer","Video Editor"],
    typeSpeed: 150,
    backSpeed: 150,
    loop : true,
    
})

// ************ Navbar hamberger button.. *****************

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
});
