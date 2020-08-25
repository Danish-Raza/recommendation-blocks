$(function () {
    var cardHeight = 350
    var owl = $('.owl-carousel');
    $("#card-container").owlCarousel({
        items: 4,
        //nav:true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
          },
          1200: {
            items: 4
          }
		}
    });
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [300,4]);
    })
    $('.customNextBtn').css({position:"relative",top:`${cardHeight/2}px`, left: "30px"});
    $('.customPrevBtn').css({position:"relative",top:`${cardHeight/2}px`, right: "30px"});
});
