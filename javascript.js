slideIndex = 0;
var quoteStart
const quoteEngine = () => {
    var i;
    var slides = document.getElementsByClassName("quoteSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1, true;
    };
    slides[slideIndex - 1].style.display = "block";
    quoteStart = setTimeout(quoteEngine, 15000);
};