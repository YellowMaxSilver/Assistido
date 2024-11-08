var num_like = 0;
var num_deslike = 0;
var info_user_confirm = true;
var login_user = true;



function send_comment(){
 input = document.getElementById('input_comment')
 chat = input.value;

 var place = document.getElementById('others_comments');
 var ruan = document.createElement("p");
 ruan.innerHTML = `<div class="ao_user_comment">
                <img src='./images/icons/user_icon.png' class='user_img_box'>
                <div>
                <h5 class='name_channel'>Your user</h5>  
                <h6 class='text_comment'>`+chat+`</h6>
                </div></div>`
 place.append(ruan);
 input.value = '';             
}

function like_function(){
 if (login_user == true) {   
 likes = document.getElementById('likes')
 if (info_user_confirm == true){
    num_like ++;
    info_user_confirm = false;  
    likes.innerHTML = num_like+' likes';
 }else{
  window.alert('voja já curtiu o video')  
 } 
 }else{
  window.alert('você não tem uma conta logada');  
 }
}

function deslike_function(){
    if (login_user == true) {   
    deslikes = document.getElementById('deslikes')
    if (info_user_confirm == true){
       num_deslike ++;
       info_user_confirm = false;  
       deslikes.innerHTML = num_deslike+' deslikes';
    }else{
     window.alert('voja já curtiu o video')  
    } 
    }else{
    window.alert('você não tem uma conta logada');  
   }
}

var user_bar
var show = false;

function show_notification_box(){
  let section = document.getElementById('notification_section');

  let number = Math.random();

  let box = `<box class="notification_box" id='`+number+`'>
                <div class="close_notification_box" onclick="close_notification_box('`+number+`')"></div>
                <div class="notification_icon"></div>
                <div class="notification_text">
                  <h4 class="normal_text">
                    text etxt etxe t
                  </h4>
                </div>
              </box>`;

  let elemento = document.createElement("div");
  elemento.innerHTML = box;

  section.append(elemento);
}

function close_notification_box(self){
  let box = document.getElementById(self);
  box.style = `animation-name: hidden_box_notification;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;`;
}

function show_user_bar(){ 
 user_bar = document.getElementById('user_bar');
 user_bar.style = ` animation-name: show_user_bar;
 animation-duration: 0.5s;
 animation-fill-mode: forwards;`;
 show = true;
}

function hidden_user_bar(){ 
  user_bar = document.getElementById('user_bar');
  user_bar.style = `animation-name: hidden_user_bar;
 animation-duration: 0.5s;
 animation-fill-mode: forwards;`;
  show = true;
 }

function show_more(elem){
  bar = elem.querySelector('.show_more');
  bar.style = `animation-name: show_support_box;
 animation-duration: 0.3s;
 animation-fill-mode: forwards;display: block;`;
} 

function show_hidden(elem){
  elem.style = `animation-name: hidden_support_box;
 animation-duration: 0.2s;
 animation-fill-mode: forwards;`;
}

// function show_info(){
//  box = document.querySelector('.info_box');
//  box.style.opacity = "60%";
// }

// function hidden_info(){
//   box = document.querySelector('.info_box');
//   box.style.opacity = "0%";
//  }








//video_player
var player_video,view, timer;

var btn_play;

var hour, min, seg, current_hour, current_min, current_seg;

var interval_timer;

function prepare(elem){
 if(player_video != elem){
   player_video = elem;

   view = player_video.querySelector('.video_view')
   timer = player_video.querySelector('.video_time')

   interval_timer = setInterval(update_time, 100);
   btn_play = player_video.querySelector('.video_play');
   btn_play.addEventListener('click',play);


 } 

}

function play(){
 if(view.played.length != 0 && !view.paused){

  if(view.played.start(0)==0) {view.pause();btn_play.style.backgroundImage = "url('./images/icons/video_player/play_button.png')"}

 }else{  
 view.play();btn_play.style.backgroundImage = "url('./images/icons/video_player/pause_button.png')"; 
 }
}

function update_time(){
 
   //video duration
   hour = Math.floor(view.duration / 3600);
   min = Math.floor(view.duration / 60);
   seg = Math.floor(((view.duration / 60) %1) * 60);

  //current time
  current_hour = Math.floor(view.currentTime / 3600);
  current_min = Math.floor(view.currentTime / 60);
  current_seg = Math.floor(((view.currentTime / 60) %1) * 60);

  timer.innerHTML = converte_time(current_hour, current_min, current_seg) + ' | ' + converte_time(hour,min,seg);
}



function converte_time(horas,minutos,segundos){
 if(horas <10 && horas>0){
  horas = '0' + String(horas) + ':';
 }else{
   horas = '';
 }
 if(minutos<10){
   minutos = '0' + String(minutos);
 }else if(minutos > 59){
   minutos = minutos - (Math.floor(minutos / 60) * 60);
 }

 if(segundos < 10){
  segundos = '0' + String(segundos); 
 }
 return String(horas) + String(minutos) + ':' + String(segundos);
}