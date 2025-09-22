const footer = document.getElementById("footer");
const aboutMenu = document.getElementById("aboutMenu");

const pfpImage = document.getElementById("pfp");
const cookiePopup = document.getElementById("cookiePopup");
const cookieCountLabel = document.getElementById("cookieCountLabel");

const showcase = document.getElementById("projectShowcase");
let cards = [];

let cookieCrunch = new Audio("assets/cookie_crunch.mp3");
let cookieCount = 0;

let cookieShakeInterval = null;
let cookieShakeTimer = 0;

function onLoad() {
    createCard("FireClient - Full Stack", 
        "Minecraft Mod that adds a ton of QoL features. Targetted for SMP players. Made in Java (Fabric)", 
        "assets/projects/fireclient.png", 
        "https://modrinth.com/mod/fireclient-smp");

    createCard("Jario Party 2 - Developer", 
        "Party game that shares mechanics with Mario Party made using Godot", 
        "assets/projects/jario-party.png", 
        "https://github.com/RooXChicken/jario-party-2");

    createCard("Cat Game - Full Stack", 
        "Game made as a wedding gift for my sister using C# & SDL2", 
        "assets/projects/cat-game.png", 
        "https://github.com/RooXChicken/cat-game");
    
    createCard("Fish Viewer - Full Stack", 
        "Website that can show and modify all Tropical Fish variants in Minecraft. Made in JavaScript", 
        "assets/projects/fish-viewer.png", 
        "https://fish-viewer.loveroo.org");

    createCard("Emoji Pack - Full Stack", 
        "Website that can create custom Emojis for use in Minecraft. Made in JavaScript", 
        "assets/projects/emoji-pack.png", 
        "https://emoji-pack.loveroo.org");
        
    createCard("Locator Color - Full Stack", 
        "Website that shows any user's Locator Bar color from Minecraft. Made in JavaScript", 
        "assets/projects/locator-color.png", 
        "https://locator-color.loveroo.org");
        
    createCard("PieChart - Full Stack", 
        "Mod that can toggle and manipulate the Debug PieChart for Minecraft made using Java (Fabric)", 
        "assets/projects/piechart.png", 
        "https://modrinth.com/mod/toggleable-piechart");

    createCard("Psychis SMP - Developer", 
        "Plugin made for the Psychis Minecraft server using Kotlin (Spigot & Fabric)", 
        "assets/projects/psychis-smp.png", 
        "https://x.com/PsychisSMP");
}

function pfpClick() {
    pfpImage.src = "assets/cookie.png";
    pfpImage.style.setProperty("--glow-color", "hsl(" + tweenColor() + ", 72%, 63%)");

    cookieCrunch.cloneNode().play();
    if(cookieCount++ == 0) {
        cookiePopup.style.animationName = "cookiePopup";
        cookiePopup.style.left = "8px";
    }

    if(cookieCount >= 2) {
        createFallingCookie();

        cookieCountLabel.innerText = `🍪 ${cookieCount-1}`;
        cookieShakeTimer = 16;

        if(!cookieShakeInterval) {
            cookieShakeInterval = setInterval(() => {
                setCookiePopupPos(Math.floor(Math.random() * 12) + 2, Math.floor(Math.random() * 12) + 2);
                
                if(--cookieShakeTimer <= 0) {
                    setCookiePopupPos(8, 8);
                    
                    clearInterval(cookieShakeInterval);
                    cookieShakeInterval = null;
                }
            }, 4);
        }
        
        if(cookieCount >= 65) {
            window.location.href = "pages/cookie/index.html";
        }
    }
}

function setCookiePopupPos(_x, _y) {
    cookiePopup.style.left = _x + "px";
    cookiePopup.style.top = _y + "px";
}

function createFallingCookie() {
    let _cookie = document.createElement("medium");
    _cookie.classList.add("fallingCookie");
    _cookie.innerText = "🍪";

    _cookie.onanimationend = (_this) => { document.body.removeChild(_this.target); };
    _cookie.style.animationName = "cookieFade" + Math.floor(Math.random() * 3);

    document.body.appendChild(_cookie);
}

function tweenColor() {
    // math formula to interpolate between the two desired HSV values (0, 281 -> 64, 359)
    return (1.21875*cookieCount) + 281;
}

function createCard(_name, _description, _image, _url) {
    let link = document.createElement("a");
    link.href = _url;

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("hoverAnim");

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
    cards[cards.length] = link;
}

function enterAbout() {
    showcase.style.display = "none";

    footer.style.display = "none";
    aboutMenu.style.display = "flex";
}

function leaveAbout() {
    showcase.style.display = "flex";
    
    footer.style.display = "flex";
    aboutMenu.style.display = "none";
}