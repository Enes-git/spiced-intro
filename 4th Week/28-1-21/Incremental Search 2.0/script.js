(function (countries) {

    var resultsToShow = $(".results");
    var inputField = $("input");

    inputField.on("input", function () {
        var userInput = inputField.val().toLowerCase();

        $.ajax({
            url: 'https://spicedworld.herokuapp.com/',
            data: {
                q: userInput
            },
            success: function (response) {
                console.log('response :>> ', response);

                var countriesToShow = "";

                if (response.length === 0) {
                    countriesToShow += "<div class='countries'>No results</div>";
                } else {
                    for (var j = 0; j < response.length; j++) {
                        countriesToShow += "<div class='countries'>" + response[j] + "</div>";
                    }
                }
                if (userInput === inputField.val().toLowerCase()) {     // Ask about this!
                    // console.log("ok");
                    resultsToShow.html(countriesToShow);
                }
            }
        });
    })

    resultsToShow.on("mouseover", "div", function (event) {
        $(event.currentTarget).addClass("highlight");
    })

    resultsToShow.on("mouseleave", "div", function (event) {
        $(event.currentTarget).removeClass("highlight");
    })

    resultsToShow.on("mousedown", "div", function (event) {
        var clickedInput = $(event.currentTarget);
        inputField.val(clickedInput.html());
        resultsToShow.html("");
    })

    $("html").on("keydown", function (event) {
        var divs = $(".countries");         // need to store them after they are assigned
        if (event.keyCode === 38) {
            // arrow up
            if ($(".highlight").length === 0) {
                divs.eq(3).addClass("highlight");
            } else {
                $(".highlight").prev().addClass("highlight");
                $(".highlight").next().removeClass("highlight");
            }
        } else if (event.keyCode === 40) {
            //arrow down
            if ($(".highlight").length === 0) {
                divs.eq(0).addClass("highlight");
            } else {
                $(".highlight").next().addClass("highlight");
                $(".highlight").prev().removeClass("highlight");
            }
        } else if (event.keyCode === 13) {
            inputField.val($(".highlight").html());
            resultsToShow.html("");
        }
    })
})();