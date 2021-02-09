// 1 adding id to the elements and slicing them
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function (e) {
        console.log(e.target.id.slice(3));
        clearTimeout(timer);
    });
}

// 2 looping through the elements and checking which has the event
for (var i = 0; i < dots.length; i++) {

    dots[i].addEventListener("click", function (event) {
        for (var i = 0; i < dots.length; i++) {
            if (dots[i] == event.target) {
                console.log(i);
                break;
            }
        }
        clearTimeout(timer);

    })
}

// 3 creating another function to have our eventlistener return and return an i
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", getDotClickHandler(i));
}

function getDotClickHandler(i) {
    return function () {
        console.log(i);
    };
}

// 4 having an iffy to have an i before it changes
for (var i = 0; i < dots.length; i++) {
    (function (i) {
        dots[i].addEventListener("click", function (e) {
            console.log(i);
            clearTimeout(timer);
        });
    })(i);
}

// After i is preserved unchanged giving and removing on class to dots on click

// 1 equlizing i to visibleKitty in our dot eventlistener scope (this is repetitive coding)
for (var i = 0; i < dots.length; i++) {
    (function (i) {
        dots[i].addEventListener("click", function (event) {
            console.log(i);
            dots[visibleKitty].classList.remove("on");
            visibleKitty = i;       // instead of equilizing to 0 equlizing it to clicked one
            dots[visibleKitty].classList.add("on");
            clearTimeout(timer);
        });
    })(i);
}

// 2 defining our moving function an argument that we will pass the value i
for (var i = 0; i < dots.length; i++) {
    (function (i) {                              // having the i before it changes
        dots[i].addEventListener("click", function (event) {
            clearTimeout(timer);
            moveKitties(i);
        });
    })(i);
}

// But if the user clicks a dot that is currently on we should make sure nothing happens

// 1 adding an if statement with events that has the class on and returning nothing will makes nothing to happen
for (var i = 0; i < dots.length; i++) {
    (function (i) {                              // having the i before it changes
        dots[i].addEventListener("click", function (event) {
            if (event.target.classList.contains("on")) {
                return;
            }
            clearTimeout(timer);
            moveKitties(i);
        });
    })(i);
}

// 2 handling this in css in a brilliant way by adding pointer property to the dots and adding pointer-event:none to the class on
// .dots {
//     border: 1px solid white;
//     border - radius: 50 %;
//     width: 2.5vw;
//     height: 2.5vw;
//     margin: 1vw;
//     cursor: pointer;
// }

// .on {
//     background - color: #fff;
//     transition - duration: 1.5s;
//     pointer - events: none;
// }



// From Abrar
(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var dots = document.getElementsByClassName("dot");
    var thisKit = 0; // var to store index of cat image
    var timer; // var to store return value of setTimeout(), needed for clearTimeout(timer) on dot click to stop current animation flow
    var transRun; // var to follow if transition is running or not (true/false)

    function slideKitties(nextKit) {
        kitties[thisKit].classList.remove("onscreen"); // remove originally "onscreen" class for current image
        dots[thisKit].classList.remove("on"); // remove originally "on" class for first dot so it lights off
        kitties[thisKit].classList.add("exit"); // add "exit" class to current image so exit transition starts
        thisKit++; // increment index to point next image

        // Modification to check if main animation has been called with an argument or not
        // Called with argument when click on any dot with event listener below
        // In case argument passed, thisKit = nextKit, so that next image corresponds with clicked dot
        // Otherwise run as usual
        if (nextKit == undefined) {
            // Check if current image is last image, if yes then reset thisKit to 0 (first image again)
            if (thisKit >= kitties.length) {
                thisKit = 0;
            }
        } else {
            thisKit = nextKit;
        }

        kitties[thisKit].classList.add("onscreen"); // Add "onscreen" class to next image so transition starts
        dots[thisKit].classList.add("on"); // Add "on" class to next dot so it lights up
        timer = setTimeout(slideKitties, 3000); // Has to be larger then set CSS transition (2s) so that next transition does not start too early
        transRun = true; // Used to check if click during ongoing transition, animation starts: true
    }

    // First main animation call
    // Must have some delay so that first image and dot classes are not immediately updated
    // Otherwise animation starts with second image and first image always has "exit" class!
    timer = setTimeout(slideKitties, 1000);

    // Event listener (transitionend) to remove "exit" class from image that completely passed out left
    document.addEventListener("transitionend", function (event) {
        if (event.target.classList == "exit") {
            event.target.classList.remove("exit");
        }
        transRun = false; // Used to check if click during ongoing transition, animation ended: false
    });

    // Loop to add event listeners to all dots and call function/iife accordingly
    for (var i = 0; i < dots.length; i++) {
        // Function or IIFE so that event listener is in an intermediary scope with dot clicked (i)
        // David's v3
        (function (i) {
            dots[i].addEventListener("click", function (e) {
                // Checking if clicked dot is already current dot (and image) by checking class "on"
                // Above can be done with CSS: "pointer-events: none;" for dots' "on" class
                // Also checking transRun value to make sure no transition is running during click
                if (!e.target.classList.contains("on") && !transRun) {
                    clearTimeout(timer); // Stops main animation using timer var from setTimeout() return
                    slideKitties(i); // Call main animation again with new index pointing to clicked dot
                }
            });
        })(i);
    }
})();