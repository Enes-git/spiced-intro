(function () {
    // console.log($);
    var textArea = $("#user-text");
    // console.log('user-text :>> ', textArea);

    $("button").on("click", function () {
        try {
            JSON.parse(textArea.val());
            alert("Your entry is a valid JSON.");
        } catch (error) {
            alert("Your entry is not a valid JSON!");
        }

    })


})();

