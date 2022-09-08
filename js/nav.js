// Navigation JavaScript
// Created By Devon Edwards 9.8.2022
// Osbeorn Collective LLC © 2018 - 2022
function hide_nav() {
    let mobile_nav = document.getElementById("mobile_nav");
    let mobile_nav_options = document.getElementById("mobile_nav_options")
    mobile_nav_options.setAttribute("style", "width: 0px;");
    mobile_nav.setAttribute("onclick", "show_nav()");
}
function show_nav() {
    let mobile_nav = document.getElementById("mobile_nav");
    let mobile_nav_options = document.getElementById("mobile_nav_options")
    mobile_nav_options.setAttribute("style", "width: 200px;")
    mobile_nav.setAttribute("onclick", "hide_nav()");

}