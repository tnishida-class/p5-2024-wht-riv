// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
　noStroke();//線消す
  background(255);//背景白


  let d = height / 9; // 縞1本の太さ

  //縞模様を描く
  for(let i = 0; i < 9; i++){
    if(i%2===0){//2で割ったあまりが0
      fill(blue);//条件を満たすとき青で塗る
    }else{//それ以外のとき
      fill(255);//白で塗る
    }
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)

    rect(0, i * d, width, (i + 1) * d);//縞模様を書く
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);//青い正方形の座標とサイズ指定
  fill(255);//描画する形の塗りつぶしの色を白に指定
  rect(0,size/2-d/2,size,d);//横白線 （x座標、ｙ座標、横幅、縦幅）
  rect(size/2-d/2,0,d,size);//縦白線　（x座標、ｙ座標、横幅、縦幅）
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
