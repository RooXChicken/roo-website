const pfpImage = document.getElementById("pfp");
let cookieCount = null;

let _clicks = 0;

function pfpClick() {
    pfpImage.src = "assets/cookie.png";

    let _cookie = new Audio("assets/cookie_crunch.mp3");
    _cookie.play();
    if(_clicks++ == 1) {
        cookieCount = document.createElement("p");
        document.getElementById("myName").appendChild(cookieCount);
    }
    if(_clicks >= 2) {
        cookieCount.innerText = "cookies: " + (_clicks-1);
    }
}