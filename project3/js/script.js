import { cueTimer } from "./module/cuepoint.js";

let vid;
document.addEventListener('DOMContentLoaded', init);
var myCues;
function init(){




    document.getElementById('btnPlay').addEventListener('click', play);
    document.getElementById('btnPaws').addEventListener('click', paws);
    document.getElementById('btnFF').addEventListener('click', ff);
    document.getElementById('btnSlow').addEventListener('click', slowmotion);
    document.getElementById('btnNorm').addEventListener('click', normalspeed);
    document.getElementById('btnSeek').addEventListener('click', seek);
    document.getElementById('btnLoad').addEventListener('click', load);
    
    myCues = [
        {seconds:0, callback:gchord},
        {seconds:4, callback:fchord},
        {seconds:8, callback:cchord},
        {seconds:10, callback:gchord},
        {seconds:12, callback:fchord},
        {seconds:16, callback:gchord},
        {seconds:20, callback:fchord},
        {seconds:24, callback:cchord},
        {seconds:26, callback:gchord},
        {seconds:28, callback:fchord},
        {seconds:32, callback:gchord},
        {seconds:36, callback:fchord},
        {seconds:40, callback:cchord},
        {seconds:42, callback:gchord},
        {seconds:44, callback:fchord}
        


        
    ];

    cueTimer.setup('myVideo', myCues);
   
    vid = document.getElementById('myVideo');
    console.log(vid);
    console.log({vid})

    let mediaType = vid.type;
    let str = vid.canPlayType("video/mp4");
    console.log(str);
    vid.volume = 0.5;
    

}

function play(ev){
    vid = document.getElementById('myVideo');
    vid.play()
    .then(()=>{
        console.log('video playing')
    })
    .catch((err)=>{
        console.log({err});
    });
}

function paws(ev){
vid.pause();
}

function slowmotion(ev){
    vid.playbackRate = 0.5;
}

function normalspeed() {
    vid.playbackRate = 1;
}

function ff(ev){
document.getElementById('btnFF').addEventListener('click', ff);
vid = document.getElementById('myVideo');
vid.currentTime += 20;
console.log(vid.currentTime);
console.log(btnFF);

}

function seek(ev){
    vid.currentTime = 270;
}

function load(ev){
    
    vid.load();
}

function gchord(){
console.log("gchord");
document.querySelector(".chords").innerHTML="<img src='images/gchord.jpg'>";
document.body.style.backgroundColor = "blue";


}

function fchord(){
    console.log("fchord");
    document.querySelector(".chords").innerHTML="<img src='images/fchord.jpg'>";
    document.body.style.backgroundColor = "teal";
   
}

function cchord(){
    console.log("cchord");
    document.querySelector(".chords").innerHTML="<img src='images/cchord.jpg'>";
    document.body.style.backgroundColor = "skyblue";
}


