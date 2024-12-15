let sectionOffset = $("#whooo").offset().top;
$(window).scroll(function () { 
    let windowScroll = $(window).scrollTop();
    if(windowScroll > sectionOffset - 85){
        $(".navbar").css('backgroundColor', 'white');
        $(".nav-link").css('color', 'black');
        $(".navbar-brand").css('color', 'black');
        $(".nav-icon").css('color', 'black');
        $(".navbar").css('padding', '0');
    }
    else{
        $(".navbar").css('backgroundColor', 'transparent');
        $(".nav-link").css('color', 'white');
        $(".navbar-brand").css('color', 'white');
        $(".nav-icon").css('color', 'white');
        $(".navbar").css('padding', '0.5rem 0');
    }
});