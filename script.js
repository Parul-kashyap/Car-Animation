// CALLING ALL ELEMENTS IN MY HTML
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let tyre1 = document.getElementById("tyre1");
let tyre2 = document.getElementById("tyre2");
let track = document.getElementById("road");
let sky = document.getElementById("sky");
let trees = document.getElementById("tree");
let mycar = document.getElementById("car");

//BUTTON FOR RUNNING MY CAR
function run(){
    tyre1.style.animationPlayState= `running`;
    tyre2.style.animationPlayState= `running`;
    track.style.animationPlayState= `running`;
    sky.style.animationPlayState= `running`;
    trees.style.animationPlayState= `running`;
    mycar.style.animationPlayState= `running`;
}


//BUTTON FOR STOPPING THE CAR
function stop(){
  tyre1.style.animationPlayState= `paused`;
  tyre2.style.animationPlayState= `paused`;
  track.style.animationPlayState= `paused`;
  sky.style.animationPlayState= `paused`;
  trees.style.animationPlayState= `paused`;
  mycar.style.animationPlayState= `paused`;
}
