//Initial Dom Color mode setup

let htmlDoc = document.querySelector("html");

htmlDoc.setAttribute("data-theme", "light");

const keepDarkMode = function () {
  if (localStorage.getItem("dark-mode") === "is-dark") {
    htmlDoc.setAttribute("data-theme", "dark");
  }
};

keepDarkMode();

//If in use place the code below in site.js

let colorSwitch = $(".nav_color_switch");
let darkModeTrigger = $(".nav_color_trigger.to-dark");
let lightModeTrigger = $(".nav_color_trigger.to-light");

const setDarkModeElementStyles = function () {
  if (localStorage.getItem("dark-mode") === "is-dark") {
    colorSwitch.classList.add("is-dark");
    darkModeTrigger.css({ display: "none" });
    lightModeTrigger.css({ display: "block" });
  }
};

darkModeTrigger.on("click", function () {
  localStorage.setItem("dark-mode", "is-dark");
  colorSwitch.addClass("is-dark");
  darkModeTrigger.css({ display: "none" });
  lightModeTrigger.css({ display: "block" });
  $("html").attr("data-theme", "dark");
});
lightModeTrigger.on("click", function () {
  localStorage.setItem("dark-mode", "is-light");
  colorSwitch.removeClass("is-dark");
  darkModeTrigger.css({ display: "block" });
  lightModeTrigger.css({ display: "none" });
  $("html").attr("data-theme", "light");
});
