
function setup() {
    video= createCapture(VIDEO);
    video.size = (550,500);

    canvas = createCanvas(550,550);
    canvas.position = (550,150);

    poseNet = ml5.poseNet(video , modelloaded);
poseNet.on = ('pose', gotPoses);

}
 function modelloaded (){
    console.log ('Posenet is Initialised!');

 }

 function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
background('#FFB6C1') ;
}

