// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」

let size = 50; // 円の初期サイズ
let count = 0;let cycle = 100; // 円の鼓動を表現するための周期
let increment = 1; // カウントの増分量

function setup() {
  createCanvas(200, 200); // キャンバスの大きさを指定
}

function draw() {
  background(160, 192, 255); // 背景の色を指定
  
  //キーが押されているとき、countをはやくする
  if (keyIsPressed) {count=(count+10)%cycle}
   
  //countを0-100の間で増加させる
  count = (count + increment) % cycle;
  
  // 円のサイズをカウントに基づいて変化させる
  if (count < cycle / 2) {// もしcountが周期の半分未満の時は円を大きく
    size = count + 50;
  } else {//半分以上の時は円を小さくする
    size = (cycle - count) + 50;                               ;
  }
  
  // キャンバスの真ん中に円を描く
  ellipse(width / 2, height / 2, size);
}