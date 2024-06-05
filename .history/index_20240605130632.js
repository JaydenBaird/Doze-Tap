function checkprice()  {
    Scost = 10 + sheets ** 1.25
    Pcost = 50 + pillows ** 2
    Bcost = 250 + beds ** 2.50
    Ncost = 500 + noisesmachine ** 3.
    Acost = 1000 + acs ** 4.
    if (points >= Scost) {
        sheetsbtn.disabled = false;
    }
    else {
        sheetsbtn.disabled = true;
    }
    if (points >= Pcost) {

        document.getElementById("pillowsbtn").disabled = true;
    }
    else {
        document.getElementById("pillowsbtn").disabled = true;
    }
    if (points >= Bcost) {
        document.getElementById("bedsbtn").disabled = true;
    }
    else {
        document.getElementById("bedsbtn").disabled = true;
    }
    if (points >= Ncost) {
        document.getElementById("noisemachinebtn").disabled = true;
    }
    else    {
         document.getElementById("noisemachinebtn").disabled = false;
    }
    if (points >= Acost) {
        document.getElementById("acsbtn").disabled = true;
    }
    else {
        document.getElementById("acsbtn").disabled = false;
    }
