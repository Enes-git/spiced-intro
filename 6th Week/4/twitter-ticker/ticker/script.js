(function () {
    var config = {
        url: "/hrefData.json",
        method: "GET",
        success: function (responseData) {
            var myHtml = "";
            //var myHref = "";
            for (var i = 0; i < responseData.length; i++) {
                // myHtml += "<p>" + responseData[i].name + "</p>";
                myHtml +=
                    '<a href="' +
                    responseData[i].href +
                    '">' +
                    responseData[i].name +
                    "</a>";
                // console.log("success in:", i, responseData[i].name);
                // console.log("success in:", i, responseData[i].href);
            }
            // console.log("myHtml:", myHtml);
            // console.log("myHref:", myHtml);

            $("#videos-container").html(myHtml);
        },
        error: function (error) {
            console.log("error in ajax:", error);
        },
    };
    var linksData = $.ajax(config); // recieved data in parsed format!
    //linksData.on("readystatechange", function () {});
    console.log("myData:", linksData);
    /*console.log(linksData[0].name);*/

    var videos = $("#videos-container");
    var links = $("a");
    var leftPosition = videos.offset().left;
    var requestId;

    for (var i = 0; i < links.length; i++) {
        links[i].on("mouseenter", function () {
            cancelAnimationFrame(requestId);
        });
        links[i].on("mouseleave", function () {
            requestAnimationFrame(moveLeftAnimation);
        });
    }
    function moveLeftAnimation() {
        leftPosition--;

        var firstElementWidth = links.eq(0).outerWidth();

        if (leftPosition == -firstElementWidth) {
            leftPosition += firstElementWidth;

            videos.appendChild(links.eq(0));
        }

        videos.css({ left: leftPosition + "px" });
        requestId = requestAnimationFrame(moveLeftAnimation);
    }

    moveLeftAnimation();
})();

// *************** some notes

/*
var xhr = new XMLHttpRequest();
// first open the request wit the mwthod in it
xhr.open("GET", "https://api.agify.io/?name=plato");
//optionally we can set headers
xhr.setRequestHeader("Accept", "text/plain");
// send it
xhr.send();
// setting an eventlistener to see if we got the response
xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState != XMLHttpRequest.DONE) {
        console.log("state changed", xhr.readyState);
        return;
    }
});
*/
