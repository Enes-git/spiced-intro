var images = document.querySelectorAll(".kitty-container");
var visibleKitty = 0;
function moveKitties() {
    images[visibleKitty].classList.remove("onscreen");
    images[visibleKitty].classList.add("exit");
    visibleKitty++;
    images[visibleKitty].classList.add("onscreen");
    setTimeout(moveKitties, 5500);
}
setTimeout(moveKitties, 1500);

images[visibleKitty].addEventListener("trasitionend", moveKitties);
