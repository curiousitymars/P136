video = "";
status="";
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function start() {
    objectDetect = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded() {
    console.log("model loaded");
    status = true;
}
function draw() {
    image(video, 0, 0, 400, 400);
}