var teste = {name:'antegeddon',channel:'ed_zilla',link:'movies.html'}

var teste_html = `<div class="movie_box">
    <a href="`+teste.link+`">  
      <img class='banner_video' src="./images/icons/banner_icon.jpg">    
      <div class="text_movie_box"><p class="movie_name normal_text">`+teste.name+`</p>
        <div class="channel_bar">
          <img class="user_img_box" src="./images/icons/user_icon.png" style="margin-right: 10px;margin-left: 10px;">
          <h5 class="normal_text">`+teste.channel+`</h5>     
          <h6 class="normal_text" style="margin-left: 15px;">000 views</h6>
        </div>
      </div>
    </a>
</div>`;

function meta(){
var body_found = document.getElementById('videos_section');
var ruan = document.createElement('div')
ruan.innerHTML = teste_html;

body_found.append(ruan)
}
