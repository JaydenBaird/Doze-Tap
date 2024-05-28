let points = 0
let tracker = document.getElementById("tracker")
let sheets = 0
let sheetsTracker = document.getElementById("sheets")
let pillows = 0
let pillowsTracker = document.getElementById("pillows")
let beds = 0
let bedsTracker = document.getElementById("beds")
let noisesmachine = 0
let noisesmachineTracker = document.getElementById("noisesmachine")
let acs = 0
let acsTracker = document.getElementById("nuke")
let cps = 0
let cpsTracker = document.getElementById("cps")

function increasePoints() {
    points = points + 1 + (sheet * .2)
    tracker.innerText = points.toFixed(2) + " seconds before you wake up"
}
function purchaseSheets() {
    if (points >= 10) {
        points = points - 10
        tracker.innerText = points.toFixed(2) + " Seconds"
        sheets = sheets + 1
        sheetsTracker.innerText = sheets + " Sheets Owned"
    } else {
        alert("Not enough time! You need at least 10 seconds to buy a sheet")
    }
}
function purchasePillows() {
    if (points >= 50) {
        points = points - 50
        tracker.innerText = points.toFixed(2) + " Seconds"
        pillows = pillows + 1
        pillowsTracker.innerText = pillows + " Pillows Owned"
    } else {
        alert("Not enough time! You need at least 50 seconds to buy a pillow")
    }
}
function purchaseBeds() {
    if (points >= 250) {
        points = points - 250
        tracker.innerText = points.toFixed(2) + " Seconds"
        beds = beds + 1
        bedsTracker.innerText = beds + " Beds Owned"
    } else {
        alert("Not enough time! You need at least 250 seconds to buy a Bed")
    }
}
function purchaseNoisesmachine() {
    if (points >= 500) {
        points = points - 500
        tracker.innerText = points.toFixed(2) + " Seconds"
        noisesmachine = noisesmachine + 1
        noisesmachineTracker.innerText = noisesmachine + " Noise Machines Owned"
    } else {
        alert("Not enough time! You need at least 500 seconds to buy Noise Machine")
    }
}
function purchaseAcs() {
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