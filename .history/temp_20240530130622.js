let points = 0 // point element
let tracker = document.getElementById("tracker") //the points being tracked.
let sheets = 0 // an upgrade to the basic clicker.
let sheetsTracker = document.getElementById("sheets") //tracking the sheets
let pillows = 0 // pillows element
let pillowsTracker = document.getElementById("pillows") // tracking pillow element
let beds = 0 // bed element
let bedsTracker = document.getElementById("beds") // tracking beds
let noisesmachine = 0 // noisemachine
let noisesmachineTracker = document.getElementById("noisesmachine")
let acs = 0
let acsTracker = document.getElementById("acs")
let cps = 0
let cpsTracker = document.getElementById("cps")

function increasePoints () {
    points = points + 1 + (sheets * .2)
    tracker.innerText = points.toFixed(2) +  ' Time Left'
}
function purchaseSheets () {
    if (points >= 10) {
        points = points - 10
        tracker.innerText = points.toFixed(2) + " Seconds"
        sheets = sheets + 1
        sheetsTracker.innerText = sheets + ' Sheets Owned'
    } else {
        alert("Not enough time! You need at least 10 seconds to buy a sheet")
    }
}
function purchasePillows () {
    if (points >= 50) {
        points = points - 50
        tracker.innerText = points.toFixed(2) + " Seconds"
        pillows = pillows + 1
        pillowsTracker.innerText = pillows + " Pillows Owned"
    } else {
        alert("Not enough time! You need at least 50 seconds to buy a pillow")
    }
}
function purchaseBeds () {
    if (points >= 250) {
        points = points - 250
        tracker.innerText = points.toFixed(2) + " Seconds"
        beds = beds + 1
        bedsTracker.innerText = beds + " Beds Owned"
    } else {
        alert("Not enough time! You need at least 250 seconds to buy a Bed")
    }
}
function purchaseNoisesmachine () {
    if (points >= 500) {
        points = points - 500
        tracker.innerText = points.toFixed(2) + " Seconds"
        noisesmachine = noisesmachine + 1
        noisesmachineTracker.innerText = noisesmachine + " Noise Machines Owned"
    } else {
        alert("Not enough time! You need at least 500 seconds to buy Noise Machine")
    }
}
function purchaseAcs () {
    if (points >= 1000) {
        points = points - 1000
        tracker.innerText = points.toFixed(2) + " Deaths"
        acs = acs + 1
        acsTracker.innerText = acs + " Acs Owned"
    } else {
        alert("Not enough time! You need at least 10000 seconds to buy Acs")
    }
}
function gameLoop () {
    points = points + (1 * pillows) + (5 * beds) + (10 * noisesmachine) + (25 * acs) 
    cps = (1 * pillows) + (5 * beds) + (10 * noisesmachine) + (25 * acs) 
    tracker.innerText = points.toFixed(2) + " Time Left"
    cpsTracker.innerText = cps + " Seconds of sleep per second"
}
setInterval(gameLoop, 1000)