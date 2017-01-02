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
  
});

var adaptive = {};
(function (win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    // 设备像素比
    var devicePixelRatio = win.devicePixelRatio;
    // 我们设置的布局视口与理想视口的像素比
    var dpr = 1; 
    // viewport缩放值
    var scale = 1; 
    // 设置viewport
    function setViewport() {
        // 判断IOS
        var isIPhone = /iphone/gi.test(win.navigator.appVersion);
        if (lib.scaleType === 2 && isIPhone || lib.scaleType === 3) {
            dpr = devicePixelRatio;
        }
        // window对象上增加一个属性，提供对外的布局视口与理想视口的值
        win.devicePixelRatioValue = dpr;
        
        // viewport缩放值，布局视口缩放后刚好显示成理想视口的宽度，页面就不会过长或过短了
        scale = 1 / dpr;
        // 获取已有的viewport
        var hasMetaEl = doc.querySelector('meta[name="viewport"]');
        var metaStr = 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no';
        if (dpr === 1) {
            metaStr = 'width=device-width, '.concat(metaStr);
        }
//UI-width / device-width * window.devicePixelRatio * 160;
        if (!isIPhone && dpr !== 1) {
          metaStr = metaStr.concat(', target-densitydpi='+lib.desinWidth/win.screen.width * win.devicePixelRatio * 160);
        }
        // 如果有，改变之
        if (hasMetaEl) {
            hasMetaEl.setAttribute('content', metaStr);
        }
        // 如果没有，添加之
        else {
            var metaEl = doc.createElement('meta');
            metaEl.setAttribute('name', 'viewport');
            metaEl.setAttribute('content', metaStr);
            
            if (docEl.firstElementChild) {
                docEl.firstElementChild.appendChild(metaEl);
            }
            else {
                var containDiv = doc.createElement('div');
                containDiv.appendChild(metaEl);
                docEl.appendChild(containDiv);
            }
        }
    }
    
    var newBase = 100;
    lib.errDpr = 1;

    function setRem() {
        // 布局视口
        // var layoutView = docEl.clientWidth; 也可以 获取布局视口的宽度
        var layoutView;
        if (lib.maxWidth) {
            layoutView = Math.min(docEl.getBoundingClientRect().width, lib.maxWidth * dpr);
        }
        else {
            layoutView = docEl.getBoundingClientRect().width;
        }
        // 为了计算方便，我们规定 1rem === 100px设计图像素，我们切图的时候就能快速转换
        // 有人问，为什么不让1rem === 1px设计像素呢？
        // 设计图一般是640或者750px
        // 布局视口一般是320到1440
        // 计算一个值，使layout的总宽度为 (desinWidth/100) rem
        // 那么有计算公式：layoutView / newBase = desinWidth / 100
        // newBase = 100 * layoutView / desinWidth
        // newBase = 介于50到200之间
        // 如果 1rem === 1px 设计像素，newBase就介于0.5到2之间，由于很多浏览器有最小12px限制，这个时候就不能自适应了
        newBase = 100 * layoutView / lib.desinWidth * (lib.errDpr || 1);
        docEl.style.fontSize = newBase + 'px';
        // rem基准值改变后，手动reflow一下，避免旋转手机后页面自适应问题
        doc.body&&(doc.body.style.fontSize = lib.baseFont / 100 + 'rem');
        // 重新设置rem后的回调方法
        lib.setRemCallback&&lib.setRemCallback();
        lib.newBase = newBase;
    }
    var tid;
    lib.desinWidth = 750;
    lib.scaleType = 1;
    lib.baseFont = 28;
    // 局部刷新的时候部分chrome版本字体过大的问题
    lib.reflow = function() {
        docEl.clientWidth;
    };
    // 检查安卓下rem值是否显示正确
    function checkRem() {
        if (/android/ig.test(window.navigator.appVersion)) {
            var hideDiv = document.createElement('p');
            hideDiv.style.height = '1px';
            hideDiv.style.width = '2.5rem';
            hideDiv.style.visibility = 'hidden';
            document.body.appendChild(hideDiv);
            var now = hideDiv.offsetWidth;
            var right = window.adaptive.newBase * 2.5; 
            if (Math.abs(right / now - 1) > 0.05) {
                lib.errDpr = right / now;
                setRem();
            }
            document.body.removeChild(hideDiv);
        }
    }
    lib.init = function () {
        // resize的时候重新设置rem基准值
        // 触发orientationchange 事件时也会触发resize，故不需要再添加此事件了
        win.addEventListener('resize', function () {
            clearTimeout(tid);
            tid = setTimeout(setRem, 300);
        }, false);
        // 浏览器缓存中读取时也需要重新设置rem基准值
        win.addEventListener('pageshow', function (e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(setRem, 300);
            }
        }, false);
        // 设置body上的字体大小
        if (doc.readyState === 'complete') {
            doc.body.style.fontSize = lib.baseFont / 100 + 'rem';
            checkRem();
        }
        else {
            doc.addEventListener('DOMContentLoaded', function (e) {
                doc.body.style.fontSize = lib.baseFont / 100 + 'rem';
                checkRem();
            }, false);
        }
        setViewport();
        // 设置rem值
        setRem();
        // html节点设置布局视口与理想视口的像素比
        docEl.setAttribute('data-dpr', dpr);
    };
    // 有些html元素只能以px为单位，所以需要提供一个接口，把rem单位换算成px
    lib.remToPx = function (remValue) {
        return remValue * newBase;
    };
    
    
      function calcHW(){
	   var widths = $(".get-code").width();
	   $(".get-code input").css({"width":widths-184});
	  }
	  calcHW();
	  $(win).resize(function() {
		calcHW();
	  });
    
    
})(window, adaptive);
if (typeof module != 'undefined' && module.exports) {
    module.exports = adaptive;
} else if (typeof define == 'function' && define.amd) {
    define(function() {
        return adaptive;
    });
} else {
    window.adaptive = adaptive;
}
window['adaptive'].desinWidth = 750;// 设计图宽度 
window['adaptive'].baseFont = 28;// 没有缩放时的字体大小 
window['adaptive'].remToPx(1)
window['adaptive'].scaleType = 3
window['adaptive'].init();// 调用初始化方法

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


