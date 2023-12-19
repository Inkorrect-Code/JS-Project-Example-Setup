import WeatherRenderer from "./scripts/weather"; // noice

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new WeatherRenderer(main);
});