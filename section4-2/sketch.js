//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let lastBallTime = 0; // 最後にボールを生成した時間を記録

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw() {
  background(160, 192, 255);

  // 一定時間ごとにボールを生成
  if (millis() - lastBallTime > 100) { //100ミリ秒ごとにボール生成
    const b = {
      x: random(width),         // ランダムな位置
      y: random(height),        // ランダムな位置
      size: random(10, 50),     // ランダムなサイズ
      vx: random(-3, 3),        // ランダムなx方向速度
      vy: random(-3, 3),        // ランダムなy方向速度
    };
    balls.push(b);//ボールに配列を追加する
    lastBallTime = millis();    // 時間を更新
  }

  // ボールを描画し移動させる
  for (let i = balls.length - 1; i >= 0; i--) {
    let b = balls[i];
    ellipse(b.x, b.y, b.size);  // 位置、大きさを使って円を描く
    b.x += b.vx;
    b.y += b.vy;  // 速度と方向を変える
  }
}

// マウスを動かして新しいボールを作る
function mouseDragged() {
  const dx = mouseX - pmouseX;  // 今のマウスの位置 - 直前のマウスの位置
  const dy = mouseY - pmouseY;  // 今のマウスの位置 - 直前のマウスの位置
  if (mag(dx, dy) > 5) {  // mag(x,y) はベクトル(x,y)の長さ
    const b = {
      x: mouseX,
      y: mouseY,
      size: random(10, 50),  // ランダムなサイズ
      vx: dx,
      vy: dy,
    };
    balls.push(b);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}