let goma = []; // ゴマのデータを格納する配列
let gomaSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gomaSize = min(windowWidth, windowHeight) * 0.1; 

  // ゴマを生成
  for (let i = 0; i < 45; i++) {
    goma.push({
      x: random(width / 2 - width/8, width / 2 + width/8),
      y: random(height / 2 - height/6, height / 2 + height/6),
      size: gomaSize
    });
  }
}

function draw() {
  background(160, 192, 255);

  // すりばち
  fill(255); // 白
  ellipse(width / 2, height / 2, min(width, height) * 0.70);

  // ゴマ
  fill(222, 184, 135); 
  for (let g of goma) {
    ellipse(g.x, g.y, g.size);
  }

  // すりこき棒
  fill(139, 69, 19); 
  const surikokiWidth = windowWidth * 0.05;
  const surikokiHeight = windowHeight * 0.2;
  rectMode(CENTER);
  rect(mouseX, mouseY * 0.8, surikokiWidth, surikokiHeight);

 // マウスが押されている間ゴマを分裂
 if (mouseIsPressed) {
  splitGoma();
}
}
function splitGoma() {
let newGoma = [];
for (let g of goma) {
  if (dist(mouseX, mouseY, g.x, g.y) < g.size / 2 && g.size > gomaSize * 0.4) {
    // ゴマが一定以上のサイズの時に分裂
    newGoma.push({ x: g.x + random(-40, 40), y: g.y + random(-40, 40), size: g.size*0.8});
    newGoma.push({ x: g.x + random(-40, 40), y: g.y + random(-40, 40), size: g.size*0.8 });
  } else {
    newGoma.push(g);
  }
}
goma = newGoma; // ゴマの配列を更新
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  gomaSize = min(windowWidth, windowHeight) * 0.02; // ウィンドウサイズに基づいてゴマのサイズを再計算
  for (let g of goma) {
    g.size = gomaSize;
  }
}
