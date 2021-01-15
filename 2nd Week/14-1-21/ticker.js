(function () {
    var videos = document.querySelector("#videos-container");
    var links = document.getElementsByTagName("a");
    var leftPosition = videos.offsetLeft;
    var requestId;

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (event) {
            cancelAnimationFrame(requestId);
        });
        links[i].addEventListener("mouseleave", function (event) {
            requestAnimationFrame(moveLeftAnimation);
        });
    }
    function moveLeftAnimation() {
        leftPosition--;

        var firstElementWidth = links[0].offsetWidth;

        if (leftPosition == -firstElementWidth) {
            leftPosition += firstElementWidth;

            videos.appendChild(links[0]);
        }

        videos.style.left = leftPosition.toString() + "px";
        requestId = requestAnimationFrame(moveLeftAnimation);
    }

    moveLeftAnimation();
})();
