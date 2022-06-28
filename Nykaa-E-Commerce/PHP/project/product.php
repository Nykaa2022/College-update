<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "ecommerce_pro"; 
   
$con = mysqli_connect($host, $user, $password,$dbname);  

$sth = mysqli_query($con, "SELECT * from product where id='$_GET[id]'");
$rows = array();
while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = array("id"=>$r["id"], "product_name"=>$r["name"], "price"=>$r["price"], "description"=>$r["short_desc"], "thumb"=>stripslashes("http://localhost/project/".$r["img"]), "currency"=>"$");;
}
print json_encode($rows, JSON_UNESCAPED_SLASHES);

?>