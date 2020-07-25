$(function() {
  var h = $(window).height();
  
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
  
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});
  
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});
  
function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}

$(function(){
	$('.site').click(function () {
	    $('.open-1').toggleClass('active');
	    $(this).toggleClass('on');
	    $(this).toggleClass('move-1');
	});
});


function fadeinEvent() {
    // getElementsByClassName で、fadein-x-left のクラスを持つ要素を取得し配列として保持
    var fadeinXClass= Array.prototype.slice.call(document.getElementsByClassName("fadein-x-left"));
    // getElementsByClassName で、fadein-x-right のクラスを持つ要素を取得し配列として保持
    var fadeinXRClass= Array.prototype.slice.call(document.getElementsByClassName("fadein-x-right"));

    // 先に取得した二つの配列を一つの配列にする
    Array.prototype.push.apply(fadeinXClass, fadeinXRClass);

    // 配列の数だけ処理を行う
    fadeinXClass.forEach(function( element ) {

        // getBoundingClientRect で要素の位置や幅や高さなどを取得
        var boundingClientRect = element.getBoundingClientRect();

        // スクロールの位置情報（html のスクロールがなければ、body のスクロール）を取得
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;

        // ブラウザウィンドウの ビューポートの高さ
        var windowHeight = window.innerHeight;

        // スクロールの位置が、フェードインしたい要素の位置にいるかどうか判定する
        if (scroll > scroll + boundingClientRect.top - windowHeight + 200){

            // 要素を表示する場合は、要素の透明度を無くし、X方向の移動距離を無くす。これで表示される
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
        }
    });
}

// 画面がロードされたときに行う処理を記載
window.onload = function(){
    // 画面が中途半端なスクロール位置でリロードされても表示するべきものが表示されるようにするため、ロードですぐに呼び出す
    fadeinEvent();

    // スクロールしたら動くエベントとして用意しておく。スクロールするたびに動くようにする
    window.addEventListener('scroll', fadeinEvent, false);
}

$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
