(function () {
    var images = document.querySelectorAll(".kitty-container img");
    var visibleKitty = 0;

    function moveKitties() {
        images[visibleKitty].classList.remove("onscreen");
        images[visibleKitty].classList.add("exit");

        visibleKitty++;
        if (visibleKitty == images.length) {
            visibleKitty = 0;
        }
        images[visibleKitty].classList.add("onscreen");
        setTimeout(moveKitties, 3500);
    }
    setTimeout(moveKitties, 1500);

    document.addEventListener("transitionend", function (event) {
        if (event.target.classList == "exit") {
            event.target.classList.remove("exit");
        }
    });
})();
