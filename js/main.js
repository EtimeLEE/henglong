/**
 * @authors Logan
 * @date    2016-12-20 07:47:52
 * @version 1.0
 */

function addClass(cls){
	var minH = $(window).height()*0.5;
	var t = $(cls).offset().top;
	var top = $(window).scrollTop();

	if(top>t-minH){
		$(cls).addClass("on");
	}
}

$(function() {
	var ww = $(".banner").width();
	console.log(ww);
	// banner
	var mySwiper1 = new Swiper ('.banner', {
	    // direction: 'vertical',
	    loop: true,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    paginationClickable :true,
	    autoplay: 5000,
  	});

  	var mySwiper2 = new Swiper ('.s4list', {
	    loop: true,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    paginationClickable :true,
	    // autoplay: 5000,
  	});

	/* floatBar */
	$(".floatBar .item").hover(function(){
		$(this).find(".box").show();
		$(this).find("i").css("color","#7a7a7a");
	},function(){
		$(this).find(".box").hide();
		$(this).find("i").css("color","#d0d0d0");
	});

	/* about */
	$(".about-box .btn a").first().addClass("active");
	$(".about-box .txt .item").first().show();
	$(".about-box .btn a").mouseenter(function(event) {
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent(".btn").next(".txt").find(".item").eq(index).show().siblings().hide();
	});

	/* contact */


	/**** 手机端 ****/

    if($(window).width() < 640){
    	$(".nav-btn").click(function (event) {
	        event.stopPropagation();
	        $(".nav ul").toggle();
	    });
	    $(document).click(function () {
	        $(".nav ul").hide();
	    });
	    $(".nav ul").click(function (event) {
	        event.stopPropagation();
	    });
    	
  //   	var pH = $(window).height() - 45;
		// $(".about .wrap").height(pH);

    	$(".section2 .s2list li").click(function(){
    		$(this).addClass("active").siblings().removeClass("active");
    	});
    }else{
    	var dH = $(window).height() - 61;
		$(".about .wrap").height(dH);
		$(".contact").height(dH);
    }
});