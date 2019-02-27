/**
 * Created by Jeremy Jornod on 25.11.2016.
 * The code javascript of WordClock
 */

/**
 * Set time variable
 */
var hours, minutes, seconds;
/**
 * Set color variable
 */
var on;
var off;
/**
 * Control variable for check if the minutes are more or equals of 35 or not
 */
var toOrpast = false;
/**
 * Diff is a variable for get the column of units of minutes
 */
var diff = 0;

/**
 * Refresh of time
 */
change();

/**
 * This function is used for get the time and set the variables
 */
function getTime() {
    var now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
}

function change() {

    setTimeout(change, 500);

    /**
     * Get the color by the settings
     */
    on = document.getElementById("letterColor").value;
    off = document.getElementById("otherLetterColor").value;
    document.body.style.backgroundColor = backgroundColor.value;

    /**
     * Clean the page for refresh the time
     */
    reset();

    /**
     * Call the function getTime for refresh the time and set the variables
     */
    getTime();

    /**
     *  Enlighten "It's"
     */
    genWord(10, 0, 2, on);

    /**
     * The if is used for check if the time is more of 35 because if is true, need enlighten the next hour
     */
    if(minutes < 35){
        toOrpast = false;
    }else{
        toOrpast = true;
        hours += 1;
    }

    /**
    * Enlighten of hours
    */
    if(hours == 1 || hours == 13){
        genWord(50, 0, 2, on);
    }else if(hours == 2 || hours == 14){
        genWord(50, 3, 5, on);
    }else if(hours == 3 || hours == 15){
        genWord(50, 6, 10, on);
    }else if(hours == 4 || hours == 16){
        genWord(60, 0, 3, on);
    }else if(hours == 5 || hours == 17){
        genWord(60, 4, 7, on);
    }else if(hours == 6 || hours == 18){
        genWord(40, 8, 10, on);
    }else if(hours == 7 || hours == 19){
        genWord(40, 6, 10, on);
    }else if(hours == 8 || hours == 20){
        genWord(70, 0, 4, on);
    }else if(hours == 9 || hours == 21){
        genWord(80, 0, 3, on);
    }else if(hours == 10 || hours == 22){
        genWord(90, 0, 2, on);
    }else if(hours == 11 || hours == 23){
        genWord(70, 5, 10, on);
    }else if(hours == 12 || hours == 24){
        genWord(80, 5, 10, on);
    }

    /**
     * Get the column of units of minutes
     * This variable is for enlighten the dots
     */
    diff = minutes - parseInt(minutes/10)*10;

    if(toOrpast == false) {

       if(diff != 0 && diff != 5) {
           /**
            * Enlighten the circle
            */
           genWord(40, 5, 5, on);
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

        /**
         * Enlighten of minutes
         */
        genWord(40, 0, 3, on);
        if(minutes == 0){
            genWord(90, 5, 10, on); //O'Clock on
        }
        if(minutes < 5){
            genWord(40, 0, 3, off); //Past off
        }else if(minutes < 10){
            genWord(20, 6, 9, on); //Five on
        }else if (minutes < 15){
            genWord(30, 4, 6, on); //Ten on
        }else if(minutes < 20){
            genWord(10, 4, 10, on); //Quarter on
        }else if(minutes < 25){
            genWord(20, 0, 5, on); //Twenty on
        }else if(minutes < 30){
            genWord(20, 0, 9, on); //Twenty-five on
        }else{
            genWord(30, 0, 3, on); //Half on
        }
    }else{
        genWord(30, 9, 10, on); //To on
        if(diff != 0 && diff != 5) {
            /**
             * Enlighten the "+"
             */
            genWord(40, 5, 5, on);
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
        /**
         * Enlighten of minutes
         */
        if(minutes > 55){
            genWord(80, 4, 4, on);
            genWord(40, 5, 5, off);
            genWord(40, 0, 3, off); //Past off
            genWord(30, 9, 10, off); //To off
        }else if(minutes > 50){
            genWord(20, 6, 9, on); //Five on
        }else if(minutes > 45){
            genWord(30, 4, 6, on); //Ten on
        }else if(minutes > 40){
            genWord(10, 4, 10, on); //Quarter on
        }else if(minutes > 35){
            genWord(20, 0, 5, on); //Twenty on
        }else if(minutes > 30){
            genWord(20, 0, 9, on); //Twenty-five on
        }
    }
}

/**
 * This function is used for reset the value
 */
function reset() {

    /**
     * Reset of words
     */
    for(var x = 10; x <= 90; x += 10){
        var els = document.getElementById(x).getElementsByTagName("td");
        for(var y = 0; y <= 10; y++){
            els[y].style.color = off;
        }
    }

    /**
     * Reset of circle
     */
    for(var x = 200; x <= 230; x+=10){
        circle(x, off);
    }
}

/**
 * This function is used for enlighten a word
 * @param id is the row
 * @param min is the column start of word
 * @param max is the column end of word
 * @param color is the color of word: on or off
 */
function genWord(id, min, max, color) {
    var els = document.getElementById(id).getElementsByTagName("td");
    for(var x = min; x <= max; x++){
        els[x].style.color = color;
    }
}

/**
 * This function is used for enlighten the circle
 * @param id is the circle
 * @param color is the color of circle: on or off
 */
function circle(id, color) {
    var els = document.getElementById(id);
    els.style.backgroundColor = color;
}