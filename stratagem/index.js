var width = 100;
var code = [];
var index = 0;
var amo = 49;
var rd = Math.floor(Math.random() * (amo + 1));
var interval = 500;
var score = 0;
var inc = 15;
var playing = false;
var w_inc = 30;
var id;
var left = "a";
var right = "d";
var up = "w";
var down = "s";

// 0: default 1:left 2:right 3:up 4:down
var change = 0;

// https://www.youtube.com/watch?v=ijBvQACTlvs
var button = new Audio("sfx/click.mp3");

// https://www.youtube.com/watch?v=sHZUfSMLjFs
var l_fx = new Audio("sfx/lose.mp3");
var s_fx = new Audio("sfx/score.mp3");
var w_fx = new Audio("sfx/wrong.mp3");

//up -90 down 90 left 180 right 0
//https://www.ign.com/wikis/helldivers-2/Stratagems_Codes_List

document.addEventListener("DOMContentLoaded", function () {
  createbtns(rd);

  var l_e = document.getElementById("left-tx");
  var r_e = document.getElementById("right-tx");
  var u_e = document.getElementById("up-tx");
  var d_e = document.getElementById("down-tx");

  if (!document.cookie.includes("controls")) {
    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
  } else {
    var c = document.cookie.replace("controls=", "").split(",");
    left = c[0];
    right = c[1];
    up = c[2];
    down = c[3];
  }

  l_e.innerHTML = "LEFT: " + left;
  r_e.innerHTML = "RIGHT: " + right;
  u_e.innerHTML = "UP: " + up;
  d_e.innerHTML = "DOWN: " + down;
});

function changeL() {
    if (change == 0) {
        change = 1;
        var l_e = document.getElementById("left-tx");
        l_e.innerHTML = "LEFT: PRESS A KEY";
    }
}

function changeR() {
    if (change == 0) {
        change = 2;
        var l_e = document.getElementById("right-tx");
        l_e.innerHTML = "RIGHT: PRESS A KEY";
    }
}

function changeU() {
    if (change == 0) {
        change = 3;
        var l_e = document.getElementById("up-tx");
        l_e.innerHTML = "UP: PRESS A KEY";
    }
}

function changeD() {
    if (change == 0) {
        change = 4;
        var l_e = document.getElementById("down-tx");
        l_e.innerHTML = "DOWN: PRESS A KEY";
    }
}

function start() {
    var elem = document.getElementById("start");
    elem.style.display = "none";
    playing = true;

    var elem = document.getElementById("bar");
    var id = setInterval(frame, interval);
    function frame() {
        if (playing) {
            if (width <= 0) {
                clearInterval(id);
                lose();
            } else {
                width--;
                elem.style.width = width + "%";
                clearInterval(id);
                id = setInterval(frame, interval);
            }
        }
    }
}

function closeSet() {
    var elem = document.getElementById("settings");
    elem.style.display = "none";
    playing = true;
}

function settings() {
    var elem = document.getElementById("settings");
    elem.style.display = "block";
    playing = false;
}

function lose() {
    playing = false;
    l_fx.play();
    var elem = document.getElementById("lose");
    var tw = document.getElementById("twitter");
    var sc = document.getElementById("score-tx");

    tw.href = "https://twitter.com/intent/tweet?text=SCORE: " + score + "&url=https://pui4.github.io/stratagem";
    sc.innerHTML = "SCORE: " + score;
    elem.style.display = "block";
}

function retry() {
    var elem = document.getElementById("lose");
    var s = document.getElementById("score");

    width = 100;
    interval = 500;
    score = 0;
    s.innerHTML = "SCORE: " + score;
    createbtns(rd);
    start();
    elem.style.display = "none"
}

document.onkeydown = function(evt) {
    var elem = document.getElementsByClassName("btn");
    var s_elem = document.getElementById("score");

    evt = evt || document.event;
    if (playing) {
        switch (evt.key) {
            case up:
                if (index == code.length - 1 && code[index] == -90) {
                    rd = Math.floor(Math.random() * (amo + 1));
                    button.play();
                    score++;
                    s_elem.innerHTML = "SCORE: " + score;
                    s_fx.play();
                    createbtns(rd);
                    index = 0;
                    if (width + w_inc >= 100) {
                        width = 100;
                    } else {
                        width += w_inc;
                    }
                    interval -= inc;
                    break;
                }
                if (code[index] == -90) {
                    elem[index].style.filter = "invert(78%) sepia(87%) saturate(5065%) hue-rotate(358deg) brightness(96%) contrast(105%)";
                    button.play();
                    index++;
                }else {
                    for (let i = 0; i < index; i++) {
                        elem[i].style.filter = "invert(48%) sepia(0%) saturate(3121%) hue-rotate(234deg) brightness(104%) contrast(81%)";
                    }
                    index = 0;
                    w_fx.play();
                }
                break;
            case left:
                if (index == code.length - 1 && code[index] == 180) {
                    rd = Math.floor(Math.random() * (amo + 1));
                    button.play();
                    score++;
                    s_elem.innerHTML = "SCORE: " + score;
                    s_fx.play();
                    createbtns(rd);
                    index = 0;
                    if (width + w_inc >= 100) {
                        width = 100;
                    } else {
                        width += w_inc;
                    }
                    interval -= inc;
                    break;
                }
                if (code[index] == 180) {
                    elem[index].style.filter = "invert(78%) sepia(87%) saturate(5065%) hue-rotate(358deg) brightness(96%) contrast(105%)";
                    button.play();
                    index++;
                }else {
                    for (let i = 0; i < index; i++) {
                        elem[i].style.filter = "invert(48%) sepia(0%) saturate(3121%) hue-rotate(234deg) brightness(104%) contrast(81%)";
                    }
                    index = 0;
                    w_fx.play();
                }
                break;
            case down:
                if (index == code.length - 1 && code[index] == 90) {
                    rd = Math.floor(Math.random() * (amo + 1));
                    button.play();
                    score++;
                    s_elem.innerHTML = "SCORE: " + score;
                    s_fx.play();
                    createbtns(rd);
                    index = 0;
                    if (width + w_inc >= 100) {
                        width = 100;
                    } else {
                        width += w_inc;
                    }
                    interval -= inc;
                    break;
                }
                if (code[index] == 90) {
                    elem[index].style.filter = "invert(78%) sepia(87%) saturate(5065%) hue-rotate(358deg) brightness(96%) contrast(105%)";
                    button.play();
                    index++;
                }else {
                    for (let i = 0; i < index; i++) {
                        elem[i].style.filter = "invert(48%) sepia(0%) saturate(3121%) hue-rotate(234deg) brightness(104%) contrast(81%)";
                    }
                    index = 0;
                    w_fx.play();
                }
                break;
            case right:
                if (index == code.length - 1 && code[index] == 0) {
                    rd = Math.floor(Math.random() * (amo + 1));
                    button.play();
                    score++;
                    s_elem.innerHTML = "SCORE: " + score;
                    s_fx.play();
                    createbtns(rd);
                    index = 0;
                    console.log(width);
                    if (width + w_inc >= 100) {
                        width = 100;
                    } else {
                        width += w_inc;
                    }
                    interval -= inc;
                    break;
                }
                if (code[index] == 0) {
                    elem[index].style.filter = "invert(78%) sepia(87%) saturate(5065%) hue-rotate(358deg) brightness(96%) contrast(105%)";
                    button.play();
                    index++;
                }else {
                    for (let i = 0; i < index; i++) {
                        elem[i].style.filter = "invert(48%) sepia(0%) saturate(3121%) hue-rotate(234deg) brightness(104%) contrast(81%)";
                    }
                    index = 0;
                    w_fx.play();
                }
                break;
        }
    } else {
        switch (change) {
            case 1:
                if (evt.key != down && evt.key != right && evt.key != up) {
                    left = evt.key;
                    var l_e = document.getElementById("left-tx");
                    l_e.innerHTML = "LEFT: " + left;
                    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
                    change = 0;
                }
                break;
            case 2:
                if (evt.key != down && evt.key != left && evt.key != up) {
                    right = evt.key;
                    var l_e = document.getElementById("right-tx");
                    l_e.innerHTML = "RIGHT: " + right;
                    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
                    change = 0;
                }
                break;
            case 3:
                if (evt.key != down && evt.key != right && evt.key != left) {
                    up = evt.key;
                    var l_e = document.getElementById("up-tx");
                    l_e.innerHTML = "UP: " + up;
                    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
                    change = 0;
                }
                break;
            case 4:
                if (evt.key != up && evt.key != left && evt.key != right) {
                    down = evt.key;
                    var l_e = document.getElementById("down-tx");
                    l_e.innerHTML = "DOWN: " + down;
                    document.cookie = "controls=" + left + "," + right + "," + up + "," + down + "; SameSite=Lax;"
                    change = 0;
                }
                break;
        }
    }
};

function createbtns(id) {
    var btns = document.getElementById("btns")
    var title = document.getElementById("title")

    var text = ""
    var htmls = "";
    switch (id) {
        case 0:
            code = [-90,90,0,180,-90];
            text = "REINFORCE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 1:
            code = [-90,90,0,-90];
            text = "SOS BEACON";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 2:
            code = [90,90,-90,0];
            text = "RESUPLY";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 3:
            code = [90,180,90,-90,0];
            text = "MACHINE GUN";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 4:
            code = [90,180,0,-90,90];
            text = "ANTI-MATERIAL RIFLE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 5:
            code = [90,180,90,-90,-90,180];
            text = "STALWART";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 6:
            code = [90,90,180,-90,0];
            text = "EXPENDABLE ANTI-TANK"
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 7:
            code = [90,180,0,0,180];
            text = "RECOILLESS RIFLE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 8:
            code = [90,180,-90,90,-90];
            text = "FLAMETHROWER";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 9:
            code = [90,180,90,-90,-90,0];
            text = "AUTOCANNON";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 10:
            code = [90,0,90,-90,180,0];
            text = "RAILGUN";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 11:
            code = [90,90,-90,90,90];
            text = "SPEAR";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 12:
            code = [0,90,180,-90,90];
            text = "ORBITAL GATLING BARRAGE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 13:
            code = [0,0,0];
            text = "ORBITAL AIRBURST STRIKE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 14:
            code = [0,0,90,180,0,90];
            text = "ORBITAL 120MM HE BARRAGE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 15:
            code = [0,90,-90,-90,180,90,90];
            text = "ORBITAL 380MM HE BARRAGE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 16:
            code = [0,90,0,90,0,90];
            text = "ORBITAL WALKING BARRAGE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 17:
            code = [0,90,-90,0,90];
            text = "ORBITAL LASER";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 18:
            code = [0,-90,90,90,0];
            text = "ORBITAL RAILCANNON STRIKE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 19:
            code = [-90,0,0];
            text = "EAGLE STRAFING RUN";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 20:
            code [-90,0,90,0];
            text = "EAGLE AIRSTRIKE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 21:
            code = [-90,0,90,90,0];
            text = "EAGLE CLUSTER BOMB";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 22:
            code = [-90,0,90,-90];
            text = "EAGLE NAPALM AIRSTRIKE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 23:
            code = [90,-90,-90,90,-90];
            text = "JUMP PACK";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 24:
            code = [-90,0,-90,90];
            text = "EAGLE SMOKE STRIKE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 25:
            code = [-90,0,-90,180];
            text = "EAGLE 110MM ROCKET PODS";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 26:
            code = [-90,0,90,90,90];
            text = "EAGLE 500KG BOMB";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 27:
            code = [0,0,90,0];
            text = "ORBITAL PRECISION STRIKE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 28:
            code = [0,0,90,0];
            text = "ORBITAL GAS STRIKE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 29:
            code = [0,0,180,90];
            text = "ORBITAL EMS STRIKE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 30:
            code = [0,0,90,-90];
            text = "ORBITAL SMOKE STRIKE";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 31:
            code = [90,-90,180,0,0,180];
            text = "HMG EMPLACEMENT";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 32:
            code = [90,90,180,0,180];
            text = "SHIELD GENERATOR RELAY";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 33:
            code = [90,-90,0,-90,180,0];
            text = "TESLA TOWER";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 34:
            code = [90,180,-90,0];
            text = "ANTI-PERSONNEL MINEFIELD";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 35:
            code = [90,180,90,-90,90,90];
            text = "SUPPLY PACK";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 36:
            code = [90,180,-90,180,90];
            text = "GRENADE LAUNCHER";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 37:
            code = [90,180,90,-90,180];
            text = "LASER CANNON";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 38:
            code = [90,180,180,90];
            text = "INCENDIARY MINES";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 39:
            code = [90,-90,180,-90,0,0];
            text = '"GUARD DOG" ROVER';
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 40:
            code = [90,180,90,90,-90,180];
            text = "BALLISTIC SHIELD BACKPACK";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 41:
            code = [90,0,90,-90,180,180];
            text = "ARC THROWER";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 42:
            code = [90,-90,180,0,180,90];
            text = "SHIELD GENERATOR PACK";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 43:
            code = [90,-90,0,0,-90];
            text = "MACHINE GUN SENTRY";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 44:
            code = [90,-90,0,180];
            text = "GATLING SENTRY";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 45:
            code = [90,-90,0,0,90];
            text = "MORTAR SENTRY";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 46:
            code = [90,-90,180,-90,0,90];
            text = '"GUARD DOG"';
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 47:
            code = [90,-90,0,-90,180,-90];
            text = "AUTOCANNON SENTRY";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 48:
            code = [90,-90,0,0,180];
            text = "ROCKET SENTRY";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
        case 49:
            code = [90,-90,0,90,0];
            text = "EMS MORTAR SENTRY";
            for (var i in code) {
                htmls += '<img id="btn" class="btn" style="transform: rotate('+ code[i] +'deg);" src="img/arrow.png">';
            }
            break;
            // Finally done :)
    }
    btns.innerHTML = htmls;
    title.innerHTML = text;
}