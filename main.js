noseX=0;
nosey=0;
rightWristx=0;
leftWristx=0;
differnce=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCapture(550,550);
    canvas.postion(550,500);
    poseNet=ml5.poseNet(video,modelLoded);
}
function modelLoded(){
console.log("Thara Bhai Joginder");
}
function gotposes(results){
if (result.length > 0 ){console.log(results);

}
}
