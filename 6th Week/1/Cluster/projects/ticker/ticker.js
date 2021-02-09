(function () {
    var videos = document.querySelector('#videos-container');
    var links = document.getElementsByTagName("a");
    var leftPosition = videos.offsetLeft;
    var requestId;

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (event) {
            cancelAnimationFrame(requestId);
            // console.log("x:", requestId);
            // console.log("event Target enter:", event.target);
        })
        links[i].addEventListener("mouseleave", function (event) {
            requestAnimationFrame(moveAnimation);
            // console.log("event Target leave:", event.target)
        });
    }

    function moveAnimation() {
        leftPosition--;

        var firsElementWidth = links[0].offsetWidth;
        // console.log(firsElementWidth);
        if (leftPosition == -firsElementWidth) {    //isn't it possible to select a right position of the element?
            leftPosition += firsElementWidth;

            videos.appendChild(links[0]);

            // videos.appendChild(links[0]);
            // var shiftedLink = links.shift();
        }
        videos.style.left = leftPosition + 'px';
        requestId = requestAnimationFrame(moveAnimation);



    }

    moveAnimation();

    // console.log(videos);
})();

