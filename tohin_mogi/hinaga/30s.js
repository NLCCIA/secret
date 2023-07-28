//タイマー表示要素を取得
const s_minute4 = document.getElementById("minute4");
const s_second4 = document.getElementById("second4");
//スタートボタンを取得
const s_startBtn4 = document.getElementById("startBtn4");
const s_resetBtn4 = document.getElementById("resetBtn4");
const s_stopBtn4 = document.getElementById("stopBtn4");
//終了時音楽
let finaudio = new Audio("30s.mp3");
//カウントの秒数
let s_count4 = 30;

//スタートボタンクリックで処理を行う
s_startBtn4.addEventListener("click", () => {
  s_startBtn4.style.pointerEvents = "none";
  s_startBtn4.style.opacity = .5;
  s_resetBtn4.style.pointerEvents = "none";
  s_resetBtn4.style.opacity = .5;
  s_stopBtn4.style.pointerEvents = "auto";
  s_stopBtn4.style.opacity = 1;
  //一定時間おきに行いたい関数を宣言
  function s_countDown4() {
      if(s_count4 > 0) {
          //countが0より大きい場合はcountを1ずつ減らす
          s_count4--;
          let s_MinuteCount4 = Math.floor(s_count4 / 60);
          let s_SecondCount4 = s_count4 - (Math.floor(((s_count4 +1) / 60)) * 60);
          //タイマー表示要素にcountの数値を表示
          s_minute4.textContent = `${s_MinuteCount4}分`;
          s_second4.textContent = s_SecondCount4 >= 10 ? `${s_SecondCount4}秒` : `0${s_SecondCount4}秒`;
      } else {
          finaudio.play();
          //countが0以下になったら0を表示
          s_minute4.textContent = "0分";
          s_second4.textContent = "00秒"
          console.log("タイマーが停止しました");
          clearInterval(s_countDownTimer4);
          s_resetBtn4.style.opacity = 1;
          s_resetBtn4.style.pointerEvents = "auto";
          s_stopBtn4.style.pointerEvents = "none";
          s_stopBtn4.style.opacity = .5;
        }
  }

  const s_countDownTimer4 = setInterval(s_countDown4,1000);

  s_stopBtn4.addEventListener("click", () => {
      clearInterval(s_countDownTimer4);
      s_startBtn4.style.pointerEvents = "auto";
      s_startBtn4.style.opacity = 1;
      s_resetBtn4.style.opacity = 1;
      s_resetBtn4.style.pointerEvents = "auto";
  })
});

s_resetBtn4.addEventListener("click", () => {
  s_startBtn4.style.pointerEvents = "auto";
  s_startBtn4.style.opacity = 1;
  s_count4 = 30;
  s_minute4.textContent = "0分";
  s_second4.textContent = "30秒";
  finaudio.pause();
  finaudio.currentTime = 0;  
});
// 曲の先頭に再生開始位置を戻す