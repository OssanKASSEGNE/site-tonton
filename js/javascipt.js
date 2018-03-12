var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("nav");

var drop1 = document.getElementById("drop1");
var drop2 = document.getElementById("drop2");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");

        
        drop1.classList.remove("dropdown-content");
        drop1.classList.add("dropdown-content1");   

       
        drop2.classList.remove("dropdown-content"); 
        drop2.classList.add("dropdown-content1");  
    } else {
        navbar.classList.remove("sticky");

        
        drop1.classList.remove("dropdown-content1");
        drop1.classList.add("dropdown-content");

       
        drop2.classList.remove("dropdown-content1");
        drop2.classList.add("dropdown-content");  
    }
}