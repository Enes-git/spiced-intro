(function () {
    var hamburger = document.getElementById("hamburger");
    var theX = document.getElementById("quit");
    var overlay = document.querySelector(".over-lay");
    var navMenu = document.querySelector(".side-nav");

    hamburger.addEventListener("click", function () {
        hamburger.classList.add("on");
        overlay.classList.add("on");
        navMenu.classList.add("on");
    });

    theX.addEventListener("click", function () {
        navMenu.classList.remove("on");
        overlay.classList.remove("on");
        hamburger.classList.remove("on");
    });
    overlay.addEventListener("click", function () {
        navMenu.classList.remove("on");
        overlay.classList.remove("on");
        hamburger.classList.remove("on");
    });


})();

