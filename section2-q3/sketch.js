// ダーツ
let cx, cy;
function setup() {
  //定数として色を定義する
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0, 0, 0);
  const cream = color(242, 212, 147);

  //キャンバスの生成
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

 //中心座標と最大半径
  cx = width / 2; // 円の中心を(cx, cy)に設定（キャンバスの中央）
  cy = height / 2;
  const maxR = min(width, height); // 円の最大半径はキャンバスの幅と高さのうち小さい方
 
  //円の描写
  drawCircle(black, maxR); // 黒い大きな円
  drawArcs(green, red, maxR * 0.8); // 緑と赤の扇形
  drawArcs(black, cream, maxR * 0.75); // 黒とクリームの扇形
  drawArcs(green, red, maxR * 0.5); // 緑と赤の別の扇形
  drawArcs(black, cream, maxR * 0.45); // 黒とクリームの扇形
  drawCircle(green, maxR * 0.1); // 緑色の内側円
  drawCircle(red, maxR * 0.05); // 中央の赤い円
}

function drawCircle(c, r){//指定した色ｃと半径rで中心(cx、cy)を基準に円を描写する。
  fill(c);//図形の塗りつぶしの色
  ellipse(cx, cy, r, r);//円を描くコード
}

// 円を20個の扇形に分割し、それぞれを交互に色付け
function drawArcs(c1, c2, r) {//c1,c2と半径ｒで円を描く
  for (let i = 0; i < 20; i++) {// 20までつづける
    let start = TWO_PI / 20 * i; //360度を20等分　開始角度
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2); // 偶数番目をc1、奇数番目をc2で塗る
    arc(cx, cy, r, r, start, stop, PIE); // 中心 (cx, cy) を基準にして半径 r の扇形を描く
  }
}

