var images = document.querySelectorAll(".kitty-container img");
// console.log(images);
var visibleKitty = 0;
function moveKitties() {
    images[visibleKitty].classList.remove("onscreen");
    images[visibleKitty].classList.add("exit");
    visibleKitty++;
    if (visibleKitty > 3) {
        visibleKitty = 0;
        return moveKitties();
    }

    images[visibleKitty].classList.add("onscreen");
    setTimeout(moveKitties, 3500)
}

setTimeout(moveKitties, 1500);

images[visibleKitty].addEventListener("trasitionend", moveKitties);