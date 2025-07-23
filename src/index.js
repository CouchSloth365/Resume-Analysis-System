const body = document.getElementById("body");
const landing = document.getElementById("landing");
const about = document.getElementById("about");
const plusContainer = document.getElementById("plus-container");
const plus = document.getElementById("plus");
const plusHovered = document.getElementById("plus-hovered");
const infoContainer = document.getElementById("info-container");
const info = document.getElementById("info");
const infoHovered = document.getElementById("info-hovered");
const compassContainer = document.getElementById("compass-container");
const compass = document.getElementById("compass");
const compassHovered = document.getElementById("compass-hovered");
const upload = document.getElementById("upload");
const local = document.getElementById("local");
const drive = document.getElementById("drive");
const fileUpload = document.getElementById("file-upload");

window.addEventListener("DOMContentLoaded", () => {
    history.scrollRestoration = "manual";
    landing.scrollIntoView({behavior: "instant"}); 
});

plusContainer.addEventListener("mouseenter", () => {
    plus.classList.replace("opacity-100", "opacity-0");
    plus.classList.remove("pointer-events-none");

    plusHovered.classList.replace("opacity-0", "opacity-100");
    plusHovered.classList.add("pointer-events-none");
});

plusContainer.addEventListener("mouseleave", () => {
    plus.classList.replace("opacity-0", "opacity-100");
    plus.classList.add("pointer-events-none");

    plusHovered.classList.replace("opacity-100", "opacity-0");
    plusHovered.classList.remove("pointer-events-none");
});

plusContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    plusContainer.classList.replace("opacity-100", "opacity-0");
    upload.classList.replace("opacity-0", "opacity-100");
    upload.classList.add("h-[30%]");
});

local.addEventListener("mouseenter", () => {
    local.classList.replace("text-black", "text-amber-400");
});

local.addEventListener("mouseleave", () => {
    local.classList.replace("text-amber-400", "text-black");
});

drive.addEventListener("mouseenter", () => {
    drive.classList.replace("text-black", "text-amber-400");
});

drive.addEventListener("mouseleave", () => {
    drive.classList.replace("text-amber-400", "text-black");
});

local.addEventListener("click", () => {
    fileUpload.click();
});

landing.addEventListener("click", (e) => {
    if (!upload.contains(e.target) && !plusContainer.contains(e.target)){
        upload.classList.remove("h-[30%]");
        upload.classList.replace("opacity-100", "opacity-0");
        plusContainer.classList.replace("opacity-0", "opacity-100");
    }
});

infoContainer.addEventListener("mouseenter", () => {
    info.classList.replace("opacity-100", "opacity-0");
    info.classList.remove("pointer-events-none");

    infoHovered.classList.replace("opacity-0", "opacity-100");
    infoHovered.classList.add("pointer-events-none");
});

infoContainer.addEventListener("mouseleave", () => {
    info.classList.replace("opacity-0", "opacity-100");
    info.classList.add("pointer-events-none");

    infoHovered.classList.replace("opacity-100", "opacity-0");
    infoHovered.classList.remove("pointer-events-none");
});

infoContainer.addEventListener("click", () => {
    about.scrollIntoView({behavior: "smooth"});
});

compassContainer.addEventListener("mouseenter", () => {
    compass.classList.replace("opacity-100", "opacity-0");
    compass.classList.remove("pointer-events-none");

    compassHovered.classList.replace("opacity-0", "opacity-100");
    compassHovered.classList.add("pointer-events-none");
});

infoContainer.addEventListener("mouseleave", () => {
    compass.classList.replace("opacity-0", "opacity-100");
    compass.classList.add("pointer-events-none");

    compassHovered.classList.replace("opacity-100", "opacity-0");
    compassHovered.classList.remove("pointer-events-none");
});

compassContainer.addEventListener("click", () => {
    landing.scrollIntoView({behavior: "smooth"});

    compass.classList.replace("opacity-0", "opacity-100");
    compass.classList.add("pointer-events-none");

    compassHovered.classList.replace("opacity-100", "opacity-0");
    compassHovered.classList.remove("pointer-events-none");
});