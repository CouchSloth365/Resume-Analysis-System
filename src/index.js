const sectionOne = document.getElementById("section-one");
const plusContainer = document.getElementById("plus-container");
const plus = document.getElementById("plus");
const plusHovered = document.getElementById("plus-hovered");
const upload = document.getElementById("upload");
const local = document.getElementById("local");
const drive = document.getElementById("drive");
const fileUpload = document.getElementById("file-upload");

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
})

local.addEventListener("click", () => {
    fileUpload.click();
})

sectionOne.addEventListener("click", (e) => {
    if (!upload.contains(e.target) && !plusContainer.contains(e.target)){
        upload.classList.remove("h-[30%]");
        upload.classList.replace("opacity-100", "opacity-0");
        plusContainer.classList.replace("opacity-0", "opacity-100");
    }
});