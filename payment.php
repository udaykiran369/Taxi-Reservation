<?php
$name=$_POST['name'];
$cardnumber=$_POST['cardnumber'];
$date=$_POST['date'];
$cvv=$_POST['cvv'];
$conn=new mysqli("localhost","root","","taxi");

if($conn->connect_error){
    die('connection failed'.$conn->connect_error);
}
else{
    $stmt=$conn->prepare("insert into payments(name,cardnumber,date,cvv)
    values(?,?,?,?)");
    $stmt->bind_param("sisi",$name,$cardnumber,$date,$cvv);
    $stmt->Execute();
    header("Location:index.html");
    $stmt->close();
    $conn->close();
}

?>