

// Play song clicked on..


$(".pylist a").on("click", function() {
    playlistPlay($(this));
});

// Play next song auto..
$(".pylist [adplayer]").on("ended", function() {
    let audio = $(this);
    let player = audio.attr("adplayer");
    let index = parseInt(audio.attr("index"));
    let nextIndex = (index+1) + "";
    let next = $(".pylist [player = '" + player + "'][index = '"+nextIndex+"']");
    if(next && next.is("a")) {
        playlistPlay(next);
    }
});


function playlistPlay(a) {
    let playerId = a.attr("player");
    $(".pylist [player]").removeClass("playclass");
    a.addClass("playclass");
    let src = a.attr("song");
    let index = a.attr("index");

    let audio = $(".pylist [adplayer = '" + playerId + "']");
    audio.attr("index", index);
    audio.attr("src", src);
    audio[0].play();
}
