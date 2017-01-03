// JavaScript Document
$(document).ready(function(){
  $(".login li:last-child").css("margin-bottom","0");
  
  //文本点击换图片
  $(".login .tel").focus(function(){
    $(this).addClass("on"); 	
  });
  $(".login .tel").blur(function(){
    $(this).removeClass("on");
  });
  
  $(".login .pwd").focus(function(){
    $(this).addClass("on"); 	
  });
  $(".login .pwd").blur(function(){
    $(this).removeClass("on");
  });
  
  $(".ico01 input").focus(function(){
    $(".ico01").addClass("on"); 	
  });
  $(".ico01 input").blur(function(){
    $(".ico01").removeClass("on");
  });
  $(".ico02 input").focus(function(){
    $(".ico02").addClass("on"); 	
  });
  $(".ico02 input").blur(function(){
    $(".ico02").removeClass("on");
  });
  $(".ico03 input").focus(function(){
    $(".ico03").addClass("on"); 	
  });
  $(".ico03 input").blur(function(){
    $(".ico03").removeClass("on");
  });
  $(".ico04 input").focus(function(){
    $(".ico04").addClass("on"); 	
  });
  $(".ico04 input").blur(function(){
    $(".ico04").removeClass("on");
  });
  $(".ico05 input").focus(function(){
    $(".ico05").addClass("on"); 	
  });
  $(".ico05 input").blur(function(){
    $(".ico05").removeClass("on");
  });
  $(".ico06 input").focus(function(){
    $(".ico06").addClass("on"); 	
  });
  $(".ico06 input").blur(function(){
    $(".ico06").removeClass("on");
  });
  $(".ico07 input").focus(function(){
    $(".ico07").addClass("on"); 	
  });
  $(".ico07 input").blur(function(){
    $(".ico07").removeClass("on");
  });
  $(".ico08 input").focus(function(){
    $(".ico08").addClass("on"); 	
  });
  $(".ico08 input").blur(function(){
    $(".ico08").removeClass("on");
  });
  
  
  //注册用户协议选中
  $(".resiger .form01 span i").click(function(e){
    e.preventDefault();
	if($(this).hasClass("on")){
	  $(".resiger .form01 span i.on").removeClass("on")
	  $(".resiger .form01 span i input").attr("checked",false);
	}else{
	  $(this).addClass("on");
	  $(this).find("input").attr("checked",true);
	}
  });
  
  //有问必答弹窗关闭
  $(".close").click(function(){
    $(".box,.hover").hide();
  });
  
   //支付宝绑定成功
   $(".bound-alipay .form01 input").click(function(){
     $(".box,.hover").show();
   });
  
  $(".bound-alipay-success a").click(function(){
    $(".box,.hover").hide();
  });
  
  //申请调差
  $(".application-investigation .form01 input").click(function(){
    $(".box,.hover").show();
  });
  
  //经理人审核通过
  $(".active-type a").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(".active-type-list > ul").eq($(".active-type a").index(this)).show().siblings().hide();
  });
 
  //支付宝提现选中
  $(".bound-alipay .form02 a").click(function(){
    if($(".bound-alipay .form02 a").hasClass("on")){
	  $(".bound-alipay .form02 a").removeClass("on");
	  $(".bound-alipay .form02 a input").attr("checked",false);
	}else{
	  $(this).addClass("on");
	  $(this).find("input").attr("checked",true);
	}
  });
  
  //支付解绑成功
  $(".bound-alipay .unbundling").click(function(){
    $(".box,.hover").show();
	$(this).addClass("on");
  });
  
  //我的酬劳
  $(".active-type01 a").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(".income-expenditure > ul > li").eq($(".active-type01 a").index(this)).show().siblings().hide();
  });
  
  //分享
  $(".login-bgimg a.on").click(function(){
    $(".share-box,.hover").show(); 
  });
  $(".share-box div > a").click(function(){
    $(".share-box,.hover").hide();   
  });
  
  //登录上传图片
  $(".upudate-img").click(function(){
    $(".hover,.upload-img").show();  
  });
  $(".upload-img .esc").click(function(){
    $(".hover,.upload-img").hide();  
  });
  
  //联系我们
  $(".contain").click(function(){
    $(".hover01,.box01").show();  
  });
  $(".contain-box a").click(function(){
    $(".hover01,.contain-box").hide();  
  });
  $(".close01").click(function(){
    $(".box01,.hover01").hide();
  });
  
  //学生证上传
  $(".down img").click(function(){
    $(".down-info").slideToggle();
  });  
  
  //实名认证弹窗
  $(".submit").click(function(){
    $(".hover01,.box01").show();  
  });
  
  //我的推广
  $(".active-type02 a").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(".income-expenditure > ul > li").eq($(".active-type02 a").index(this)).show().siblings().hide();
  });
  
  //定位
  $(".close-btn").click(function(){
    $(".box,.hover").hide();
  });
  
  
  
  
});




//置底
$(window).bind("load", function(){
  var footerHeight = 0;
  var footerTop = 0;
  positionFooter();
  function positionFooter(){
    footerHeight = $("#footers").height();
    footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
    //如果页面内容高度小于屏幕高度，div#footer将绝对定位到屏幕底部，否则div#footer保留它的正常静态定位
    if(($(document.body).height()) < $(window).height()){
      $("#footers").css({ position:"absolute",left:"0" }).stop().css({top:footerTop});
    }else{
	  $("#footers").css({position:"static",left:"",top:""});
    }
  }
  $(window).scroll(positionFooter).resize(positionFooter);
});