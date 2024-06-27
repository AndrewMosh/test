document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".loader");
    preloader.style.display = "none";
});

window.addEventListener("beforeunload", () => {
    const preloader = document.querySelector(".loader");
    preloader.style.display = "block";
});
