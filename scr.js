const vid = document.getElementById("webcam");
const butt = document.getElementById("togbutt");
var a = 1, av = -1;

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    av = 1;
}

function al() {
    if (document.getElementById("em").value.length != 0){
        alert("E-mail ID: "+document.getElementById("em").value+"\nPassword: "+document.getElementById("pw").value);
    }
}

function toggle() {
    //console.log("Toggle called -> ", a);
    if (a == 1) {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            turnOn();
            butt.innerHTML = "Turn Camera Off";
            a *= -1;
        }
    }
    else {
        turnOff(vid.srcObject);
        butt.innerHTML = "Turn Camera On";
        a *= -1;
    }
}

function turnOn() {
    if (av == 1) {
        navigator.mediaDevices.getUserMedia({ video: { height: 360, width: 640 } }).then((stream) => {
            vid.srcObject = stream;
            vid.play();
        })
    }
}

function turnOff(stream) {
    stream.getTracks().forEach(function (track) {
        if (track.readyState == 'live' && track.kind === 'video') {
            track.stop();
        }
    });
}

// 'use strict';

// const video = document.getElementById("webcam");
// const constraints = {
//     audio: true,
//     video: {
//         width: 1280, height: 720
//     }
// }

// async function init (){
//     try{
//         const stream = await navigator.mediaDevices.getUserMedia(constraints);
//         onsucc(stream)
//     }
//     catch(e){
//         console.log("Error Caught");
//     }
// }

// function onsucc(stream){
//     window.stream = stream;
//     video.srcObject = stream;
// }

// init();