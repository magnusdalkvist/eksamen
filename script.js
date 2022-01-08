let scrollPos = 0;
let translate = 0;

window.addEventListener("load", showSection);
window.addEventListener("mousewheel", function (event) {
    if (event.wheelDelta >= 0) {
        if (scrollPos > 0) {
            scrollPos--;
        }
        console.log(scrollPos)
    } else {
        if (scrollPos < 2) {
            scrollPos++;
        }
        console.log(scrollPos);
    }
    showSection();
});

function showSection() {
    translate = window.innerHeight * scrollPos;
    document.querySelector("main").style.transform = ("translateY(-" + translate + "px)")
}

document.querySelector(".fa-arrow-circle-down").addEventListener("click", knap1);

function knap1() {
    scrollPos = 1;
    showSection();
}

