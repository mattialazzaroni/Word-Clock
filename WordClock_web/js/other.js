/**
 * Alessio Tochetti on 16/12/2016.
 *
 * JS for the light button and the
 * settings show or hide.
 */

/**
 * Control for the settings menu
 * @type {boolean}
 */
var ctrlSettings = false;

/**
 * Control for light mode
 * @type {boolean}
 */
var ctrlLight = false;

/**
 * When activated shows or hides the settings
 */
function showSettings() {
    //Shows the menu
    if(ctrlSettings == false){
        document.getElementById("myDropDown").style.display = 'inline';
        ctrlSettings = true;
    }
    //Hides the menu
    else{
        document.getElementById("myDropDown").style.display = 'none';
        ctrlSettings = false;
    }

}

/**
 * Turns on or off the night mode
 */
function lights() {
    //Night mode
    if(ctrlLight == false){
        document.getElementById("letterColor").value = '#c99600';
        document.getElementById("otherLetterColor").value = '#000000';
        document.getElementById("backgroundColor").value = "#b4b4b4";
        ctrlLight = true;
    }
    //Day mode
    else{
        document.getElementById("letterColor").value = '#faff00';
        document.getElementById("otherLetterColor").value = '#ffffff';
        document.getElementById("backgroundColor").value = "black";
        ctrlLight = false;
    }
}