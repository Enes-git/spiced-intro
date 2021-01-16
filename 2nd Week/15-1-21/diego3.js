// Exs - 3

var colorfulDiv = document.querySelector('div');

var generateRandomColor = function () {
    var colors = ['red', 'blue', 'yellow', 'magenta', 'cyan'];
    var randomIndex = Math.floor(
        Math.random() * colors.length
    );
    return colors[randomIndex];
}
colorfulDiv.addEventListener('mousedown', function (event) {
    colorfulDiv.style.backgroundColor = generateRandomColor();
    console.log('mousedown');
});

colorfulDiv.addEventListener('mouseup', function (event) {
    colorfulDiv.style.backgroundColor = generateRandomColor();
    console.log('mouseup');
});


