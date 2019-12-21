//開頭code動畫
$('body').ready(function() {
    $('#code').addClass('animated slideInLeft')
    $('#introduction').addClass('animated slideInRight')
});

//gotop點擊事件
$('#gotop').click(function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
//捲軸滑動事件
var scroll = $(window).scroll(function() {
    if (scroll.scrollTop() > $('#code').offset().top) {
        $('#gotop').css('display', 'block');
        $('#message_txt').addClass('animated rotateInDownLeft');
    } else {
        $('#gotop').css('display', 'none')
    };

    if (scroll.scrollTop() > $('#code').offset().top + 300) {
        $('#package_txt').addClass('animated rotateInDownRight');
    }
});


//圖片點擊事件(全版圖片)
var picscroll = 0;
$('#photo label').click(function() {
    $('#cover').css('transform', 'scale(1)')
    $('#covermain').fadeIn(2000)
})

$('#close').click(function() {
    $('#cover').css('transform', 'scale(0)')
    $('#covermain').fadeOut(500)
})

$('#right').click(function() {
    if (picscroll < 800) {
        picscroll += 100;
        $('.coverimg li').css('transform', `translateX(-${picscroll}%)`).css('transition', '0.5s')
    }
});

$('#left').click(function() {
    if (picscroll > 0) {
        picscroll -= 100;
        $('.coverimg li').css('transform', `translateX(-${picscroll}%)`).css('transition', '0.5s')
    }
});

//小圖點擊
$('#hoverimg_01').click(function() {
    picscroll = 0
    $('.coverimg li').css('transform', 'translateX(0%)').css('transition', '0s')
});
$('#hoverimg_02').click(function() {
    picscroll = 100
    $('.coverimg li').css('transform', 'translateX(-100%)').css('transition', '0s')
});
$('#hoverimg_03').click(function() {
    picscroll = 200
    $('.coverimg li').css('transform', 'translateX(-200%)').css('transition', '0s')
});
$('#hoverimg_04').click(function() {
    picscroll = 300
    $('.coverimg li').css('transform', 'translateX(-300%)').css('transition', '0s')
});
$('#hoverimg_05').click(function() {
    picscroll = 400
    $('.coverimg li').css('transform', 'translateX(-400%)').css('transition', '0s')
});
$('#hoverimg_06').click(function() {
    picscroll = 500
    $('.coverimg li').css('transform', 'translateX(-500%)').css('transition', '0s')
});
$('#hoverimg_07').click(function() {
    picscroll = 600
    $('.coverimg li').css('transform', 'translateX(-600%)').css('transition', '0s')
});
$('#hoverimg_08').click(function() {
    picscroll = 700
    $('.coverimg li').css('transform', 'translateX(-700%)').css('transition', '0s')
});
$('#hoverimg_08').click(function() {
    picscroll = 700
    $('.coverimg li').css('transform', 'translateX(-700%)').css('transition', '0s')
});
$('#hoverimg_09').click(function() {
    picscroll = 800
    $('.coverimg li').css('transform', 'translateX(-800%)').css('transition', '0s')
});