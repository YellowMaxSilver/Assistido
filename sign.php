<?php
include('configure.php');

$nick_name = $_POST['nick_name'];
$user_name = $_POST['user_name'];
$email = $_POST['email'];
$password = $_POST['password'];

$nick_verif = false;
$email_verif = false;


//verfi if exist
$res1 = $conn->query("select nick from user_account where nick = '{$nick_name}'");
$nick_num_row = $res1->num_rows;

$res2 = $conn->query("select email from user_account where email = '{$email}'");
$email_num_row = $res2->num_rows;

if($nick_num_row > 0){
    echo 'nick_veri_false';
}elseif($nick_num_row == 0){
    $nick_verif = true;
}

if($email_num_row > 0){
    echo 'email_veri_false';
}elseif($nick_num_row == 0){
    $email_verif = true;
}




if($nick_verif == true && $email_verif == true){

$sql = "insert into user_account(nick,user_name,email,user_password)
value('{$nick_name}','{$user_name}','{$email}','{$password}')";

$res = $conn->query($sql);

setcookie('account',$nick_name,time() + 6000);

}



?>