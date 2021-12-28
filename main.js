lipstick_x=0;
lipstick_y=0;

function preload(){
   lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
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
    image(lipstick,lipstick_x,lipstick_y,60,45);
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
        lipstick_x = result[0].pose.nose.x + 15;
        lipstick_y = result[0].pose.nose.y+12;
        console.log("nose x: " + lipstick_x);
        console.log("nose y: "+ lipstick_y);
    };
}