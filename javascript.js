slideIndex = 0;
var calOn = false;
var quoteStart
    //quote engine
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
//Open close modal
const vovoModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
};

const modalClose = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
};
//close modal outside div
window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
//Open calendar
const calOpen = () => {
    cal = document.getElementById("vovoCalendar");
    if (calOn === false) {
        cal.style.display = "block";
        calOn = true;
    } else {
        cal.style.display = "none";
        calOn = false;
    };
};
//Clock
const showTime = () => {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}