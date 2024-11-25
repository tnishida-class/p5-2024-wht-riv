// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // 折れ線グラフの描写
  fill(0);
  const dx = width / scores.length;//横幅を均等に
  let px, py; // 線を引くために一つ前の点を覚えておく変数

  for(let i = 0; i < scores.length; i++){
    const cx=dx*i+dx/2//点の x 座標
    const cy=height-scores[i] *height/100//点のy座標
    ellipse(cx,cy,10);//点
     // 前の点が存在する場合は線を引く
     if (i > 0) {//0より大きいとき線を引く
      line(px, py, cx, cy);
    }

    // 現在の点を次の点のために保存
    px = cx;
    py = cy;
  }
}
