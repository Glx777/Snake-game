var W = 900;
var H = 700;
var BOX_W = W / COLS;
var BOX_H = H / ROWS;
var ctx = $("#canvas")[0].getContext('2d');
function transformX(x) {
  return W * x / COLS;
}
function transformY(y) {
  return H * (1 - (y + 1) / ROWS);
}
// Рисуем змейку
function renderSnake() {
  for (var i = 0; i < snake.length; i++) {
    var x = snake[i].x;
    var y = snake[i].y;
    var xx = transformX(x);
    var yy = transformY(y);
    ctx.fillStyle = "#08cbfd";
    ctx.fillRect(xx,yy,BOX_W,BOX_H);
  }
}
// Рисуем еду
function renderFruit() {
  var xx = transformX(fruit.x);
  var yy = transformY(fruit.y);
  ctx.fillStyle = "#f05";
  ctx.fillRect(xx,yy,BOX_W,BOX_H);
}
function render() {
  ctx.clearRect(0,0,W,H);
  renderSnake();
  renderFruit();
  setTimeout(render, 10);
}
render();
