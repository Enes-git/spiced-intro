// Exc-1

var movingDiv = document.querySelector('div');

var mousePositionHandler = function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var width = movingDiv.offsetWidth;
    var height = movingDiv.offsetHeight;

    movingDiv.style.top = (mouseY - height / 2) + "px";
    movingDiv.style.left = (mouseX - width / 2) + "px";
};

document.addEventListener("mousemove", mousePositionHandler);



