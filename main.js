bedroom = ""
bottle = ""
desk = ""
fruitb = ""
tv = ""

function preload() 
{
    bedroom = loadImage("bedroom.jpg")
}
function setup() 
{
    canvas = createCanvas(620, 400)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Object Detecting"
}
function modelLoaded() 
{
    console.log("Model is Loaded!")
    objectDetector.detect(bedroom,gotResult)
}