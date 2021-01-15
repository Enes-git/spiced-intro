(function () {
    var videos = document.querySelector("videos-container");
    var links = document.querySelectorAll("a");
    var leftPosition = videos.offsetLeft;

    function moveLeftAnimation() {
        leftPosition--;

        var firstElementWidth = links[0].offsetWidth;

        if (leftPosition == -firstElementWidth) {
            leftPosition += firstElementWidth;
            // console.log(leftPosition);
        }

        requestAnimationFrame(moveLeftAnimation);

        videos.style.left = leftPosition.toString() + "px";
    }

    moveLeftAnimation();
})();
