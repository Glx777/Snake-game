var snake = [];
var score = 0;
var s = 0;
var initial_snake_length = 5;
var COLS = 50;
var ROWS = 50;
var speed = {
  x: 1,
  y: 0
}
var fruit = [];
var gameSpeed = 90;
var playing = true;
var newSpeed = false;

function newFruit() {
  do {
    fruit = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS)
    };
  } while(onSnake(fruit));
}

function newSnake() {
  for (var i = 0; i < initial_snake_length; i++) {
    snake.push({
      x: Math.floor(COLS / 2) - i,
      y: Math.floor(ROWS / 2)
    });
  }
}

function play() {
  startTimer();
  snake = [];
  score = 0;
  s = 0;
  initial_snake_length = 5;
  COLS = 50;
  ROWS = 50;
  speed = {
    x: 1,
    y: 0
  }
  fruit = [];
  gameSpeed = 90;
  playing = true;
  newSpeed = false;
  newSnake();
  newFruit();
  intergrate();
}

function inBoard(position) {
  return position.x >= 0
  && position.y >= 0
  && position.x < COLS
  && position.y < ROWS;
}

function onSnake(position) {
  for (var i = 0; i < snake.length; i++) {
    if (position.x == snake[i].x
    && position.y == snake[i].y) {
      return true;
    }
  }
}

function intergrate() {
  var head = snake[0];

  if (newSpeed != false) {
    speed = newSpeed;
    newSpeed = false;
  }

  var dx = speed.x;
  var dy = speed.y;

  var newPosition = {
    x: head.x + dx,
    y: head.y + dy
  }

  if (playing) {
    if (($("#nameInput").val() != "terter") && (!inBoard(newPosition) || onSnake(newPosition))) {
      $("#canvas").hide();
      $("#playground").show();
      $("#pause_btn").hide();
      $("#gameLost").show();
      $("#namePhp_input").val($("#nameInput").val());
      $("#scorePhp_input").val($(".Score").html());
      pauseTimer();
      $.post($("#myForm").attr('action'), $("input.info").serializeArray(), function(info) {
        console.log(info);
        $(".Datas").load('./php/get.php');
      });
      return;
    }

    if (score == 30 && $("#nameInput").val() != "terter") {
      pauseTimer();
      $("#canvas").hide();
      $("#gameWin").show();
      $("#playground").show();
      $("#winnerName").html($("#name").html());
      $("#namePhp_input").val($("#nameInput").val());
      $("#scorePhp_input").val($(".Score").html());
      $("#pause_btn").hide();
      $.post($("#myForm").attr('action'), $("input.info").serializeArray(), function(info) {
        console.log(info);
        $(".Datas").load('./php/get.php');
      });
      return;
    }

    if (minutes == 0 && seconds == 0) {
      pauseTimer();
      $("#canvas").hide();
      $("#playground").show();
      $("#gameLost").show();
      $("#pause_btn").hide();
      $("#namePhp_input").val($("#nameInput").val());
      $("#scorePhp_input").val($(".Score").html());
      $.post($("#myForm").attr('action'), $("input.info").serializeArray(), function(info) {
        console.log(info);
        $(".Datas").load('./php/get.php');
      });
      return;
    }

    snake.unshift(newPosition);
    if (newPosition.x == fruit.x && newPosition.y == fruit.y) {
      newFruit();
      score += 10;
      s += 1;
      if (s % 5 == 0) {
        gameSpeed -= 15;
      }
    } else {
      snake.pop();
    }
    $(".Score").html(score);
  }
  setTimeout(intergrate, gameSpeed);
}
