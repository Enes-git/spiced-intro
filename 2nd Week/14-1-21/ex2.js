function getElementsArray(classnameStr) {
    var elementsArray = [];
    var selectedElements = document.querySelectorAll(classnameStr)
    for (var i = 0; i < selectedElements.length; i++) {
        elementsArray.push(selectedElements[i]);
    };
    return elements;
}

// OR

function getElemArrayByClassName(className) {
    return [].slice.call(
        document.getElementsByClassName(
            className
        )
    );
}