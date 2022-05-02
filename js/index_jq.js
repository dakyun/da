const sidemenu=$('header ul.right_nav>li');
const sections=$('.section');
const speed=600;

sidemenu.click(function(e){
    e.preventDefault();
    let target=$(this);
    let index=target.index();
    let section=$('.section').eq(index);
    let offset=section.offset().top;
    $('html,body').animate({scrollTop:offset},1000,'easeOutCirc')
})
const topmenu=$('header nav ul.gnb li');
topmenu.click(function(e){
    e.preventDefault();
    let target=$(this);
    let index=target.index();
    console.log(index);
    let section=$('.section').eq(index);
    let offset=section.offset().top;
    $('html,body').animate({scrollTop:offset},1000,'easeOutCirc')
})

//스크롤이벤트-gnb
$(window).on("scroll", function () {
	let scrollTop = $(window).scrollTop()
	sections.each(function (i) {
		if (scrollTop >= sections.eq(i).offset().top - speed) {
			$("header nav ul.gnb li").eq(i).addClass("active").siblings().removeClass("active");
		}
	})
    if (scrollTop >= sections.eq(2).offset().top - speed) {
        sections.eq(2).find(".infos_box").addClass("in");
        sections.eq(2).find(".mockups_box").addClass("in");
        sections.eq(2).find(".site_name").addClass("show");
    }
    if (scrollTop >= sections.eq(3).offset().top - speed) {
        $("header nav ul.gnb li").eq(2).addClass("active");
        sections.eq(3).find(".infos_box").addClass("in");
        sections.eq(3).find(".mockups_box").addClass("in");
        sections.eq(3).find(".site_name").addClass("show");
    }
    if (scrollTop >= sections.eq(4).offset().top - speed) {
        $("header nav ul.gnb li").eq(2).addClass("active");
        sections.eq(4).find(".infos_box").addClass("in");
        sections.eq(4).find(".mockups_box").addClass("in");
        sections.eq(4).find(".site_name").addClass("show");
    }
    if (scrollTop >= sections.eq(5).offset().top - speed) {
        $("header nav ul.gnb li").eq(2).addClass("active");
        sections.eq(5).find(".infos_box").addClass("in");
        sections.eq(5).find(".mockups_box").addClass("in");
        sections.eq(5).find(".site_name").addClass("show");
    }
    if (scrollTop >= sections.eq(6).offset().top - speed) {
        $("header nav ul.gnb li").eq(2).addClass("active");
        sections.eq(6).find(".infos_box").addClass("in");
        sections.eq(6).find(".mockups_box").addClass("in");
        sections.eq(6).find(".site_name").addClass("show");
    }
    if (scrollTop >= sections.eq(7).offset().top - speed) {
        $("header nav ul.gnb li").eq(2).addClass("active");
        sections.eq(7).find(".infos_box").addClass("in");
        sections.eq(7).find(".mockups_box").addClass("in");
        sections.eq(7).find(".site_name").addClass("show");
    }
    if (scrollTop >= sections.eq(8).offset().top - speed) {
        $("header nav ul.gnb li").eq(2).removeClass("active");
    }
})

//스크롤이벤트-사이드바
$(window).scroll(function(){
    let scrollTop=$(window).scrollTop();
    if(scrollTop>=$('#header').offset().top-500){
        $('ul.right_nav>li').eq(0).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#about').offset().top-500){
        $('ul.right_nav>li').eq(1).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#project1').offset().top-500){
        $('ul.right_nav>li').eq(2).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#project2').offset().top-500){
        $('ul.right_nav>li').eq(3).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#project3').offset().top-500){
        $('ul.right_nav>li').eq(4).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#project4').offset().top-500){
        $('ul.right_nav>li').eq(5).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#project5').offset().top-500){
        $('ul.right_nav>li').eq(6).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#project6').offset().top-500){
        $('ul.right_nav>li').eq(7).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#portfolio').offset().top-500){
        $('ul.right_nav>li').eq(8).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#contact').offset().top-500){
        $('ul.right_nav>li').eq(9).addClass('active').siblings().removeClass('active');
    }
})

/* 프로젝트 목업 스크롤 */
$('.hidden').hover(
    function(){
        let aHeight=$(this).innerHeight();
        let img=$(this).find('img');
        let imgHeight=img.innerHeight();
        img.stop().animate({top:aHeight-imgHeight},3500)
    },function(){
        let img = $(this).find("img")
        img.stop().animate({ top: 0 }, 1500);
})
$('.mockup_m').hover(
    function(){
        let aHeight=$(this).innerHeight();
        let img=$(this).find('img.m_img');
        let imgHeight=img.innerHeight();
        img.stop().animate({top:aHeight-imgHeight},3500)
    },function(){
        let img = $(this).find("img.m_img")
        img.stop().animate({ top: 0 }, 1500);
})
$('.hidden_tab').hover(
    function(){
        let aHeight=$(this).innerHeight();
        let img=$(this).find('img');
        let imgHeight=img.innerHeight();
        img.stop().animate({top:aHeight-imgHeight},3500)
    },function(){
        let img = $(this).find("img")
        img.stop().animate({ top: 0 }, 1500);
})

/* 스티키 헤더 */
var $mainHeader=$('.header_scroll'),
$window=$(window),
$divide=$mainHeader.outerHeight();

$window.scroll(function(){
    if($window.scrollTop()>$divide){
        if(!$mainHeader.hasClass('shrink')){
            $mainHeader.addClass('shrink')};
    }else{
        if($mainHeader.hasClass('shrink')){
            $mainHeader.removeClass('shrink')
        }
    }
});

/* typed */
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 70,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity,
    showCursor:false,
    backDelay: 1500,
});

/* 포트폴리오 탭 */
let tabWrapper=$('.tab_wrapper'), targetLink=tabWrapper.find('.tab_menu a'), tabContent=tabWrapper.find('#tab_content>div');
targetLink.each(function(i,e){
    let tg=$(this);
    let tgAnc=tg.attr('href');
    tg.click(function(e){
        e.preventDefault(); 
        targetLink.removeClass('active');
        tg.addClass('active');
        tabContent.hide();
        $(tgAnc).show();
    })
})
tabContent.eq(0).show();

/* skill counter animation */

$(function(){
    const charts=$('.charts'),chart=charts.find('.chart'),chartOST=chart.offset().top-600;

    $(window).scroll(function(){
        let currentSCT=$(this).scrollTop();
        if(currentSCT>=chartOST){
            if(!charts.hasClass('active')){
                animateChart();
                charts.addClass('active');
            };
        }
    })

    function animateChart(){
        chart.each(function(){
            let item=$(this),
            title=item.find('h3'), targetNum=title.attr('data-num'), circle=item.find('circle');
                
            $({rate:0}).animate({rate:targetNum},{
                duration:4000,
                progress:function(){
                    var now=this.rate;
                    let amount=450-(450*now/100);
                    title.text(Math.floor(now)+'%');
                    circle.css({strokeDashoffset:amount})
                },
            })
        })
    }
})


/* 그래픽 포트폴리오 모달창 */
var modal = $('#pf_modal'),
    modalThumb = $('.graphic_thumb a'),
    modalClose = modal.find('.close'),
    modalImg = modal.find('img');

modalThumb.each(function(){
    
    $(this).click(function(e){
        e.preventDefault();
        
        var showFull = $(this).find('img').attr('data-src');
        open(modal);
        modalImg.attr('src', showFull);
    });
});

    modalClose.click(function(e){
        e.preventDefault();
        close(modal);
    });

    modal.click(function(){
        close(modal);
    });


function open(el){
    el.removeClass('hidden');
}

function close(el){
    el.addClass('hidden');
}

// top 버튼
const btt=$('#back_to_top');
$(window).scroll(function(){
    if($(window).scrollTop() > 150){
        btt.addClass('visible')
    }else{
        btt.removeClass('visible')
    }
})
btt.click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},400)
})

