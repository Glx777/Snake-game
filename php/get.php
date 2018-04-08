<?php
include "add.php";

$datas = array();
$id = null;
$s = null;
$index = null;

if (isset($_POST['toMainMenuFromGameLost'], $_POST['toMainMenuFromGameWin'])) {
  session_destroy();
}

$sql = "SELECT * FROM Leaderboard ORDER BY score DESC, name";
$result = $conn-> query($sql);

if ($result-> num_rows > 0) {
  while ($row = $result-> fetch_assoc()) {
    $datas[] = $row;
  }
  $sliced = array_slice($datas, 0, 10);
  // Find id
  foreach($datas as $key => $arr) {
    if ($arr['name'] == $_SESSION['Name'] and $arr['score'] == $_SESSION['Score']) {
        $id = $arr['id'];
        break;
    }
  }
  // Find index
  foreach($datas as $key => $arr) {
    if($arr['id'] == $id and $arr['name'] == $_SESSION['Name'] and $arr['score'] == $_SESSION['Score']) {
        $index = $key;
        break;
    }
  }
  if ((sizeof($sliced) > 9) && ($sliced[9]['score'] > $_SESSION['Score'])) {
    for ($i = 0; $i < sizeof($sliced) - 1; $i++) {
     $s = $s + 1;
     echo '<tr><td>' . $s . '</td>' .'<td>' . $sliced[$i]['name'] . '</td><td>' . $sliced[$i]['score'] . '</td></tr>';
   }
   echo '<tr><td>' . $index . '</td>' .'<td>' . $_SESSION['Name'] . '</td><td>' . $_SESSION['Score'] . '</td></tr>';
 } else {
   for ($i = 0; $i < sizeof($sliced) ; $i++) {
      $s = $s + 1;
      echo '<tr><td>' . $s . '</td>' .'<td>' . $sliced[$i]['name'] . '</td><td>' . $sliced[$i]['score'] . '</td></tr>';
    }
 }
  }
?>
