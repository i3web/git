(function(){
    $(".listHead").on("click",function(){
        $(this).closest(".list").toggleClass("open").find(".dirDropdown").slideToggle("fast");
        $(this).find(".iconfont").toggleClass("icon-hide")
    })
    $(".footerBot").load("footer.html");
    function float() {
        if($(window).scrollTop()>452){
            $(".dir").addClass("fixedLeft");
            $(".topNav.header").addClass("fixedTop");
        }else{
            $(".dir").removeClass("fixedLeft");
            $(".topNav.header").removeClass("fixedTop");
        }
        var fHeight=233;
        var hasScroll=$(window).height()+$(window).scrollTop();
        if(hasScroll>$(document).height()-fHeight){
            $(".dir").addClass("affixBot").css({"bottom":$(document).height()-hasScroll,"top":"auto"})
        }else{
            $(".dir").removeClass("affixBot").css({"top":50,"bottom":"auto"})
        }
    }
    var timer
    $(window).scroll(function(){
        if(timer)clearTimeout(timer);////////
        timer=setTimeout(function(){
            float()
        },10)

    })
    float();


})()
