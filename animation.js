// lave console.log med hvert trin-navn, så man kan tjekke i inspect at alle trin virker!

var antalRosiner = 0;
var myTimer;

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

//Starten af historien

// når siden er loadet: sidenVises
$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $("#start").on("click", spilLyd);
}

function spilLyd() {
    console.log("spilLyd");
    $("#start").addClass("none");
    $("#musik_lyd")[0].play();
    $("#musik_lyd")[0].volume = 0.4;
    $("#titel").removeClass("none");
    $("#titelbillede").removeClass("none");
    $("#titel").on("click", startScenen);
}


function startScenen() {
    console.log("startScenen");
    $("#titel").off("click", startScenen);
    $("#titel").addClass("none");
    $("#titelbillede").addClass("none");
    $("#musik_lyd")[0].pause();

    $("#indhold").removeClass("none");

    // Start lyd: fuglefløjt_støj
    $("#stoej_fuglefloejt_lyd")[0].play();
    $("#stoej_fuglefloejt_lyd")[0].volume = 0.1;

    // Start sprite-anim: .baby_blinke
    $("#baby_sprite").addClass("baby_blinke");

    // når der er gået 3,5 sek: babySigerHej
    setTimeout(babySigerHej, 3500);

}

//knap til sømbræt
//$("#hej").on("click", babySigerHej);

function babySigerHej() {
    console.log("babySigerHej");

    // Stop sprite-anim: .baby_blinke
    $("#baby_sprite").removeClass("baby_blinke");
    // Start sprite-anim: .baby_vinke
    $("#baby_sprite").addClass("baby_vinke");
    // Spil lyd: hej
    $("#hej_lyd")[0].play();
    // når sprite-anim: .baby_vinker er færdig: maageGaarModVenstre

    //    $("#baby_sprite").on("animationend", maageGaarModVenstre);
    setTimeout(maageGaarModVenstre, 300);

}

//knap til sømbræt
//$("#maage_left").on("click", maageGaarModVenstre);



function maageGaarModVenstre() {
    console.log("maageGaarModVenstre");

    $("#baby_sprite").off("animationend", maageGaarModVenstre);

    // Vis sprite: .baby
    $("#baby_sprite").addClass(".baby");
    // Start flytte-anim: .maage_move_left
    $("#maage_container").addClass("maage_move_left");
    // Start sprite-anim: .maage_walkcycle_left
    $("#maage_sprite").addClass("maage_walkcycle_left");

    // når flytte-anim: .maage_move_left er færdig: maageKigger
    $("#maage_container").on("animationend", maageKigger);
}

// knap til sømbræt
//$("#maage_kigger").on("click", maageKigger);

function maageKigger() {
    console.log("maageKigger");
    $("#baby_sprite").removeClass("baby_vinke");
    $("#maage_container").off("animationend", maageKigger);
    $("#maage_container").removeClass("maage_move_left");
    // Stop sprite-anim: .maage_walkcycle_left
    $("#maage_sprite").removeClass("maage_walkcycle_left");

    // Start sprite-anim: .maage_kigge
    $("#maage_sprite").addClass("maage_kigge");
    // Sæt position container: .maage_position_in
    $("#maage_container").addClass("maage_position_in");

    // når der er gået 2 sek: maageGaarModHoejre
    setTimeout(maageGaarModHoejre, 2000);
}

// knap til sømbræt
//$("#maage_right").on("click", maageGaarModHoejre);

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

    // når flytte-anim: .maage_move_right er færdig: babyTigger
    $("#maage_container").on("animationend", babyTigger);
}

// knap til sømbræt
//$("#baby_tigger").on("click", babyTigger);

function babyTigger() {
    console.log("babyTigger");

    $("#maage_container").off("animationend", babyTigger);

    $("#baby_sprite").removeClass(".baby");
    $("#maage_container").removeClass("maage_move_right");
    // Stop sprite-anim: .maage_walkcycle_right
    $("#maage_sprite").removeClass("maage_walkcycle_right");
    // Start sprite-anim: .baby_tigge
    $("#baby_sprite").addClass("baby_tigge");
    // Start lyd: eheheh
    $("#eheheh_lyd")[0].play();

    // når sprite-anim: .baby_tigge er færdig: babyLaverDaadyroejne
    $("#baby_sprite").on("animationend", babyLaverDaadyroejne);
}

// knap til sømbræt
//$("#baby_daadyr").on("click", babyLaverDaadyroejne);

function babyLaverDaadyroejne() {
    console.log("babyLaverDaadyroejne");

    $("#baby_sprite").off("animationend", babyLaverDaadyroejne);
    $("#baby_sprite").removeClass("baby_tigge");

    // Start sprite-anim: .baby_daadyr
    $("#baby_sprite").addClass("baby_daadyr");

    // når der er gået 2 sek: morBevaegerArme
    setTimeout(morBevaegerArme, 2000);
}

//knap til sømbræt
//$("#mor_arme").on("click", morBevaegerArme);


function morBevaegerArme() {
    console.log("morBevaegerArme");

    $("#mor_sprite").removeClass("mor_armsdown");
    // Stop sprite-anim: .baby_daadyr
    $("#baby_sprite").removeClass("baby_daadyr");

    //Vis sprite: .baby_side
    $("#baby_sprite").addClass("baby_side");
    // Start sprite-anim: .mor_arme
    $("#mor_sprite").addClass("mor_arme");

    // når sprite-anim: .mor_arme er færdig: viseKnapper
    $("#mor_sprite").on("animationend", viseKnapper);
}

//Her skal brugeren træffe et valg - riskiks eller rosiner? - Forgreningstrin


// knap til sømbræt
//$("#vise_knapper").on("click", viseKnapper);

function viseKnapper() {
    console.log("viseKnapper");
    $("#mor_sprite").off("animationend", viseKnapper);
    $("#mor_sprite").removeClass("mor_arme");
    $("#riskiks").removeClass("buttons_none");
    $("#rosiner").removeClass("buttons_none");


    // Vis sprite: .mor
    $("#mor_sprite").addClass("mor_armsup");
    // Stop lyd: fuglefløjt_støj
    $("#stoej_fuglefloejt_lyd")[0].pause();
    // Spil lyd: riskiks_eller_rosiner
    $("#riskiks").addClass("buttons_pulse");
    $("#rosiner").addClass("buttons_pulse");
    $("#speak_lyd")[0].play();
    $("#speak_lyd")[0].volume = 0.2;

    // når brugeren har klikket på riskiksen: babySpiserRiskiks
    $("#riskiks").on("click", klikPaaKnapRiskiks);
    $("#rosiner").on("click", klikPaaKnapRosiner);
}

//Brugeren har klikket på riskiksen - venstre ben af historien

//knap til sømbræt
//$("#spise_riskiks").on("click", babySpiserRiskiks);

function klikPaaKnapRiskiks() {
    console.log("klikpåknapriskiks");
    $("#speak_lyd")[0].pause();
    $("#riskiks").off("click", klikPaaKnapRiskiks)
    $("#riskiks").removeClass("buttons_pulse");
    $("#rosiner").removeClass("buttons_pulse");

    $("#knap_lyd")[0].play();
    $("#knap_lyd")[0].volume = 0.3;

    $("#knap_lyd").on("ended", babySpiserRiskiks);
}

function babySpiserRiskiks() {
    console.log("babySpiserRiskiks");
    $("#knap_lyd").off("ended", babySpiserRiskiks);
    $("#mor_sprite").removeClass("mor_armsup");
    $("#baby_sprite").removeClass("baby_side");
    $("#riskiks").addClass("buttons_none");
    $("#rosiner").addClass("buttons_none");

    // Start lyd: fuglefløjt_støj
    $("#stoej_fuglefloejt_lyd")[0].play();
    $("#stoej_fuglefloejt_lyd")[0].volume = 0.1;
    // Start sprite-anim: .baby_spiseriskiks
    $("#baby_sprite").addClass("baby_spiseriskiks");
    $("#mor_sprite").addClass("mor_armsdown");

    // når der er gået 1.5 sek: riskiksLyd
    setTimeout(riskiksLyd, 1500);

    // når der er gået 6 sek: babyVinkerFarvel
    setTimeout(babyVinkerFarvel, 5000);
}


// knap til sømbræt
//$("#riskiks_lyd").on("click", riskiksLyd);


function riskiksLyd() {
    console.log("riskiksLyd");
    // Start lyd: riskiks
    $("#gnaske_lyd")[0].play();
}


//slutning A

// knap til sømbræt
//$("#farvel").on("click", babyVinkerFarvel);

function babyVinkerFarvel() {
    console.log("babyVinkerFarvel");

    $("#baby_sprite").removeClass("baby_spiseriskiks");
    // Stop lyd: riskiks
    // Start sprite-anim: .baby_vinkefarvel
    $("#baby_sprite").addClass("baby_vinkefarvel");
    // Start lyd: hejhej
    $("#hejhej_lyd")[0].play();


    $("#baby_sprite").on("animationend", afslutning);
}

//Brugeren har klikket på rosinerne - højre ben af historien

function klikPaaKnapRosiner() {
    console.log("klikpåknaprosiner");
    $("#speak_lyd")[0].pause();
    $("#rosiner").off("click", klikPaaKnapRosiner);
    $("#riskiks").removeClass("buttons_pulse");
    $("#rosiner").removeClass("buttons_pulse");

    $("#knap_lyd")[0].play();
    $("#knap_lyd")[0].volume = 0.3;

    $("#knap_lyd").on("ended", babyTaberRosiner);
}

function babyTaberRosiner() {
    console.log("babyTaberRosiner");
    $("#knap_lyd").off("ended", babyTaberRosiner);
    $("#mor_sprite").removeClass("mor_armsup");
    $("#baby_sprite").removeClass("baby_side");
    $("#riskiks").addClass("buttons_none");
    $("#rosiner").addClass("buttons_none");

    // Start lyd: fuglefløjt_støj
    $("#stoej_fuglefloejt_lyd")[0].play();
    $("#stoej_fuglefloejt_lyd")[0].volume = 0.1;
    // Start sprite-anim: .baby_spiseriskiks
    $("#baby_sprite").addClass("baby_tabe_rosiner");
    $("#mor_sprite").addClass("mor_armsdown");

    // når der er gået 1 sek: rosinLyd
    setTimeout(rosinLyd, 1300);
    $("#baby_sprite").on("animationend", maageKommer);
}

function rosinLyd() {
    console.log("rosinLyd");
    //start lyd for rosiner
    $("#rosiner_falder_lyd")[0].play();
    //når animationen er færdig --> maageKommer
}

function maageKommer() {
    console.log("maageKommer");
    $("#baby_sprite").removeClass("baby_tabe_rosiner");
    $("#baby_sprite").off("animationend", maageKommer);

    $("#baby_sprite").addClass("baby_rosiner");
    $("#maage_container").addClass("maage_move_left2");
    // Start sprite-anim: .maage_walkcycle_left
    $("#maage_sprite").addClass("maage_walkcycle_left");

    $("#maage_container").on("animationend", randomValg);
}


//Her træffer computeren et tilfældigt valg - forgreningstrin

function randomValg() {
    console.log("randomValg");
    $("#maage_container").off("animationend", randomValg);
    $("#maage_sprite").removeClass("maage_walkcycle_left");
    $("#maage_container").removeClass("maage_move_left2");

    $("#maage_sprite").addClass("maage_side");
    $("#maage_container").addClass("maage_position_two");
    if (Math.random() <= 0.5) {
        hjaelpBaby();
    } else {
        maageSpiserRosiner();
    }
}

//Der startes en timer og brugeren skal interagere for at nå til hhv slutning A eller B afhængigt af brugerens interaktion
function hjaelpBaby() {
    console.log("hjaelpBaby");
    //start speak
    $("#speak2_lyd")[0].play();
    $("#stoej_fuglefloejt_lyd")[0].pause();

    $("#speak2_lyd").on("ended", startTimer);

}

function startTimer() {
    console.log("startTimer");
    $("#baby_sprite").removeClass("baby_rosiner");
    $("#baby_sprite").addClass("baby_sur");
    myTimer = setTimeout(tidenGaaet, 12000);
    console.log("timer startet");
    $("#timer_sprite").removeClass("none");
    $("#timer_sprite").addClass("timer");
    $("#timer_lyd")[0].play();
    $("#timer_lyd")[0].volume = 0.4;
    $("#tension_lyd")[0].play();
    $("#tension_lyd")[0].volume = 0.2;

    kanKlikke();
}

function kanKlikke() {
    console.log("kanKlikke");
    $("#baby_sprite").addClass("baby_sur");
    $("#rosindiv").removeClass("none");
    $(".rosin").addClass("rosin_pulse");
    $(".rosin").on("click", babySpiseRosin);
}

function babySpiseRosin() {
    console.log("babySpiseRosin");
    $(".rosin").off("click");
    $("#click_lyd")[0].play();
    $("#click_lyd")[0].volume = 0.5;
    $(".rosin").removeClass("rosin_pulse");
    $("#baby_sprite").removeClass("baby_sur");
    $(this).hide();
    antalRosiner++;
    if (antalRosiner >= 5) {
        $("#tension_lyd")[0].pause();
        $("#timer_lyd")[0].pause();
        $("#stoej_fuglefloejt_lyd")[0].play();
        $("#stoej_fuglefloejt_lyd")[0].volume = 0.1;
        $("#timer_sprite").addClass("none");
        clearTimeout(myTimer);
    }
    $("#baby_sprite").addClass("baby_mmmm");
    $("#baby_mmmm_lyd")[0].play();
    $("#baby_sprite").on("animationend", faerdig);
}

function faerdig() {
    console.log("faerdig");

    $("#baby_sprite").removeClass("baby_mmmm");
    $("#baby_sprite").off("animationend", faerdig);
    if (antalRosiner >= 5) {
        babyGlad();
    } else {
        kanKlikke();
    }

}

function babyGlad() {
    console.log("babyGlad");
    $("#tension_lyd")[0].pause();
    $("#stoej_fuglefloejt_lyd")[0].play();
    $("#stoej_fuglefloejt_lyd")[0].volume = 0.1;
    $("#baby_sprite").addClass("baby_glad");
    $("#baby_fnis_lyd")[0].play();
    clearTimeout(myTimer);
    $("#timer_sprite").addClass("none");
    setTimeout(babyVinkerFarvel2, 1200);
}

function babyVinkerFarvel2() {
    console.log("babyVinkerFarvel2");

    $("#baby_sprite").removeClass("baby_spiseriskiks");
    // Stop lyd: riskiks
    // Start sprite-anim: .baby_vinkefarvel
    $("#baby_sprite").addClass("baby_vinkefarvel");
    // Start lyd: hejhej
    $("#hejhej_lyd")[0].play();
    $("#maage_sprite").addClass("maage_walkcycle_right");
    $("#maage_container").addClass("maage_move_right2");

    $("#baby_sprite").on("animationend", afslutning);
}

//Højre ben af historien

function maageSpiserRosiner() {
    console.log("maageSpiserRosiner");
    $("#baby_sprite").removeClass("baby_rosiner");
    $("#maage_sprite").removeClass("maage_side");

    //tilføj class på babysprite baby_sur
    $("#baby_sprite").addClass("baby_sur");

    $("#maage_sprite").addClass("maage_spiserosiner");
    //tilføj lyd maage spiser rosiner
    $("#maage_rosiner_lyd")[0].play();
    $("#maage_sprite").on("animationend", babyGraeder);
}

//Slutning B

function babyGraeder() {
    console.log("babyGraeder");
    $("#maage_sprite").off("animationend", babyGraeder);
    $("#baby_sprite").removeClass("baby_sur");
    $("#maage_sprite").removeClass("maage_spiserosiner");
    $("#maage_container").removeClass("maage_position_two");

    $("#baby_sprite").addClass("baby_graeder");
    $("#graad_lyd")[0].play();
    $("#graad_lyd")[0].volume = 0.7;
    $("#maage_sprite").addClass("maage_walkcycle_right");
    $("#maage_container").addClass("maage_move_right2");
    $("#rosindiv").addClass("none");
    $(".rosin").removeClass("rosin_pulse");

    $("#baby_sprite").on("animationend", afslutning);
}

function tidenGaaet() {
    console.log("tiden er gået");
    $("#timer_sprite").addClass("none");
    $("#tension_lyd")[0].pause();
    $("#stoej_fuglefloejt_lyd")[0].play();
    $("#stoej_fuglefloejt_lyd")[0].volume = 0.1;
    $("#baby_sprite").addClass("baby_sur");
    $(".rosin").addClass("none");
    $(".rosin").removeClass("rosin_pulse");
    $("#maage_sprite").addClass("maage_spiserosiner");
    $("#maage_rosiner_lyd")[0].play();
    $("#maage_sprite").on("animationend", babyGraeder);
}

function afslutning() {
    console.log("afslutning");
    $("#indhold").addClass("none");
    $("#afslutning").addClass("afslutning");
    $("#musik_lyd")[0].play();
    $("#musik_lyd")[0].volume = 0.4;
    $("#stoej_fuglefloejt_lyd")[0].pause();
}
