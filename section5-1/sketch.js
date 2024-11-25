function setup() {
  createCanvas(450,300); 
  background(0, 0, 255); //
  fill(255, 204, 0); 
  noStroke(); 

  // 12個の星を円周上に描画
  for (let i = 0; i < 12; i++) {
    let theta = TWO_PI * i / 12; // 12分割
    let x = 225 + cos(theta) * 100; // 中心座標を(75, 100)に変更
    let y = 150 + sin(theta) * 100;
    star(x, y, 15); // 星のサイズを15に変更
  }
}

// 星を描く関数
function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}