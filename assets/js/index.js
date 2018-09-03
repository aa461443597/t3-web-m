var alert_id = "alert_box";
var pageURL= window.location.href;//获取url
var pageLocation= window.location.host;//获取域名

var win_w = $(window).width();
var win_h = $(window).height();

function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	var win_width = $(window).width();

	if (!bIsIphoneOs && !bIsMidp && !bIsUc7 && !bIsUc && !bIsAndroid && !bIsCE && !bIsWM && win_width > 1024) {
		$("html").css("font-size","100px");
		$("html").css("max-width","640px");
		$("html").css("margin","0 auto");
	} else{
		var size = $(window).width()/6.4;
		$("html").css("font-size",size);
	}
}
browserRedirect();

/////////////////////////顶部导航 about////////////////////////////
function t3Nav(type) {
    if(type == "home"){
    $("body").append(`
        <nav class="p_nav">
            <span class=""><img src="assets/img/inco_nav.png" /></span>
            <span class="hidden op0"><img src="assets/img/inco_nav_x.png" /></span>
            <ul style="display:none;">
                <li onclick="gopage('index.html')">
                    <em>关于 T3 Group </em>
                    <small>About us</small>
                </li>
                <li onclick="gopage('project.html')">
                    <em>项目介绍</em>
                    <small>Project Introduction</small>
                </li>
                <li onclick="gopage('team.html')">
                    <em>团队介绍</em>
                    <small>Teamwork</small>
                </li>
                <li onclick="gopage('friend.html')">
                    <em>合作客户</em>
                    <small>Cooperative Partner</small>
                </li>
            </ul>
        </nav>
    `);
    }else if(type == "pro"){
        $("body").append(`
        <nav class="p_nav">
            <span class=""><img src="assets/img/inco_nav.png" /></span>
            <span class="hidden op0"><img src="assets/img/inco_nav_x.png" /></span>
            <ul style="display:none;">
                <li onclick="gopage('index.html')">
                    <em> 品牌公关服务</em>
                    <small>About us</small>
                </li>
                <li onclick="gopage('project.html')">
                    <em>媒体整合推广服务</em>
                    <small>Project Introduction</small>
                </li>
                <li onclick="gopage('team.html')">
                    <em>新零售实验室</em>
                    <small>Teamwork</small>
                </li>
                <small onclick="gopage('project.html')">返回上一级</small>
            </ul>
        </nav>
        `);
    }

    $(".p_nav span").eq(0).click(function(){//菜单显示
        $(".p_nav ul").show(function(){
            $(".p_nav ul").removeClass().addClass("animated fadeInDown op1");
        });
        $(".p_nav span").removeClass();
        $(".p_nav span").eq(0).addClass("animated5 fadeOutDown");
        $(".p_nav span").eq(1).addClass("animated5 fadeInDown op1");
    });
    $(".p_nav span").eq(1).click(function(){//菜单隐藏
        $(".p_nav ul").removeClass().addClass("animated5 fadeOutUp op0").css("display","flex");

        $(".p_nav span").removeClass();
        $(".p_nav span").eq(0).addClass("animated5 fadeInUp op1");
        $(".p_nav span").eq(1).addClass("animated5 fadeOutUp op0");
    });
}

///////////////////////////↓↓↓↓↓弹出框↓↓↓↓↓//////////////////////////

var alert2 = function(tit,tit_color,text,but21,but22,callback21,callback22){//双按钮提示框 按钮跳转传函数给callback21,callback22   closeAlert是关闭弹出框
	$("body").append('<div id="alert_black"></div>');	
	$("body").append('<div id="'+ alert_id +'"><h2 class="'+ tit_color +'">'+ tit +'</h2><p>'+ text +'</p><ul><li class="li1" id="but21">'+ but21 +'</li><li class="li2" id="but22">'+ but22 +'</li></ul>');
	$("#alert_black").fadeIn();
	$("#alert_black").css("height",$(window).height());
	$("#"+ alert_id).fadeIn();
	$("#alert_black").click(function(){
		$("#alert_black").fadeOut().remove();
		$("#"+ alert_id).fadeOut().remove();
	});	
	$("#but21").click(function(){
		callback21.call();
	});
	$("#but22").click(function(){
		callback22.call();
	});
}	
//alert22('标题','提示内容','按钮1名称','按钮2名称',按钮1触发事件,按钮2触发事件);
var alert1 = function(tit,tit_color,text,but11,callback11){//双按钮提示框 按钮跳转传函数给callback21 closeAlert是关闭弹出框

	$("body").append('<div id="alert_black"></div>');	
	$("body").append('<div id="'+ alert_id +'"><h2 class="'+ tit_color +'">'+ tit +'</h2><p>'+ text +'</p><ul><li class="li11" id="but11">'+ but11 +'</li></ul>');
	$("#alert_black").fadeIn();
	$("#alert_black").css("height",$(window).height());
	$("#"+ alert_id).fadeIn();
	$("#alert_black").click(function(){
		$("#alert_black").fadeOut().remove();
		$("#"+ alert_id).fadeOut().remove();
	});	
	$("#but11").click(function(){
		callback11.call();
	});
}	
//alert1('标题','提示内容','按钮名称',按钮触发事件);')

var closeAlert = function(){//关闭提示框
	$("#alert_black").fadeOut().remove();
	$("#"+ alert_id).fadeOut().remove();
}
///////////////////////////↑↑↑↑↑弹出框↑↑↑↑↑//////////////////////////

/*loading*/
var loadAnimation = function(){//载入动画
	//$("body").append('<div id="logo_load"><div class="logo_load"><img src="http://www.schneider-electric.com.hk/gc_1_0/images/structure/ajax-loader.gif" /><p>Loading</p></div></div>');
	$("body").append('<div id="logo_load"><div class="logo_load"><div class="spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div></div>');
	$("#logo_load").show();
	$("#logo_load").css("height",$(window).height());
}	
var loadClose = function(){//关闭动画
	//$(".caseRouge").hide();
	$("#logo_load").hide();
	$("#logo_load").remove();
}

//获取当前地址的参数值
//例： var name = decodeURI(getUrlVars().name);
//例： var name = getUrlVars().name;
function getUrlVars(){ 
    var vars = [], hash; 
    var hashes = window.location.href.slice(window.location.href.indexOf('?')+1).split('&'); 
    for(var i = 0; i < hashes.length; i++) { 
        hash = hashes[i].split('='); 
        vars.push(hash[0]); 
        vars[hash[0]] = hash[1]; 
    } 
    return vars; 
} 

//请求出错时候的处理
function complete_tips(){
	loadClose();
	//超时,status还有success,error等值的情况
	if(status=='timeout'){
		alert1('提示','color1','系统繁忙，请稍后重试！','确定',closeAlert);
	//请求错误
	}else if(status=='error'){
		alert1('提示','color1','系统繁忙，请稍后重试！','确定',closeAlert);
	}	
}

//下拉选择框
function dd_list(id,tit,text,callback){
	/*
	 id:写入弹出框的id，tit:弹出标题，text:弹出内容的数组，callback回调函数用语接收id和text
	 function callback(id,text){
	 $("#res_style span").html(text+"--"+id);
	 }
	 text举例：var dd_list_text = [{"id":"a","text":"aaaaaaaa"},{"id":"b","text":"bbbbbbbbbbbb"}];
	 dd_list("choose_box","请选择",dd_list_text,"callback");

	 如果需要三个参数就直接传 var dd_list_text = [{"id":"a","text":"aaaaaaaa","name":"11111"},{"id":"b","text":"bbbbbbbbbbbb","name":"22222"}]; 回调直接接收callback(id,text,three)
	 */

    $("body").append('<div id="'+ id +'" class="dd_list"><h3>title</h3><ul></ul><p>关闭</p></div><div id="maskblack"></div>');

    $("#maskblack").fadeIn();

    $.each( text, function(index, content){
        if(content.name != null && content.name != ""){
            $("#"+id+" ul").append('<li name="'+ content.name +'" id="'+content.id+'" onclick='+callback+'("'+content.id+'","'+content.text+'","'+ content.name +'")>'+content.text+'</li>');
        }else{
            $("#"+id+" ul").append('<li id="'+content.id+'" onclick='+callback+'("'+content.id+'","'+content.text+'")>'+content.text+'</li>');
        }
    });

    //弹出框高度，标题高度，关闭条高度，页面头条高度，页面底部高度，内容显示高度，未超出高度范围的top，超出高度范围的top
    var box_h = $("#"+id).height();
    var h3_h = $("#"+id+" h3").height();
    var p_h = $("#"+id+" p").height();
    var top_h = $("header").height();
    var bot_h = $("footer").height();
    var body_h = win_h-top_h-bot_h-h3_h-p_h-50;
    var top_pos = (win_h-box_h)/2;
    var top_pos_srcoll = top_h+25;

    if(box_h > body_h){
        $("#"+id+" ul").css({"height":body_h});
        $("#"+id).css({"top":top_pos_srcoll});
    }else{
        $("#"+id+" ul").css({"height":"auto"});
        $("#"+id).css({"top":top_pos});
    }

    $("#"+id+" h3").html(tit);
    $("#"+id).fadeIn(function(){
        $("#"+id+" p").click(function(){
            $("#"+id+",#maskblack").fadeOut(function(){
                $("#"+id+",#maskblack").remove();
            });
        });
    });

    $("#"+id+" ul li").click(function(){
        $("#"+id+",#maskblack").fadeOut(function(){
            $("#"+id+",#maskblack").remove();
        });
    });
}


function gopage(page){
    window.location.href= page;
}

//时间格式 输出为 2016-00-00 00:00:00的string格式
var diy_time = function(){
    new_time =new Date();
    //var y = 2016; //year
    var y = new_time.getFullYear(); //year
    var m = new_time.getMonth()+1; //month
    var d = new_time.getDate(); //day
    var h = new_time.getHours(); //hour
    var f = new_time.getMinutes(); //minute
    var s = new_time.getSeconds();
    m = m.toString();
    d = d.toString();
    h = h.toString();
    f = f.toString();
    s = s.toString();
    if(m.length==1){m="0"+m;}
    if(d.length==1){d="0"+d;}
    if(h.length==1){h="0"+h;}
    if(f.length==1){f="0"+f;}
    if(s.length==1){s="0"+s;}
    var new_timer = y+"-"+m+"-"+d+" "+h+":"+f+":"+s;
    return new_timer;
};

//时间格式 输出为 yyyymmddhhffss格式
var diy_time_ymd = function(){
    new_time =new Date();
    //var y = 2016; //year
    var y = new_time.getFullYear(); //year
    var m = new_time.getMonth()+1; //month
    var d = new_time.getDate(); //day
    var h = new_time.getHours(); //hour
    var f = new_time.getMinutes(); //minute
    var s = new_time.getSeconds();
    m = m.toString();
    d = d.toString();
    h = h.toString();
    f = f.toString();
    s = s.toString();
    if(m.length==1){m="0"+m;}
    if(d.length==1){d="0"+d;}
    if(h.length==1){h="0"+h;}
    if(f.length==1){f="0"+f;}
    if(s.length==1){s="0"+s;}
    var new_timer = y+""+m+""+d+""+h+""+f+""+s;
    return new_timer;
};

//tips
function tips(text,time){
	/*
	text:tips的文字
	time：tips多久后消失
	例：tips("tips",2000);
	*/
	if($("#tips").length>0){
		$("#tips").remove();
	}
	$("body").append('<em id="tips">'+text+'</em>');
	$("#tips").fadeIn();
	var tips_w = $("#tips").width()+20;
	var tips_left = (win_w-tips_w)/2;
	var tips_left = (win_w-tips_w)/2;
	
	setTimeout(tips_out,time);
}
function tips_out(){
	$("#tips").fadeOut(function(){
		$("#tips").remove();
	});
}

/*生成随机数
生成3-32位随机串：randomWord(1,true, 3, 32)
生成43位随机串：randomWord(2,false, 43)
type  1：数字  2：小写字母  3：大写字母  4：数字加小写字母  5：数字加大写字母  6：大小写字母  7：数字加大小写字母
*/
function randomWord(type,randomFlag, min, max){
    var str = "",
        range = min,
        arr;
    if(type == 1){
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    }else if(type == 2){
        arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    }else if(type == 3){
            arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }else if(type == 4){
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    }else if(type == 5){
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }else if(type == 6){
        arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }else if(type == 7){
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

//调用getStrLenght函数，第一个参数传入字符串，第二个参数传入验证的长度，如果在验证长度的范围之内返回true，否则返回false。
function getStrLenght(message,MaxLenght) {
    var strlenght = 0; //初始定义长度为0
    var txtval = $.trim(message);
    for (var i = 0; i < txtval.length; i++) {
        if (isCN(txtval.charAt(i)) == true) {
            strlenght = strlenght + 2; //中文为2个字符
        } else {
            strlenght = strlenght + 1; //英文一个字符
        }
    }
    return strlenght > MaxLenght ? false : true;
}
 
 function isCN(str) { //判断是不是中文
    var regexCh = /[u00-uff]/;
    return !regexCh .test(str);
}