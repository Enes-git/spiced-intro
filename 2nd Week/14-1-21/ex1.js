function changeStyle(selectorString) {
    var elements = document.querySelectorAll(selectorString);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontStyle = "italic";
        elements[i].style.fontStyle = "underlined";
        elements[i].style.fontStyle = "bold";
        return elements;
    };
}

