/**
 * Created by Alessio Tocchetti on 02.12.2016.
 *
 * JS for the progress bar
 */

/**
 * Current seconds
 */
var seconds;

/**
 * Control for the the first time of execution
 * @type {boolean}
 */
var firstTime = true;

/**
 * Function to animate the bar for
 * the seconds
 */
window.onload = function() { //Start on page loaded

    var bar = document.getElementById("progress");

    var load = function() { //Animation for the bar

        seconds = new Date().getSeconds(); //Current seconds

        //First animation
        if(firstTime){
            for(var i = 0; i < seconds; i++){
                bar.style.color = document.getElementById("otherLetterColor").value;
                bar.rows[0].cells[i].style.backgroundColor = document.getElementById("letterColor").value;
            }
        }

        //Removes the colored seconds (59 seconds to 0)
        if(parseInt(seconds) == 0){
            for(var i = 0; i < 60; i++){
                bar.style.color = document.getElementById("otherLetterColor").value;
                var clr = document.body.style.backgroundColor;

                bar.rows[0].cells[i].style.backgroundColor = clr;
            }
        }
        bar.style.color = document.getElementById("otherLetterColor").value;
        bar.rows[0].cells[seconds].style.backgroundColor = "white"; //Color current second

    };

    setInterval(function() {load();},100);
}




