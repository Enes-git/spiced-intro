(function () {
    // DO NOT TOUCH
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll('script[type="text/x-handlebars-template"]');

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    // DO NOT TOUCH

    $(".search-button").on("click", function () {
        var firstUrl = 'https://spicedify.herokuapp.com/spotify';
        ajaxRequest(firstUrl);

    });

    $(".more-button").on("click", function () {
        ajaxRequest(nextPageUrl);
    });

    // get request function
    function ajaxRequest(requestingUrl) {
        var userInput = $("input").val();
        var userSelection = $("select").val();

        $.ajax({
            method: 'GET',
            url: requestingUrl,
            data: {
                query: userInput,
                type: userSelection
            },
            success: function (response) {
                // artist & album check
                response = response.artists || response.albums;

                // check for results heading
                if (response.items.length == 0) {
                    $("#results-heading").html("There is no " + userSelection + " in this name!");
                } else {
                    $("#results-heading").html("Results for " + userInput.charAt(0).toUpperCase() + userInput.slice(1));
                }

                // adding content to results div
                $(".results").html(Handlebars.templates.items(response.items)); // js reaches here but do not attend the contexts to the elements????
                // $(".results").append(generateHtml(response.items));
                var nextPageUrl = response.next && response.next.replace("api.spotify.com/v1/search", "spicedify.herokuapp.com/spotify");

                if (response.next != null) {
                    if (location.search.indexOf("scroll=infinite") > -1) {  // more work needed - this check is not working
                        console.log("infinity!");
                        function reachedBottomCheck() {
                            var reachedBottom = $(window).scrollTop() + $(window).height() >= $(document).height() - 200;
                            if (reachedBottom) {
                                // make new request
                                clearTimeout(infiniteCheck);
                                ajaxRequest(nextPageUrl)
                            } else {
                                var infiniteCheck = setTimeout(reachedBottomCheck, 200)
                            }
                        }
                        reachedBottomCheck();
                    } else {
                        $(".more-button").css({ visibility: "visible" });
                    }
                } else {
                    $(".more-button").css({ visibility: "hidden" });
                }

            }
        })
    }

    // generate HTML function
    // function generateHtml(items) {
    //     var resultsHtml = {};       // !!! LAST ***********************************************
    //     for (var i = 0; i < items.length; i++) {
    //         // check for available imgs or use default
    //         var defaultImage = "https://bitsofco.de/content/images/2018/12/broken-1.png";
    //         if (items[i].images.length > 0) {
    //             defaultImage = items[i].images[0].url;
    //             var linkHref = items[i].external_urls.spotify;
    //         }
    //         resultsHtml += "<a href='" + linkHref + "' target='blank'><img src='" + defaultImage + "'/>" + "<div>" + items[i].name + "</div>" + "</a>";
    //     }
    //     return resultsHtml;
    // }


})();


