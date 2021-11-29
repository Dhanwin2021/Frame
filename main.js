function preload(){
    img=loadImage('https://i.postimg.cc/j5Szhw3s/Xb28-Se-Fi-E4w-NGJp-Abstract-Gold-Frame-Transparent-PNG.png');
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(640,480);
    video.center();
    video.hide();
}

function draw(){
    image(img,0,0,640,480);
    image(video,30,30,600,400);
}

function take_snapshot(){
    save('student_name.png')
}