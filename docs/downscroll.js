// Enable scrolling in reveal..
function resetSlideScrolling(slide) {
    $(slide).removeClass('scrollable-slide');
    $(slide).animate({ scrollTop: 0 }, 1000);
    $('html').off("keydown");
}

function handleSlideScrolling(slide) {
    if ($(slide).height() >= 700) {
        $(slide).addClass('scrollable-slide');
        $('html').on("keydown", function(e) {
            if(e.shiftKey) {
                if(e.keyCode == 40) { // down , up = 38
                    let scrollVal = $(slide)[0].scrollTop + 400;
                    //let scrollMax = $(slide)[0].scrollHeight - $(slide)[0].clientTop;
                    //if(scrollVal > scrollMax) scrollVal = scrollMax;
                    $(slide).stop(true, true).animate({ scrollTop: scrollVal },400);
                } else if(e.keyCode == 38) {
                    let scrollVal = $(slide)[0].scrollTop - 400;
                    //if(scrollVal < 0) scrollVal = 0;
                    $(slide).stop(true, true).animate({ scrollTop: scrollVal },400);
                }
            }
        });
    }
}

Reveal.addEventListener('ready', function (event) {
    handleSlideScrolling(event.currentSlide);
});

Reveal.addEventListener('slidechanged', function (event) {
    resetSlideScrolling(event.previousSlide)
    handleSlideScrolling(event.currentSlide);
});
