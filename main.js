const pfpImage = document.getElementById("pfp");
let cookieCount = null;

let cookieCrunch = new Audio("assets/cookie_crunch.mp3");
let _clicks = 0;

function pfpClick() {
    pfpImage.src = "assets/cookie.png";

    cookieCrunch.cloneNode().play();
    if(_clicks++ == 1) {
        cookieCount = document.createElement("p");
        document.getElementById("myName").appendChild(cookieCount);
    }
    if(_clicks >= 2) {
        cookieCount.innerText = "cookies: " + (_clicks-1);
        
        if(_clicks >= 64) {
            window.location.href = "pages/cookie/index.html";
        }
    }
}