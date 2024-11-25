// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }
  console.log(scores);//出力

  // 平均を計算するため、合計を計算
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log("Sum:", sum);

  // BLANK[1] 平均値の計算（ヒント average = 合計 / 配列の長さ）
  let average = sum / scores.length;
  console.log("Average:", average);

  // BLANK[2] 最大値の計算ヒント：今までの最大値 largest と scores[i] を比較する
  let largest = 0;//最大値の比較対象を最小値にすることで最大値にとって代われる
  for(let i = 0; i < scores.length; i++){//for ループでlargest と比較し、より大きい値が見つかると、largest をその値に更新
    if (largest < scores[i]) {
      largest = scores[i];
    }
  }
  console.log("Largest:", largest);

  // BLANK[3] 最小値の計算　ヒント：最小値とだいたい同じ
  let smallest = 100;//基準の最小値を最大にすることで最小値にとって代われる
  for(let i = 0; i < scores.length; i++){//for ループでsmallest と比較し、より小さい値が見つかると、smallest をその値に更新
    if (scores[i] < smallest) {
      smallest = scores[i];
    }
  }
  console.log("Smallest:", smallest);

  // 背景に横線を n 本引く
  const n = 10;
  for(let i = 0; i < n; i++){//for ループで、line関数を使って等間隔に横線を引く
    line(0, height * i / n, width, height * i / n);//キャンバスの高さを n 等分した位置に線が描画
  }

  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length//棒の間隔を計算
    const h = height * scores[i] / 100;//scores[i] を基に棒の高さを計算
    
    // BLANK[4] ヒント: 条件分岐を使って色を変更します
    if (scores[i] === largest) {//最大値を赤
      fill(255, 0, 0);
    } else if (scores[i] === smallest) {//最小値を青
      fill(0, 0, 255);
    } else {//それ以外をグレー
      fill(122);
    }
    rect(i * dx + 2, height - h, dx - 4, h);//棒を描く
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }
  
  // BLANK[5] 平均点の線を引く
  stroke(0, 255, 0);
  const ah = height * average / 100;
  line(0, height - ah, width, height - ah);
}