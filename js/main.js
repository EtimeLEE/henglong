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

  // 	var mySwiper3 = new Swiper ('.caseList', {
	 //    loop: true,
	 //    // 如果需要分页器
	 //    pagination: '.swiper-pagination',
	 //    paginationClickable :true,
  // 	});

  // 	var mySwiper4 = new Swiper ('.caseDetail', {
	 //    loop: true,
	 //    // 如果需要分页器
	 //    pagination: '.swiper-pagination',
	 //    paginationClickable :true,
	 //    prevButton:'.swiper-button-prev',
		// nextButton:'.swiper-button-next',
  // 	});

	/* floatBar */
	$(".floatBar .item i").hover(function(){
		$(this).siblings(".box").show();
		$(this).css("color","#7a7a7a");
	},function(){
		$(this).siblings(".box").hide();
		$(this).css("color","#d0d0d0");
	});

	/* about */
	var aH = $(window).height() - 61;
	$(".about .wrap").height(aH);
	$(".about-box .btn a").first().addClass("active");
	$(".about-box .txt .item").first().show();
	$(".about-box .btn a").mouseenter(function(event) {
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent(".btn").next(".txt").find(".item").eq(index).show().siblings().hide();
	});

	/* contact */
	var cH = $(window).height() - 61;
	$(".contact").height(aH);


	/**** 手机端 ****/
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
});