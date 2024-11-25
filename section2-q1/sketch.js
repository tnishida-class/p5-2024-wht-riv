// 小手調べ
function setup() {
  createCanvas(120, 120);//キャンバス
  background(255);//背景の色
  noFill();//塗りつぶしをなくす
  for(let i = 0; i < 10; i++){
    let d = (i + 1) * 10;//繰り返しを使って円を10回かく
    if (i < 5) {　//条件分岐
      stroke(0, 0, 255);　//内側青
    } else {
      stroke(255, 0, 0);//それ以外赤
    }
    ellipse(width/2, height/2, d, d);//円を描く(x座標、y座標、横幅、縦幅)
  }
}