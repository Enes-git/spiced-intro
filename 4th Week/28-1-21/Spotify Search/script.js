(function () {
    // console.log($);
    $(".search-button").on("click", function () {
        var userInput = $("input").val();
        var userSelection = $("select").val();
        // console.log('user data :>> ', userInput, "-", userSelection);

        $.ajax({
            method: 'GET',
            url: 'https://spicedify.herokuapp.com/spotify',
            data: {
                query: userInput,
                type: userSelection
            },
            success: function (response) {
                console.log('response :>> ', response);
                response = response.artists || response.albums

                var resultsHtml = "";
                if (response.items.length == 0) {
                    resultsHtml += "There is no " + userSelection + " in this name!"
                } else {
                    resultsHtml += "<h3>Results for " + userInput.charAt(0).toUpperCase() + userInput.slice(1) + "</h3>";

                }
                // var resultsHtmlContainer;
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage = "https://bitsofco.de/content/images/2018/12/broken-1.png";
                    if (response.items[i].images.length) {
                        defaultImage = response.items[i].images[0].url;
                        var linkHref = response.items[i].external_urls.spotify;
                    }
                    resultsHtml += "<a href=\"" + linkHref + "\">" + "<img src=\"" + defaultImage + "\"/>" + "<div>" + response.items[i].name + "</div>" + "</a>";
                    // resultsHtmlContainer = "<div class=\"results-container\">" + resultsHtml + "</div>"
                    // console.log('resultsHtmlContainer :>> ', resultsHtmlContainer);
                }
                // console.log('resultsHtml :>> ', resultsHtml);        // tried to add another outer container to place div&img horizantally - no success!
                // for (var k = 0; k < 20; k++) {

                //     $(".results-container").eq(k).html(resultsHtml);
                // }
                $(".results").html(resultsHtml);
                // console.log('response.next :>> ', response.next);
                var nextPageUrl = response.next && response.next.replace("api.spotify.com/v1/search", "spicedify.herokuapp.com/spotify")
                // console.log('nextPageUrl :>> ', nextPageUrl);
                response.next == null ? $(".more-button").css({ visibility: "hidden" }) : $(".more-button").css({ visibility: "visible" })

                $(".more-button").on("click", function () {
                    $.ajax({
                        method: 'GET',
                        url: nextPageUrl,
                        data: {
                            query: userInput,
                            type: userSelection
                        },
                        success: function (nextResponse) {
                            nextResponse = nextResponse.artists || nextResponse.albums

                            var resultsHtmlNext = "";
                            for (var i = 0; i < nextResponse.items.length; i++) {
                                var defaultImage = "https://bitsofco.de/content/images/2018/12/broken-1.png";
                                if (nextResponse.items[i].images.length) {
                                    defaultImage = nextResponse.items[i].images[0].url;
                                    var linkHref = nextResponse.items[i].external_urls.spotify;
                                }
                                resultsHtmlNext += "<a href=\"" + linkHref + "\">" + "<img src=\"" + defaultImage + "\"/>" + "<div>" + nextResponse.items[i].name + "</div>" + "</a>";
                            }
                            $(".results").html(resultsHtmlNext);
                            nextPageUrl = nextResponse.next && nextResponse.next.replace("api.spotify.com/v1/search", "spicedify.herokuapp.com/spotify")
                            nextResponse.next == null ? $(".more-button").css({ visibility: "hidden" }) : $(".more-button").css({ visibility: "visible" })
                        },
                        error: function (error) {
                            console.log(error);
                        }
                    })
                })
            },
            error: function (error) {
                console.log(error);
            }
        })
    })
})(); 