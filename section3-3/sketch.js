// テキスト「キーボード操作に反応する」
const g = 1;     // 重力（いろいろな値を試してみましょう）
const jump = 20; // ジャンプ力（いろいろな値を試してみましょう）
const ground = 20;
const size = 20;
let x, y,vx,vy;

function setup(){
  createCanvas(windowWidth, windowHeight);//キャンバスの生成
  x = width / 2;
  y = height / 2;//初期位置の設定
  vx=0;
  vy=0;//
}
function draw(){
  let gy = height - ground;//地面のy座標
  line(0, gy, width, gy); // 地面の線
  //速度
  x += vx;
  // 画面外に出ないように制約
  x = constrain(x, 25, width - 25);
  background(160, 192, 255);
  ellipse(x, y, 50);
//矢印キーでの移動
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
//Aで右移動、スペースキーで左移動　
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }
//Fを押している間、移動速度アップ
　if(keyIsDown("F".charCodeAt(0))&&(keyIsDown(LEFT_ARROW))){ vx=-20}
  　if(keyIsDown("F".charCodeAt(0))&&(keyIsDown(RIGHT_ARROW))){ vx=+20}
 y += vy;
  if(y < height - ground - size / 2){ // 地面より上、つまり空中にいる
    vy += g; // 下方向に重力の影響で加速する
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }
}

function mousePressed{
  if(y >= height - ground - size / 2){ // 地面にいるときだけジャンプできる（この条件をなくせば空中ジャンプが可能になります）
    vy = -jump;     
  }


}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
