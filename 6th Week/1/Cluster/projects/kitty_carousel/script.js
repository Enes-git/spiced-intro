(function () {
    var images = document.querySelectorAll(".kitty-container img");
    var dots = document.getElementsByClassName("dots");
    var visibleKitty = 0;
    var timer;
    var visibleTransition;

    function moveKitties(nextKitty) {
        images[visibleKitty].classList.remove("onscreen");
        images[visibleKitty].classList.add("exit");
        dots[visibleKitty].classList.remove("on");

        visibleTransition = true;

        if (typeof nextKitty == "undefined") {
            visibleKitty++;
            if (visibleKitty == images.length) {
                visibleKitty = 0;
            }
        } else {
            visibleKitty = nextKitty;
        }


        images[visibleKitty].classList.add("onscreen");
        dots[visibleKitty].classList.add("on");



        timer = setTimeout(moveKitties, 3500);
    }
    setTimeout(moveKitties, 1500);

    for (var i = 0; i < dots.length; i++) {
        (function (i) {                              // having the i before it changes
            dots[i].addEventListener("click", function (event) {
                if (event.target.classList.contains("on")) {
                    clearTimeout(timer);
                    setTimeout(moveKitties, 3500);
                    return;
                }
                if (visibleTransition) {

                    return;
                }
                clearTimeout(timer);
                moveKitties(i);
            });
        })(i);
    }

    document.addEventListener("transitionend", function (event) {
        if (event.target.classList.value == "exit") {
            event.target.classList.remove("exit");
            visibleTransition = false;
        }
    });


})();

