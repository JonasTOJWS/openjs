$(function() {    
    $(".typedjs").each(function(index, value) {
        let params = $(this).attr("params");
        // Defaults..
        let opts = { typeSpeed: 20, backSpeed: 0, backDelay: 500, startDelay: 300, loop: true };
        if(params) {
            for(let pair of params.split(",")) {
                pair = pair.trim();
                if(pair.includes(":")) {
                    let p = pair.split(":")[0].trim();
                    let v = pair.split(":")[1].trim();
                    opts[p] = parseInt(v);
                }
            }
        }

        let strings = $(this).find(".typed-strings")[0];
        let typeElem = $(this).find(".typed")[0];
        opts.stringsElement = strings;
        var typed = new Typed(typeElem, opts);
    });
});
