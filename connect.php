<?php
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];


//database connection
$conn=new mysqli("localhost","root","","taxi");
if($conn->connect_error){
    die('connection failed'.$conn->connect_error);
}
else{
    $stmt=$conn->prepare("insert into login(name,email,password)
    values(?,?,?)");
    $stmt->bind_param("sss",$name,$email,$password);
    $stmt->execute();
    header("Location:login.html");
    $stmt->close();
    $conn->close();
}
?>