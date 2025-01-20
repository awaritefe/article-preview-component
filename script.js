const showBanner = document.getElementById("show-banner-button");
const hideBanner = document.getElementById("hide-banner-button");
const removeHide = document.querySelector(".card-share-banner");

showBanner.addEventListener("click", () => {
    removeHide.classList.toggle("hide");
});

hideBanner.addEventListener("click", () => {
    removeHide.classList.add("hide");
});
