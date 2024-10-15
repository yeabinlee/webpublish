$(document).ready(function(){
    // // =========== intro 영역 ============
    // new Typed('#animatingStr', {
    //     stringsElement: '#typedStr',
    //     typeSpeed: 50,
    // });

    // // 스크롤 비활성화
    // function noScroll() {
    //     document.body.style.overflow = 'hidden';
    // }

    // // 스크롤 활성화
    // function yesScroll() {
    //     document.body.style.overflow = 'auto';
    // }

    // // 애니메이션 실행
    // noScroll(); // 애니메이션 시작 전에 스크롤 비활성화

    // TweenMax.to("#loader", 2, {
    //     delay: 3.5, // 애니메이션 시작 전 지연 시간
    //     top: "-100%",
    //     ease: Expo.easeInOut,
    //     onComplete: yesScroll // 애니메이션 완료 시 스크롤 활성화
    // });



    // =========== header 영역 ============
    const mobileBtn = $(".menu-btn")
    const navMobile = $(".menu")
    const contents = $(".section")
  
    // menu-btn 클릭 시
    mobileBtn.on("click",function(e){ 
        e.preventDefault(); 
        let tmp = $(this).hasClass("active")
        if(tmp) { 
            $(this).removeClass("active")
            navMobile.removeClass("active")
        }else {
            $(this).addClass("active")
            navMobile.addClass("active")
        }
    })
  
    // menu-btn 클릭시 해당메뉴섹션으로 스크롤되어이동
    const menu = $(".menu ul li")
    menu.click(function(e){
        e.preventDefault();
         // 메뉴 항목 클릭 시 메뉴 닫기
        mobileBtn.removeClass("active");
        navMobile.removeClass("active");
        
        let idx = $(this).index();
        console.log(idx);
        let $section = contents.eq(idx);
        let sectionDistance = $section.offset().top;
        $('html, body').animate({
            scrollTop: sectionDistance
        },500);
    });
    // 윈도우를 스크롤할때
    $(window).scroll($.throttle(1000/20,function(){
      contents.each(function(){
          if($(this).offset().top <= $(window).scrollTop()) {
              let idx = $(this).index(); 
              menu.removeClass("active")
              menu.eq(idx).addClass("active")
          }
      })
    }))
    
    // ===================================== go-top 버튼
    const gotop = $('#go-top');
    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        gotop.addClass('show');
    } else {
        gotop.removeClass('show');
    }
    });
    gotop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

    //===================================== profil
    function progressBar(id,percent){
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 3,
            easing: 'easeInOut',
            duration: 1400,
            color: '#ffdd1b',
            trailColor: '#eee',
            trailWidth: 3,
            // svgStyle: {width: '100%', height: '100%'},
            text: {
                style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '0',            
                },
                autoStyleContainer: false,
            },
            from: {color: 'rgb(188, 57, 11)'},
            to: {color: 'rgb(184, 134, 11)'},
            step: (state, bar) => { 
                bar.setText(Math.round(bar.value() * 100) + ' %');
                // 그라데이션 스타일 
                bar.path.setAttribute("stroke", state.color);
            }
        })
        // 애니메이션 수치 - 0.8이면 80%
        // bar.animate(0.85);
        bar.animate(percent)
    }
    progressBar(html,0.85)
    progressBar(css,0.85)
    progressBar(js,0.7)
    progressBar(ps,0.75)
    progressBar(ai,0.75)
    progressBar(of,0.85)
    //===================================== work
    // work-contents work-content01
    // work-contents 
    const contentsTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".work-wrap",
            scrub: 0,
            start: "0 0",
            end: "100% 100%",
            // markers:true,
        }
    });
    contentsTl
    .to('.work-wrap .work-content02',{ transform: 'translateY(0)'},"a+=0.1")
    .to('.work-wrap .work-content02',{ width:'100%'},"a")
    .to('.work-wrap .work-content01 .img-wrap',{opacity:0},"a+=0.1")
    
    .to('.work-wrap .work-content03',{ transform: 'translateY(0)'},"b")
    .to('.work-wrap .work-content03',{ width:'100%'},"b")
    .to('.work-wrap .work-content02 .img-wrap',{opacity:0},"b-=0.1")
    
    .to('.work-wrap .work-content04',{ transform: 'translateY(0)'},"c")
    .to('.work-wrap .work-content04',{ width:'100%'},"c")
    .to('.work-wrap .work-content03 .img-wrap',{opacity:0},"c-=0.1")
    
    
    //work-contents 마지막 스크롤
    gsap.to('.work-wrap .work-content04 .img-wrap',{
        scrollTrigger:{
            trigger:'.work-wrap',
            start:"100% 100%",
            end:"103% 100%",
            scrub:0,
        },
        opacity:0.6
    })
    //===================================== design
    $('.viewmaster').flickity({
        // options
          contain: true,
          wrapAround: true,
          pageDots: false,
          prevNextButtons: false,
        //   autoPlay: true
    });
    const element = document.querySelector('.viewmaster');
    element.addEventListener('touchstart', function(event) {
    }, { passive: true });



      
    //===================================== contact 
    //===================================== e - mail
    // AOS
    AOS.init();
});

