<?php
    include('configure.php');
    $email = $_POST['email'];
    $password = $_POST['password'];

    $res = $conn->query("select nick, email, user_password from user_account where email = '{$email}' && user_password = '{$password}';");
    $num_row = $res->num_rows;

    if($num_row == 1){
        echo "ok_account";
        $row = $res->fetch_object();
        $nick = $row->nick;
        setcookie('account',$nick,time() + 6000);
        echo $nick;
    }elseif($num_row < 0){
        echo "no_account";
    }elseif($num_row > 1){
        echo "error";
    }
?>