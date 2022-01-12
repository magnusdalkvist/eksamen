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
};

let touchstartY = 0
let touchendY = 0

window.addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY
});

window.addEventListener('touchend', e => {
    touchendY = e.changedTouches[0].screenY
    handleGesture()
});


function handleGesture() {
    if (touchendY < touchstartY) {
        if (scrollPos < 2) {
            scrollPos++;
        }
        console.log(scrollPos);
    };
    if (touchendY > touchstartY) {
        if (scrollPos > 0) {
            scrollPos--;
        }
        console.log(scrollPos)
    }
    showSection();
};