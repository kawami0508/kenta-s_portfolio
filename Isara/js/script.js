$(function(){
  //ここにjQueryのコードを書きます
  	 var height=$("#header").height();
    $("body").css("margin-top", height + 10);//10px
    
	$('.answer-box').each(function(){
	    $(this).css("height",$(this).height()+"px");
	});
	$('.answer-box').hide();
	$('.question-box').click(function () {
	    $(this).next('.answer-box').slideToggle('slow');
	    $(this).toggleClass('active');
	});
	
	 var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
	
	var position = $("#contact").offset().top;
	$('#contact-btn').click(function(){
    $("html,body").animate({
        scrollTop : position
    }, {
        queue : false
    });
});

});


