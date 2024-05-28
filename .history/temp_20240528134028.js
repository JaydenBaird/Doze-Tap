let points = 0
let tracker = document.getElementById("tracker")
let pillows = 0
let pillowsTracker = document.getElementById("dynamite")
let sheets = 0
let sheetsTracker = document.getElementById("sheets")
let beds = 0
let bedsTracker = document.getElementById("bomb")
let noises = 0
let noisesTracker = document.getElementById("missile")
let acs = 0
let acsTracker = document.getElementById("nuke")
let cps = 0
let cpsTracker = document.getElementById("cps")

function increasePoints() {
    points = points + 1 + (sheet * .2)
    tracker.innerText = points.toFixed(2) + " Time before you wake up"
}
function purchasepillows() {
    if (points >= 10) {
        points = points - 10
        tracker.innerText = points.toFixed(2) + " Deaths"
        sheets = sheets + 1
        s.innerText = knife + " Knives Owned"
    } else {
        alert("Not enough deaths! You need at least 10 deaths to buy a Knife")
    }
}
function purchaseDynamite() {
    if (points >= 50) {
        points = points - 50
        tracker.innerText = points.toFixed(2) + " Deaths"
        dynamite = dynamite + 1
        dynamiteAmmount.innerText = dynamite + " Dynamite Owned"
    } else {
        alert("Not enough deaths! You need at least 50 deaths to buy Dynamite")
    }
}
function purchaseBomb() {
    if (points >= 250) {
        points = points - 250
        tracker.innerText = points.toFixed(2) + " Deaths"
        bomb = bomb + 1
        bombAmmount.innerText = bomb + " Bombs Owned"
    } else {
        alert("Not enough deaths! You need at least 250 deaths to buy Bombs")
    }
}
function purchaseMissile() {
    if (points >= 500) {
        points = points - 500
        tracker.innerText = points.toFixed(2) + " Deaths"
        missile = missile + 1
        missileAmmount.innerText = missile + " Missiles Owned"
    } else {
        alert("Not enough deaths! You need at least 500 deaths to buy Missiles")
    }
}
function purchaseNuke() {
    if (points >= 1000) {
        points = points - 1000
        tracker.innerText = points.toFixed(2) + " Deaths"
        nuke = nuke + 1
        nukeAmount.innerText = nuke + " Nukes Owned"
    } else {
        alert("Not enough deaths! You need at least 10000 deaths to buy Nukes")
    }
}
function gameLoop() {
    points = points + (1 * dynamite) + (5 * bomb) + (10 * missile) + (25 * nuke) 
    cps = (1 * dynamite) + (5 * bomb) + (10 * missile) + (25 * nuke) 
    tracker.innerText = points.toFixed(2) + " Deaths"
    cpsAmmount.innerText = cps + " deaths per second"
}
setInterval(gameLoop, 1000)