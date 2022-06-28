<?php 
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

            $host = "localhost"; 
            $user = "root"; 
            $password = ""; 
            $dbname = "ecommerce_pro"; 
               
            $con = mysqli_connect($host, $user, $password,$dbname);  
 
            if (!$con) {
                die("Connection failed: " . mysqli_connect_error());
            }
 
            $sql = "SELECT * FROM login where username='$_GET[name]' and pass='$_GET[pass]' LIMIT  1"; 
            $result = mysqli_query($con,$sql);

            if(mysqli_num_rows($result) === 1 ){
                $response = array(
                    "status" => "ok",
                    "error" => false,
                    "message" => "Logged in Successfully!"
                );
                while($row = mysqli_fetch_assoc($result)) {
                    $response["type"] = $row["type"];
                }
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error Occured! Invalid value"
            );
        }
echo json_encode($response);
?>