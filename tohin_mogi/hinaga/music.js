function audio2() {
    document.getElementById('btn_audio2').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio2').play(); //クリックしたら音を再生
}
function audio4() {
    document.getElementById('btn_audio3').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio3').play(); //クリックしたら音を再生
}
function audio4() {
    document.getElementById('btn_audio4').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio4').play(); //クリックしたら音を再生
}
function audio5() {
    document.getElementById('btn_audio5').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio5').play(); //クリックしたら音を再生
}
function mute3() {
    if (document.getElementById('btn_audio3').muted) {
        document.getElementById('btn_audio3').muted = false;
    } else {
        document.getElementById('btn_audio3').muted = true;
    }
}
function mute4() {
    if (document.getElementById('btn_audio4').muted) {
        document.getElementById('btn_audio4').muted = false;
    } else {
        document.getElementById('btn_audio4').muted = true;
    }
}
function mute5() {
    if (document.getElementById('btn_audio5').muted) {
        document.getElementById('btn_audio5').muted = false;
    } else {
        document.getElementById('btn_audio5').muted = true;
    }
}
