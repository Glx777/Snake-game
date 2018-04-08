// При загрузке страницы
$(document).ready(function() {
  $("#canvas").hide();
  $("#pause_btn").hide();
  $("#gameLost").hide();
  $("#startGame_btn").prop('disabled', true);
  $("#gameWin").hide();
  $("#toMainMenuFromTest").hide();
});
$("#nameInput").keyup(function() {
  if ($(this).val() != "") {
    $("#startGame_btn").prop('disabled', false);
  } else {
    $("#startGame_btn").prop('disabled', true);
  }
});
// При нажатии на клавишу "Начать играть"
$("#startGame_btn").click(function() {
  $("#name").html($("#nameInput").val());
  if ($("#nameInput").val() == 'terter') {
    $("#name").html("Тестовый режим");
    $("#pause_btn").prop('disabled', false);
    play();
    pauseTimer();
    playing = true;
    $("#toMainMenuFromTest").show();
  } else {
    play();
  }
  $("#gameStart").hide();
  $("#playground").hide();
  $("#canvas").show();
  $("#pause_btn").show();
});
$("#toMainMenuFromGameLost").click(function() {
  $("#startGame_btn").prop('disabled', true);
  $("#gameLost").hide();
  $("#gameStart").show();
  $("#gameTime").html("05:00");
  $(".Score").html("0");
  $("#name").html("");
  $("#nameInput").val("");
});
$("#toMainMenuFromGameWin").click(function() {
  $("#gameWin").hide();
  $("#name").html("");
  $(".Score").html("");
  $("#nameInput").val("");
  $("#gameTime").html("05:00");
  $("#gameStart").show();
  $("#gameStart").prop('disabled', true);
});
$("#startAgainFromGameLost").click(function() {
  play();
  $("#gameTime").html("05:00");
  $("#playground").hide();
  $("#gameLost").hide();
  $("#canvas").show();
  $("#pause_btn").show();
});
$("#startAgainFromGameWin").click(function() {
  play();
  $("#gameTime").html("05:00");
  $("#playground").hide();
  $("#gameWin").hide();
  $("#canvas").show();
  $("#pause_btn").show();
});
$("#pause_btn").click(function() {
  $(this).val($(this).val() == 'Пауза' ? 'Продолжить' : 'Пауза');
  if ($(this).val() == 'Продолжить') {
    pauseTimer();
  }
  if ($(this).val() == 'Пауза') {
    resumeTimer();
  }
});
$('body').keyup(function(e) {
  if (e.keyCode == 32 && ($("#name").html() != 'Тестовый режим') && $("#canvas").is(":visible")) {
    $("#pause_btn").val($("#pause_btn").val() == 'Пауза' ? 'Продолжить' : 'Пауза');
    if ($("#pause_btn").val() == 'Продолжить') {
      pauseTimer();
      playing = false;
    }
    if ($("#pause_btn").val() == 'Пауза') {
      resumeTimer();
      playing = true;
    }
  }
});
