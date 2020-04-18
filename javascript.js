slideIndex = 0;
modal = false;
var quoteStart
const quoteEngine = () => {
    var i;
    var slides = document.getElementsByClassName("quoteSlides");
    var rand = Math.floor((Math.random() * slides.length));
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slides[rand]
        slideIndex = 1, true;
    };
    slides[rand].style.display = "block";
    quoteStart = setTimeout(quoteEngine, 10000);
};

const vovoModal = () => {
    modal = true;
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
};

const modalClose = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
};

window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});