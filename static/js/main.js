
const settingmenu = document.querySelector(".settings-menu");
function dispalySettingMenu(){
    settingmenu.classList.toggle("show-settings");
}
const mode = document.querySelector("#changeMode-btn");
const circle = document.querySelector("#state");
function changemode()
{
    circle.classList.toggle("change-mode");
    mode.classList.toggle("dark-mode")

}