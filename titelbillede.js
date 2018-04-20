$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    // Start lyd: fuglefløjt_støj
    $("#musik_lyd")[0].play();
    $("#musik_lyd")[0].volume = 0.4;

}
