
function addmp3(music_id,music_url,control_yes,img_play,img_pause,inp_css){
	//music_id 插入music元素的id
	//music_url 音乐地址
	//control_yes 是否显示控制器 1显示 0不显示  如果为0 后面两个可以不填
	//img_play 播放状态图标url
	//img_pause 暂停状态图标url
	//inp_css 控制按钮的top right left bottom height width 可为空
	music_box_id = music_id;
	$("body").append('<audio src="'+ music_url +'" id="'+ music_id +'" autoplay preload loop="loop"></audio>');	
	audioAutoPlay(music_id);
	
	var music_box = document.getElementById(music_id);
	if(control_yes == "1"){
		
		if(inp_css == null || inp_css == ""){
			inp_css ="right:.2rem; top:.2rem; width:.6rem; height:.6rem;"
		}
		$("body").append('<div id="control" style="position:absolute; z-index:9999;'+ inp_css +'">\
		<img style=" width:100%; display:none;" src="'+ img_play +'" />\
		<img style=" width:100%; display:none;" src="'+ img_pause +'" />\
		</div>');
		
		$("#control img").eq(0).fadeIn(500);
		$("#control").click(function(){
			if(music_box.paused){
				music_box.play();
				$("#control img").hide();
				$("#control img").eq(0).fadeIn();
			}else{
				music_box.pause();
				$("#control img").hide();
				$("#control img").eq(1).fadeIn();
			}	
		});	
	}else if(control_yes == "0"){
		$("#control").remove();
	}
}

function audioAutoPlay(id){  
    var audio = document.getElementById(id),  
        play = function(){  
            audio.play();  
            document.removeEventListener("touchstart",play, false);  
        };  
    audio.play();  
    document.addEventListener("WeixinJSBridgeReady", function () {  
        play();  
    }, false);  
    document.addEventListener('YixinJSBridgeReady', function() {  
        play();  
    }, false);  
    document.addEventListener("touchstart",play, false);  
}