<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "ecommerce_pro"; 
   
$con = mysqli_connect($host, $user, $password,$dbname);  

$sth = mysqli_query($con, "SELECT * from comments where p_id='$_GET[id]'");
$rows = array();
while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = array("id"=>$r["id"], "user"=>$r["user"],"comment"=>$r["comment"]);
}
print json_encode($rows, JSON_UNESCAPED_SLASHES);

?>