/**
 * Created by Jeremy Jornod on 25.11.2016.
 */
var hours, minutes, seconds;
var on;
var off;
var toOrpast = false;
var diff = 0;
change();
function getTime() {
    var now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
}

function change() {
    setTimeout(change, 500);
    on = document.getElementById("letterColor").value;
    off = document.getElementById("otherLetterColor").value;
  	document.body.style.backgroundColor = backgroundColor.value;
    reset();
    getTime();

    //Es ist
    genWord(10, 0, 1, on);
    genWord(10, 3, 5, on);
    //Uhr
    genWord(100, 8, 10, on); //Uhr on
    if(minutes < 35){
        toOrpast = false;
    }else{
        toOrpast = true;
        hours += 1;
    }
    if(hours == 1 || hours == 13){
        genWord(60, 2, 4, on);
    }else if(hours == 2 || hours == 14){
        genWord(60, 0, 3, on);
    }else if(hours == 3 || hours == 15){
        genWord(70, 1, 4, on);
    }else if(hours == 4 || hours == 16){
        genWord(80, 7, 10, on);
    }else if(hours == 5 || hours == 17){
        genWord(70, 7, 10, on);
    }else if(hours == 6 || hours == 18){
        genWord(100, 1, 5, on);
    }else if(hours == 7 || hours == 19){
        genWord(60, 5, 10, on);
    }else if(hours == 8 || hours == 20){
        genWord(90, 1, 4, on);
    }else if(hours == 9 || hours == 21){
        genWord(80, 3, 6, on);
    }else if(hours == 10 || hours == 22){
        genWord(90, 5, 8, on);
    }else if(hours == 11 || hours == 23){
        genWord(80, 0, 2, on);
    }else if(hours == 12 || hours == 24){
        genWord(50, 5, 9, on);
    }
    //Illuminazione dei pallini
    diff = minutes - parseInt(minutes/10)*10;

    if(toOrpast == false) {
        if(diff != 0 && diff != 5) {
            //to on
            genWord(50, 4, 4, on);

            if(diff != 0 && diff != 5) {
                genWord(50, 4, 4, on);
                if (diff != 5 && diff != 0) {
                    circle(200, on);
                }
                if (diff >= 2 && diff <= 4 || diff >= 7 && diff <= 9) {
                    circle(220, on);
                }
                if (diff >= 3 && diff <= 4 || diff >= 8 && diff <= 9) {
                    circle(210, on);
                }
                if (diff == 4 || diff == 9) {
                    circle(230, on);
                }
            }
        }
        //Nach
        genWord(40, 2, 5, on);
        if(minutes < 5){
            genWord(40, 2, 5, off); //Past off
            genWord(100, 8, 10, on);
        }else if(minutes < 10){
            genWord(10, 7, 10, on); //Five on
        }else if (minutes < 15){
            genWord(20, 0, 3, on); //Ten on
        }else if(minutes < 20){
            genWord(30, 4, 10, on); //Quarter on
        }else if(minutes < 25){
            genWord(20, 4, 10, on); //Twenty on
        }else if(minutes < 30){
            genWord(20, 4, 10, on); //Twenty on
            genWord(10, 7, 10, on); //Five on
        }else{
            genWord(50, 0, 3, on); //Half on
        }
    }else{
        genWord(40, 6, 8, on); //To on
        if(diff != 0 && diff != 5) {
            genWord(50, 4, 4, on);
            if (diff == 2 || diff == 7) {
                circle(210, on);
                circle(200, on);
                circle(220, on);
            } else if (diff == 3 || diff == 8) {
                circle(220, on);
                circle(200, on);
            } else if (diff == 4 || diff == 9) {
                circle(200, on);
            } else if (diff == 1 || diff == 6) {
                circle(230, on);
                circle(200, on);
                circle(220, on);
                circle(210, on);
            }
        }
        if(minutes > 55){
            genWord(40, 2, 5, off); //Past off
            genWord(100, 8, 10, on);
            genWord(40, 6, 8, off); //To o
            //- on
            genWord(70, 6, 6, on);
            genWord(50, 4, 4, off);
        }else if(minutes > 50){
            genWord(10, 7, 10, on); //Five on
        }else if(minutes > 45){
            genWord(20, 0, 3, on); //Ten on
        }else if(minutes > 40){
            genWord(30, 4, 10, on); //Quarter on
        }else if(minutes > 35){
            genWord(20, 4, 10, on); //Twenty on
        }else if(minutes > 30){
            genWord(20, 4, 10, on); //Twenty on
            genWord(10, 7, 10, on); //Five on
        }
    }
}
function reset() {
    for(var x = 10; x <= 100; x += 10){
        var els = document.getElementById(x).getElementsByTagName("td");
        for(var y = 0; y <= 10; y++){
            els[y].style.color = off;
        }
    }

    for(var x = 200; x <= 230; x+=10){
        circle(x, off);
    }
}

function genWord(id, min, max, color) {
    var els = document.getElementById(id).getElementsByTagName("td");
    for(var x = min; x <= max; x++){
        els[x].style.color = color;
    }
}

function circle(id, color) {
    var els = document.getElementById(id);
    els.style.backgroundColor = color;
}