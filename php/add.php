<?php
include "config.php";
session_start();

if (isset($_POST['name_php'])) {
  $Name = mysqli_real_escape_string($conn, $_POST['name_php']);
  $Score = mysqli_real_escape_string($conn, $_POST['score_php']);
  $_SESSION['Name'] = $Name;
  $_SESSION['Score'] = $Score;

  $adding_data = "INSERT INTO Leaderboard (name, score)
  VALUES ('$Name', '$Score')";

  if ($conn->query($adding_data) === TRUE) {
    echo "New record created successfully";
  } else {
      echo "Error: " . $adding_data . "<br>" . $conn->error;
  }
}
?>
