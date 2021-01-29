(function () {
    $(".search-button").on("click", function () {
        var userInput = $("input").val();
        var userSelection = $("select").val();

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
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage = "https://bitsofco.de/content/images/2018/12/broken-1.png";
                    if (response.items[i].images.length) {
                        defaultImage = response.items[i].images[0].url;
                        var linkHref = response.items[i].external_urls.spotify;
                    }
                    resultsHtml += "<a href=\"" + linkHref + "\">" + "<img src=\"" + defaultImage + "\"/>" + "<div>" + response.items[i].name + "</div>" + "</a>";
                }
                $(".results").html(resultsHtml);
                var nextPageUrl = response.next && response.next.replace("api.spotify.com/v1/search", "spicedify.herokuapp.com/spotify");

                if (response.next != null) {
                    if (location.search.indexOf("scroll=infinite") > -1) {

                        function reachedBottomCheck() {
                            var reachedBottom = $(window).scrollTop() + $(window).height() >= $(document).height() - 200;
                            if (reachedBottom) {
                                // make new request
                                clearTimeout(infiniteCheck);
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
                                        $(".results").append(resultsHtmlNext);
                                        nextPageUrl = nextResponse.next && nextResponse.next.replace("api.spotify.com/v1/search", "spicedify.herokuapp.com/spotify")
                                        nextResponse.next == null ? $(".more-button").css({ visibility: "hidden" }) : $(".more-button").css({ visibility: "visible" })
                                    },
                                    error: function (error) {
                                        console.log(error);
                                    }
                                })


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
                            $(".results").append(resultsHtmlNext);
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


$