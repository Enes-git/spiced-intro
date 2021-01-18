// Exs - 4

var outerBox = document.getElementById('outer-box');
var innerBox = document.getElementById('inner-box');

var generateRandomColor = function () {
    var rValue = Math.floor(
        Math.random() * 255);
    var gValue = Math.floor(
        Math.random() * 255);
    var bValue = Math.floor(
        Math.random() * 255);
    var stringRGB = 'rgb(' + rValue.toString() + ',' + gValue.toString() + ',' + bValue.toString() + ')';
    return stringRGB;
}

innerBox.addEventListener("click", function (event) {
    innerBox.style.backgroundColor = generateRandomColor();
    event.stopPropagation();
});

outerBox.addEventListener("click", function () {
    outerBox.style.backgroundColor = generateRandomColor();
});








