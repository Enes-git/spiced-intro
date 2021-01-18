function insertElement() {
    var newElement = document.createElement("div")

    newElement.style.position = "fixed";
    newElement.style.zIndex = "2147483647";
    newElement.style.left = "20px";
    newElement.style.top = "100px";
    newElement.style.fontSize = "200px";
    newElement.innerHTML = "AWESOME";

    document.body.appendChild(newElement);
}