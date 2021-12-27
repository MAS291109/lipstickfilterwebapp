
function preload(){
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,400,300);
}

function take_snapshot(){
    save("my_filtered-pic.png");
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPose(result){
    if(result.length > 0){
        console.log(result);
        console.log("nose x: "+result[0].pose.nose.x);
        console.log("nose y: "+result[0].pose.nose.y);
    };
}