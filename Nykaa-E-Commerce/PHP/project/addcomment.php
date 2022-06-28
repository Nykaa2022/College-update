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
 
            $sql = "insert into comments (comment, p_id, user) values ('$_GET[comment]','$_GET[pid]','$_GET[user]')"; 
            
            if(mysqli_query($con,$sql)){
                $response = array(
                    "status" => "ok",
                    "error" => false,
                    "message" => "Successfully Added"
                );
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error Occured!"
            );
        }
echo json_encode($response);
?>