let points = 0
let pointTracker = document.getElementById("pointsTracker")

function increasePoints () {
    points = points + 1
    pointsTracker.innerText = points + ' Sleep Points'
}