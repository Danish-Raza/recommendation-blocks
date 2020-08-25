function loadHandler() {
    var slides = document.querySelector(".slides")
    var cardThresholdNo = 4;
    var cardLength = 270;
    document.querySelector(".right-arrow").addEventListener("click",function() {
            slides.scrollLeft+= cardLength * cardThresholdNo;
    });
    document.querySelector(".left-arrow").addEventListener("click",function() {
            slides.scrollLeft+= -cardLength * cardThresholdNo;
    });
}

function carouselHandler(element) {
    let activeCarousel =  document.querySelector('[data-carousel-status="active"]');
    if(activeCarousel) {
        activeCarousel.setAttribute("data-carousel-status","in-active");
    }
    element.setAttribute("data-carousel-status","active");
    let href = element.getAttribute("href");
    if(href) {
        href = href.substring(1);
        document.getElementById(href).scrollLeft = 0;
    }
}