noseX = 0
noseY = 0
function preload() {
moustache = loadImage("https://i.postimg.cc/3RJhmQDn/nose.png")
}
function setup() {
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose' , gotPoses)
}
function draw() {
image(video,0,0,300,300)
image(moustache,noseX,noseY,75,20)
}
function modelLoaded() {
    console.log("poseNet is intialised")
}
function take_snapshot() {
    save("MyfilterImage.png")
}
function gotPoses(results) {
    if(results.length > 0){
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
        noseX = results[0].pose.nose.x - 33
        noseY = results[0].pose.nose.y + 10
        console.log("nose x = " + noseX)
        console.log("nose y = " + noseY)
    }
}