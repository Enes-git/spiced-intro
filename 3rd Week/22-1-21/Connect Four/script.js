(function () {
    var currentPlayer = "player1";

    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (!slotsInCol.eq(i).hasClass("player1") && !slotsInCol.eq(i).hasClass("player2")) {
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        if (i === -1) {
            return;
        }

        // Diagonal check
        var diags = [
            [0, 7, 14, 21],
            [1, 8, 15, 22],
            [2, 9, 16, 23],
            [3, 8, 13, 18],
            [4, 9, 14, 19],
            [5, 10, 15, 20],
            [6, 13, 20, 27],
            [7, 14, 21, 28],
            [8, 15, 22, 29],
            [9, 14, 19, 24],
            [10, 15, 20, 25],
            [11, 16, 21, 26],
            [12, 19, 26, 33],
            [13, 20, 27, 34],
            [14, 21, 28, 35],
            [15, 20, 25, 30],
            [16, 21, 26, 31],
            [17, 22, 27, 32],
            [18, 25, 32, 39],
            [19, 26, 33, 40],
            [20, 27, 34, 41],
            [21, 26, 31, 36],
            [22, 27, 32, 37],
            [23, 28, 33, 38]
        ];
        var allSlots = $(".slot");
        var countD = 0;
        for (var j = 0; j < diags.length; j++) {
            for (var q = 0; q < diags[j].length; q++) {
                if (allSlots.eq(diags[j][q]).hasClass(currentPlayer)) {
                    countD++;
                    if (countD === 4) {
                        alert("The victor is " + currentPlayer + "!");
                        reMatch();
                    }
                } else {
                    countD = 0;
                }
            }
        }

        // column & row check
        var slotsInRow = $(".row" + i);
        if (checkForVictory(slotsInCol)) {
            alert("The victor is " + currentPlayer + "!");
            // if (confirm())
            reMatch();
        } else if (checkForVictory(slotsInRow)) {
            alert("The victor is " + currentPlayer + "!");
            reMatch();
        }
        switchPlayer();

    });

    function checkForVictory(slots) {
        var count = 0;
        for (let i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        };
    }

    function switchPlayer() {
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
        console.log("switched the player!", currentPlayer);
    }
    function reMatch() {
        if (confirm("Do you want to play again?")) {
            window.location.reload();
        } else {
            window.open("winner.html", "blank");
            window.close();
        }
    }
})();