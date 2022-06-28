<?php 
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
 
$response = array();
$upload_dir = 'upload/';
$server_url = 'http://localhost/project/';

$nme = $_GET["name"];
$prc = $_GET["price"];
$ldc = $_GET["ldesc"];
$sdc = $_GET["sdesc"];

if($_FILES['avatar'])
{
    $avatar_name = $_FILES["avatar"]["name"];
    $avatar_tmp_name = $_FILES["avatar"]["tmp_name"];
    $error = $_FILES["avatar"]["error"];
 
    if($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    }else
    {
        $random_name = rand(1000,1000000)."-".$avatar_name;
        $upload_name = $upload_dir.strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
     
        if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $server_url."/".$upload_name
              );
               
            $host = "localhost"; 
            $user = "root"; 
            $password = ""; 
            $dbname = "ecommerce_pro"; 
               
            $con = mysqli_connect($host, $user, $password,$dbname);  
 
            if (!$con) {
                die("Connection failed: " . mysqli_connect_error());
            }
 
            $sql = "insert into product (name, price, short_desc, long_desc, img) values ('$nme','$prc','$sdc','$ldc', '$upload_name')"; 
            mysqli_query($con,$sql);
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
    }
 
}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!"
    );
}
 
echo json_encode($response);
?>