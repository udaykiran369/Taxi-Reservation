<?php
$name=$_POST['name'];
$phone=$_POST['phone'];
$street=$_POST['street'];
$address=$_POST['address'];
$destination=$_POST['destination'];
$date=$_POST['date'];
$time=$_POST['time'];
$conn=new mysqli("localhost","root","","taxi");
if($conn->connect_error){
    die('connection failed'.$conn->connect_error);
}
else{
    $stmt=$conn->prepare("insert into reservation (name,phone,street,address,destination,date,time)
    values(?,?,?,?,?,?,?)");
    $stmt->bind_param("siissss",$name,$phone,$street,$address,$destination,$date,$time);
    $stmt->execute();
    header("Location:payment.html");
    $stmt->close();
    $conn->close();
}

?>