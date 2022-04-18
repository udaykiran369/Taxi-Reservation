<?php
$conn=new mysqli("localhost","root","","taxi");
if($conn->connect_error){
    die('connection failed'.$conn->connect_error);
}
$email=$_GET['email'];
$password=$_GET['password'];
$sql = "select *from login where email = '$email' and password='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  //output data of each row
  header("location:booking.html");
}
else{
  header("location:login.html");  
}
?>