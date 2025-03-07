const pfpImage = document.getElementById("pfp");
const showcase = document.getElementById("projectShowcase");
let cookieCount = null;

let cookieCrunch = new Audio("assets/cookie_crunch.mp3");
let _clicks = 0;

function onLoad() {
    createCard("Jario Party 2 - Developer", 
        "Game built with Godot and shares mechanics with Mario Party", 
        "assets/projects/jario-party.png", 
        "https://github.com/RooXChicken/jario-party-2");

    createCard("JP-MKTT - Full Stack", 
        "Website made to allow players to submit Records to a leaderboard", 
        "assets/projects/jp-mktt.png", 
        "https://github.com/RooXChicken/mariokart-timetrials-web");

    createCard("AgniLib - Full Stack", 
        "Library to allow for deep communication between a Minecraft server and client", 
        "assets/projects/agnilib.png", 
        "https://github.com/RooXChicken/agnilib-server");

    createCard("Psychis SMP - Developer", 
        "Spigot plugin & Fabric mod made for the Psychis SMP", 
        "assets/projects/psychis-smp.png", 
        "https://x.com/PsychisSMP");
}

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

function createCard(_name, _description, _image, _url) {
    let link = document.createElement("a");
    link.href = _url;

    let card = document.createElement("div");
    card.className = "card";

    let background = document.createElement("div");
    background.className = "showcase";
    background.style.backgroundImage = "url('" + _image + "')";

    let details = document.createElement("div");
    details.className = "details";

    let name = document.createElement("medium");
    let description = document.createElement("small");

    name.className = "cardTxt";
    description.className = "cardTxt";

    name.innerText = _name;
    description.innerText = _description;

    details.appendChild(name);
    details.appendChild(description);
    
    card.appendChild(background);
    card.appendChild(details);

    link.appendChild(card);

    showcase.appendChild(link);
}