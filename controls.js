/**
 * Open hamburger menu
 */

function openMenu(){
    var i = document.getElementById("menu_nav");
    if(i.className === "menu_open"){
       i.className = "menu_closed";
    }else{
        i.className = "menu_open";
    }
}