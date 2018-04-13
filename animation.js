// lave console.log med hvert trin-navn, så man kan tjekke i inspect at alle trin virker!

/*
elementer:
#baby_container
#baby_sprite

#maage_container
#maage_sprite

#mor_container
#mor_sprite

animationer:
baby_blinke
baby_vinke
baby_daadyr
baby_spiseriskiks
baby_vinkefarvel

mor_arme

maage_walkcycle_left
maage_move_left
maage_position_in
maage_kigge
maage_walkcycle_right
maage_move_right

lyde:

*/


// når siden er loadet: sidenVises
$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    // Start lyd: fuglefløjt
    // Start lyd: støj
    // Start sprite-anim: .baby_blinke
    $("#baby_sprite").addClass("baby_blinke");
    // Vis sprite: .mor_armsdown
    $("#mor_sprite").addClass("mor_armsdown");

    $("#riskiks").addClass("buttons_none");
    $("#rosiner").addClass("buttons_none");

}

// når der er gået 3 sek: babySigerHej
//knap til sømbræt
$("#hej").on("click", babySigerHej);

function babySigerHej() {
    console.log("babySigerHej");

    // Stop sprite-anim: .baby_blinke
    $("#baby_sprite").removeClass("baby_blinke");
    // Start sprite-anim: .baby_vinke
    $("#baby_sprite").addClass("baby_vinke");
    // Spil lyd: hej
}

// når sprite-anim: .baby_vinker er færdig: maageGaarModVenstre
//knap til sømbræt
$("#maage_left").on("click", maageGaarModVenstre);

function maageGaarModVenstre() {
    console.log("maageGaarModVenstre");

    $("#baby_sprite").removeClass("baby_vinke");
    // Vis sprite: .baby
    $("#baby_sprite").addClass(".baby");
    // Start flytte-anim: .maage_move_left
    $("#maage_container").addClass("maage_move_left");
    // Start sprite-anim: .maage_walkcycle_left
    $("#maage_sprite").addClass("maage_walkcycle_left");
}
// når flytte-anim: .maage_move_left er færdig: maageKigger
// knap til sømbræt
$("#maage_kigger").on("click", maageKigger);

function maageKigger() {
    console.log("maageKigger");

    $("#maage_container").removeClass("maage_move_left");
    // Stop sprite-anim: .maage_walkcycle_left
    $("#maage_sprite").removeClass("maage_walkcycle_left");
    // Start sprite-anim: .maage_kigge
    $("#maage_sprite").addClass("maage_kigge");
    // Sæt position container: .maage_position_in
    $("#maage_container").addClass("maage_position_in");
}
// når der er gået 2 sek: maageGaarModHoejre
// knap til sømbræt
$("#maage_right").on("click", maageGaarModHoejre);

function maageGaarModHoejre() {
    console.log("maageGaarModHoejre");

    // Stop position: maage_position_in
    $("#maage_container").removeClass("maage_position_in");
    // Stop sprite-anim: .maage_kigge
    $("#maage_sprite").removeClass("maage_kigge");
    // Start sprite-anim: .maage_walkcycle_right
    $("#maage_sprite").addClass("maage_walkcycle_right");
    // Start flytte-anim: .maage_move_right
    $("#maage_container").addClass("maage_move_right");

}
// når flytte-anim: .maage_move_right er færdig: babyTigger
// knap til sømbræt
$("#baby_tigger").on("click", babyTigger);

function babyTigger() {
    console.log("babyTigger");

    $("#baby_sprite").removeClass(".baby");
    $("#maage_container").removeClass("maage_move_right");
    // Stop sprite-anim: .maage_walkcycle_right
    $("#maage_sprite").removeClass("maage_walkcycle_right");
    // Start sprite-anim: .baby_tigge
    $("#baby_sprite").addClass("baby_tigge");
    // Start lyd: eheheh
}
// når sprite-anim: .baby_tigge er færdig: babyLaverDaadyroejne
// knap til sømbræt
$("#baby_daadyr").on("click", babyLaverDaadyroejne);

function babyLaverDaadyroejne() {
    console.log("babyLaverDaadyroejne");

    $("#baby_sprite").removeClass("baby_tigge");
    // Stop lyd: eheheh
    // Start sprite-anim: .baby_daadyr
    $("#baby_sprite").addClass("baby_daadyr");
}
// når der er gået 2 sek: morBevaegerArme
//knap til sømbræt
$("#mor_arme").on("click", morBevaegerArme);


function morBevaegerArme() {
    console.log("morBevaegerArme");

    $("#mor_sprite").removeClass("mor_armsdown");
    //Vis sprite: .baby_side
    $("#baby_sprite").addClass("baby_side");
    // Stop sprite-anim: .baby_daadyr
    $("#baby_sprite").removeClass("baby_daadyr");
    // Start sprite-anim: .mor_arme
    $("#mor_sprite").addClass("mor_arme");
}
// når sprite-anim: .mor_arme er færdig: viseKnapper
// knap til sømbræt
$("#vise_knapper").on("click", viseKnapper);

function viseKnapper() {
    console.log("viseKnapper");

    $("#mor_sprite").removeClass("mor_arme");
    // Vis sprite: .mor
    $("#mor_sprite").addClass("mor_armsup");
    // Stop lyd: fuglefløjt
    // Stop lyd: støj
    // Spil lyd: riskiks_eller_rosiner
    // Start anim?: .buttons
    $("#riskiks").removeClass("buttons_none");
    $("#rosiner").removeClass("buttons_none");

    /*Her skal knapperne riskiks og rosin vises, hvorefter brugeren tager et valg - forgreningstrin. Lige nu vælger brugeren riskiks*/
}
// når brugeren har klikket på riskiksen: babySpiserRiskiks
//knap til sømbræt
$("#spise_riskiks").on("click", babySpiserRiskiks);

function babySpiserRiskiks() {
    console.log("babySpiserRiskiks");
    $("#riskiks").addClass("buttons_none");
    $("#rosiner").addClass("buttons_none");
    $("#mor_sprite").removeClass("mor_armsup");
    $("#mor_sprite").addClass("mor_armsdown");

    // Stop anim?: .buttons
    // Start lyd: fuglefløjt
    // Start lyd: støj
    // Start sprite-anim: .baby_spiseriskiks
    $("#baby_sprite").addClass("baby_spiseriskiks");
}
// når der er gået 1.5 sek: riskiksLyd
// knap til sømbræt
$("#riskiks_lyd").on("click", riskiksLyd);


function riskiksLyd() {
    console.log("riskiksLyd");
    // Start lyd: riskiks
}

// når sprite-anim: .baby_spiseriskiks er færdig: babyVinkerFarvel
// knap til sømbræt
$("#farvel").on("click", babyVinkerFarvel);

function babyVinkerFarvel() {
    console.log("babyVinkerFarvel");

    $("#baby_sprite").removeClass("baby_spiseriskiks");
    // Stop lyd: riskiks
    // Start sprite-anim: .baby_vinkefarvel
    $("#baby_sprite").addClass("baby_vinkefarvel");
    // Start lyd: hejhej
}
