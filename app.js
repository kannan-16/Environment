const climate = document.getElementById("climate")
const consumption = document.getElementById("consumption")
const resources = document.getElementById("resources")
const people = document.getElementById("people")

const save = document.getElementById("save")
const frame = document.getElementById("frame")

climate.onclick = () => {
    document.body.style.backgroundImage = "url(https://i1.faceprep.in/prograd-junior/climate-change-bg.png)"
    frame.src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    save.innerHTML = "Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    climate.style.background = "#2F08ED"
    consumption.style.background = "transparent"
    resources.style.background = "transparent"
    people.style.background = "transparent"
}

//climate should be changed to consumption
consumption.onclick = () => {
    //background - 
    document.body.style.backgroundImage = "url(https://i1.faceprep.in/prograd-junior/food-wastage-bg.png)"
    //Iframe - Right side
    frame.src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    //Change the Do your bit part
    save.innerHTML = "Do your bit! Shop only what you need, eat what you need and always save left overs."
    //Change the button colors
    climate.style.background = "transparent"
    consumption.style.background = "#27AE60"
    resources.style.background = "transparent"
    people.style.background = "transparent"
}

//consumption should be changed to resources
resources.onclick = () => {
    //background - 
    document.body.style.backgroundImage = "url(https://i1.faceprep.in/prograd-junior/natural-resources-bg.png)"
    //Iframe - Right side
    frame.src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    //Change the Do your bit part
    save.innerHTML = "Do your bit! Avoid all things plastic. Reduce, Reuse and Recycle"
    //Change the button colors
    climate.style.background = "transparent"
    consumption.style.background = "transpare"
    resources.style.background = "#F2994A"
    people.style.background = "transparent"
}
//resources should be changed to people
people.onclick = () => {
    //background - 
    document.body.style.backgroundImage = "url(https://i1.faceprep.in/prograd-junior/poverty-bg.png)"
    //Iframe - Right side
    frame.src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    //Change the Do your bit part
    save.innerHTML = "Do your bit! Never Waste Food"
    //Change the button colors
    climate.style.background = "transparent"
    consumption.style.background = "transpare"
    resources.style.background = "transparent"
    people.style.background = "#EB5757"
}