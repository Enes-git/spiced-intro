function textStyling(selectorString) {
    var elements = document.querySelectorAll(selectorString);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontStyle = "italic";
        elements[i].style.textDecoration = "underline";
        elements[i].style.fontWeight = "bold";

    }

}

function classSelector(classNameString) {
    var classElements = document.querySelectorAll(classNameString);
    var elementsArray = [];
    for (var i = 0; i < classElements.length; i++) {
        elementsArray.push(classElements[i]);
    }
    return elementsArray;

}

function inserting() {
    var elementToInsert = document.createElement('p');
    elementToInsert.style.position = 'fixed';
    elementToInsert.style.zIndex = '2147483647';
    elementToInsert.style.left = '20px';
    elementToInsert.style.top = '100px';
    elementToInsert.style.fontSize = '200px';
    elementToInsert.innerHTML = 'AWESOME';


    document.body.appendChild(elementToInsert);


}


textStyling('p');
classSelector('.element');
inserting();