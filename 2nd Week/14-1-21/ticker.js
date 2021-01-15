(function () {
    var videos = document.querySelector("videos-container");
    var links = document.querySelectorAll("a");
    var leftPosition = videos.offsetLeft;

    function moveLeftAnimation() {
        leftPosition--;

        var firstElementWidth = links[0].offsetWidth;

        if (leftPosition == -firstElementWidth) {
            leftPosition += firstElementWidth;

            videos.appendChild(links[0]);
            videos.removeChild(links[0]);
            // console.log(leftPosition);
        }

        videos.style.left = leftPosition.toString() + "px";
        requestAnimationFrame(moveLeftAnimation);
    }

    moveLeftAnimation();
})();
