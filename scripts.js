// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function(){
//         var audio = new Audio('./assets/even-flow.mp3');
//         audio.play();
//     }, 500)
//   });
var isCalled = false;
var audio = new Audio('./assets/even-flow.mp3');


function playMusic() {
    audio.play();
    
    document.getElementById('buttonPlay').style.display = "none"
    document.getElementById('buttonPause').style.display = "inline"
    audio.addEventListener('timeupdate',function(){
        var progress = document.getElementById('progressMusic');
        progress.style.width = audio.currentTime + "%";
    },false);

}

function pauseMusic() {
    audio.pause();
    document.getElementById('buttonPause').style.display = "none"
    document.getElementById('buttonPlay').style.display = "inline"
}