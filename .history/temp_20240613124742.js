let points = 0 // point element
let tracker = document.getElementById("tracker") //the points being tracked.
let sheets = 0 // an upgrade to the basic clicker.
let sheetsTracker = document.getElementById("sheets") //tracking the sheets
let Scost = 10
let ScostT = document.getElementById("Scost")
let sheetsbtn = document.getElementById("sheetsbtn")
let pillows = 0 // pillows element
let pillowsTracker = document.getElementById("pillows") // tracking pillow element
let Pcost = 50
let PcostT = document.getElementById("Pcost")
let beds = 0 // bed element
let bedsTracker = document.getElementById("beds") // tracking beds
let Bcost = 250
let BcostT = document.getElementById("Bcost")
let noisesmachine = 0 // noisemachine element
let noisesmachineTracker = document.getElementById("noisesmachine") //tracking noisemachine
let Ncost = 500
let NcostT = document.getElementById("Ncost")
let acs = 0 // acs element
let acsTracker = document.getElementById("acs") // tracking acs
let Acost = 1000
let AcostT = document.getElementById("Acost")
let cps = 0 // cps element
let cpsTracker = document.getElementById("cps") // tracking the cps
let bg = 1
let bgMusic = new Howl({
    src: ['music/dreams.mp3', 'music/sleep.ogg'],
    autoplay: true,
    volume: .20,
})

let Asheets = 0
let AsheetsP = 10000





function checkprice()  {
    Scost = 10 + sheets ** 1.25
    Pcost = 50 + pillows ** 2
    Bcost = 250 + beds ** 2.50
    Ncost = 500 + noisesmachine ** 3.
    Acost = 1000 + acs ** 4.
    if (points >= Scost) {
        document.getElementById("sheetsbtn").disabled = false;
    }
    else {
        document.getElementById("sheetsbtn").disabled = true;
    }
    if (points >= Pcost) {

        document.getElementById("pillowsbtn").disabled = false;
    }
    else {
        document.getElementById("pillowsbtn").disabled = true;
    }
    if (points >= Bcost) {
        document.getElementById("bedsbtn").disabled = false;
    }
    else {
        document.getElementById("bedsbtn").disabled = true;
    }
    if (points >= Ncost) {
        document.getElementById("noisemachinebtn").disabled = false;
    }
    else {
         document.getElementById("noisemachinebtn").disabled = true;
    }
    if (points >= Acost) {
        document.getElementById("acsbtn").disabled = false;
    }
    else {
        document.getElementById("acsbtn").disabled = true;
    }
}





function increasePoints () {
    points = points + 1 + (sheets * .2)
    tracker.innerText = points.toFixed(2) +  ' Time Left'
}
function purchaseSheets () {
    Scost = 10 + sheets ** 1.25
    if (points >= Scost) {
        points = points - Scost
        tracker.innerText = points.toFixed(2) + " Seconds"
        sheets = sheets + 1
        sheetsTracker.innerText = sheets + ' Sheets Owned'
        ScostT.innerText = ("Cost: ") + (10 + sheets ** 1.25).toFixed(1)
    } else {
        alert("Not enough time! You need at least 10 seconds to buy a sheet")
    }
}
function purchasePillows () {
    Pcost = 50 + pillows ** 2.5
    if (points >= Pcost) {
        points = points - Pcost
        tracker.innerText = points.toFixed(2) + " Seconds"
        pillows = pillows + 1
        pillowsTracker.innerText = pillows + ' Pillows Owned'
        PcostT.innerText = ("Cost: ") + (50 + pillows ** 2.5).toFixed(1)
    } else {
        alert("Not enough time! You need at least 50 seconds to buy a pillow")
    }
}
function purchaseBeds () {
    Bcost = 250 + beds ** 2.75
    if (points >= Bcost) {
        points = points - Bcost
        tracker.innerText = points.toFixed(2) + " Seconds"
        beds = beds + 1
        bedsTracker.innerText = beds + " Beds Owned"
        BcostT.innerText = ("Cost: ") + (250 + beds ** 2.75).toFixed(1)
    } else {
        alert("Not enough time! You need at least 250 seconds to buy a Bed")
    }
}
function purchaseNoisesmachine () {
    Ncost = 500 + noisesmachine ** 3.
    if (points >= Ncost) {
        points = points - Ncost
        tracker.innerText = points.toFixed(2) + " Seconds"
        tracker.innerText = points + 'Seconds'
        noisesmachine = noisesmachine + 1
        noisesmachineTracker.innerText = noisesmachine + " Noise Machines Owned"
        NcostT.innerText = ("Cost: ") + (500 + noisesmachine ** 3).toFixed(1)
    } else {
        alert("Not enough time! You need at least 500 seconds to buy Noise Machine")
    }
}
function purchaseAcs () {
    Acost = 1000 + acs ** 4.
    if (points >= Acost) {
        points = points - Acost
        tracker.innerText = points.toFixed(2) + " Seconds"
        acs = acs + 1
        acsTracker.innerText = acs + " Acs Owned"
        AcostT.innerText = ("Cost: ") + (1000 + acs ** 4.).toFixed(1)
        
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

function autobuy(){
    if  (Asheets = 1) {
        tracker.innerText = points.toFixed(2) + " Seconds"
        sheets = sheets + 1
        sheetsTracker.innerText = sheets + ' Sheets Owned'
    }
    else if  (points >= AsheetsP) {
        points = points - 10000
        Asheets = Asheets + 1
        tracker.innerText = points.toFixed(2) + " Seconds"
        alert('you will automatically earn 10 sheet a second')
    }

}

function Music() {
    bg
    if(bg = 1) {
    document.getElementById("playbutton").style.display = "none"
    document.getElementById("mutebutton").style.display = "inline-block"
    bgMusic.play()
}
    else{
        document.getElementById("mutebutton").style.display = "none"
        document.getElementById("playbutton").style.display = "inline-block"
        bgMusic.pause()
}
}
setInterval(gameLoop, 1000)
setInterval(checkprice, 10)
setInterval(autobuy, 1)
