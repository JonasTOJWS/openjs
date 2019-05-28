$(function() {    
    $(".typedjs").each(function(index, value) {
        // Put text in <p> tags.. in div #typed-strings-id
        // Add span with unique id
        // Put all in div <div class="type-wrap">
        let strings = $(this).find(".typed-strings")[0];
        let typeElem = $(this).find(".typed")[0];
        var typed = new Typed(typeElem, {
            stringsElement: strings,
            typeSpeed: 20,
            backSpeed: 0,
            backDelay: 500,
            startDelay: 300,
            loop: true
        });
    });
});
