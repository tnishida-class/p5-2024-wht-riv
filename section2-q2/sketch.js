// チェッカー
function setup() {
  let s = 50;//各マスのサイズ(幅、高さ)
  let d = 40;//円の直径
  createCanvas(400, 400);
  background(255);
  noStroke();//輪郭を消す
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {//ループ変数で、ループ変数iが0から始まり、iが8より小さい間、iを1増加させる。その中で、ループ変数jが0から始まり、jが8より小さい間、jを1増加させる、8×8のます目作成
      let x = i * s;
      let y = j * s;
      if ((i + j) % 2 === 1) {//色を塗るマスを指定
        fill(122);//カラーをグレーに指定
        rect(x, y, s, s);//グレーの四角を書く
      }
      if (((i + j) % 2 === 1) && (j < 3)) {//(i + j) % 2 === 1 で奇数マスに限定、j < 3 で上部3行（0行目から2行目）のみに赤い円を描く
        fill(255, 0, 0);//カラーを赤に指定
        ellipse(x + s / 2, y + s / 2, d);//円を描く
      }
      if (((i + j) % 2 === 1) && (4 < j)) {//(i + j) % 2 === 1 で奇数マスに限定、 j > 4 で下部3行（5行目から7行目）のみに黒い円を描く。
        fill(0);//カラーを黒に指定
        ellipse(x + s / 2, y + s / 2, d, d);//円を描く
      }
    }
  }
}
