noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550)
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#00ff44");
    fill("#8A2BE2");
    stroke("#adff2f");
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "width and the height of the square is " + difference + "px";

}

function modeLoaded() {
    console.log("posenet is intialisesd");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX =" + leftwristX + "rightwristX =" + rightwristX + "difference =" + difference);
    }
}