
$(".pylistSong").on("click", function() {
    playlistPlay($(this));
});

// Play next song auto..
$(".pylistAudio").on("ended", function() {
    let audio = $(this);
    let cont = $(audio.parents('div[class="pylist"]')[0]);
    let div = $(cont.find(".pylistPlay")[0]);
    let next = $(div.next());
    if(next.hasClass("pylistSong")) {
        playlistPlay(next);
    }
});


function playlistPlay(e) {
    // Find parent pylist..
    let cont = $(e.parents('div[class="pylist"]')[0]);
    cont.find(".pylistPlay").removeClass("pylistPlay");
    e.addClass("pylistPlay");
    let audio = $(cont.find(".pylistAudio")[0]);
    audio.attr("src", e.attr("rel"));
    audio[0].play();
}
