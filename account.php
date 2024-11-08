<?php
    include('configure.php');
    $user_nick = $_GET['user'];

    $res_account = $conn->query("select * from user_account where nick = '{$user_nick}';");
    $num_row_account = $res_account->num_rows;

    if($num_row_account == 1){
        $row = $res_account->fetch_object();
        $user_name = $row->user_name;
        $nick = $row->nick;
    }else{
        die("you have error");
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="user_style.css">
    <title>Document</title>
    <script src="script.js"></script>
</head>
<body>
    <!-- official -->
    <ul id="top_bar">  
        <li><h2>Assistido</h2></li>
      </ul>
  
      <ul id="nav_bar">
      <li><div><h3>Inicio</h3></div></li>
      <li><div><h3>Faca</h3></div></li>
      <li><div><h3>Hello</h3></div></li>
      <li><input id='search_bar' type="search" placeholder="search" autocomplete="off" style="outline: none;"><button>search</button></li> 
      </ul>
  
      <ul class="user_bar" id="user_bar" onclick="show_user_bar()" onmouseleave="hidden_user_bar()">
       <li><img class='user_img'src="./images/icons/user_icon.png"><li>
      </ul>
      <!-- official -->

      <div class="all_thing">
        <div class="account_self_bar">
            <div class="contents_account">
                <div class="account_img_self" style="margin-left: 50px;"></div>

                <div class="account_info">
                    <h3 class="normal_text"><?php echo $user_name?></h3>
                    <div style="display: flex;align-items: center;">
                        <h4 class="normal_text"><?php echo $nick?></h4>
                        <p class="normal_text" style="margin-left: 10px;margin-right: 10px;">•</p>
                        <h5 class="normal_text">0 followes</h5>
                    </div>
                </div>

                <button class="account_follow_but">Follow</button>
            </div>
        </div>

        <ul class="account_sections">
           <li><h3 class="normal_text">Home</h3></li> 
           <li><h3 class="normal_text">Videos</h3></li>
           <li><h3 class="normal_text">Posts</h3></li>
           <li><h3 class="normal_text">About me</h3></li>
        </ul>

      </div>
</body>
</html>