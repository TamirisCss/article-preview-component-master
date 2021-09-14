const shareArrow = document.querySelector(".share");
const shareBox = document.querySelector(".box-share");

shareArrow.addEventListener("click", () => {
    shareBox.classList.toggle("show");
});