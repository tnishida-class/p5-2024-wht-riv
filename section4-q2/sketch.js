function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }

  // 円グラフを描くために割合が必要なので合計を計算
  let total = 0;
  for(let i = 0; i < scores.length; i++){ 
    total += scores[i]; 
  }

  // 円グラフを描画
  let startAngle = 0;
  for(let i = 0; i < scores.length; i++){
    // 各データの割合を計算し、その分の角度を求める
    let angle = (scores[i] / total) * TWO_PI;// 各スコアの割合に応じた角度を計算
    
    // 円グラフを描画
    fill(255); 
    arc(200, 200, 300, 300, startAngle, startAngle + angle, PIE);

    // 角度の中央にテキストを表示
    let midAngle = startAngle + angle / 2;//角度の中央を計算。円弧が開始する角度からその真ん中の位置
    let x = 200 + cos(midAngle) * 120;
    let y = 200 + sin(midAngle) * 120;
    fill(0);
    textAlign(CENTER, CENTER);
    text(nf(scores[i], 1, 1), x, y); // 小数点以下1桁で数値を表示

    // 開始角度を更新
    startAngle += angle;
  }
}