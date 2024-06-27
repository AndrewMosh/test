document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".loader");
    preloader.style.display = "none";
    console.log("bitch");
});

window.addEventListener("beforeunload", () => {
    const preloader = document.querySelector(".loader");
    preloader.style.display = "block";
});
