import "../scss/style.scss";

// Подлкючаем свайпер в мобильной версии

import Swiper, {
  Pagination,
} from "../../node_modules/swiper/swiper-bundle.min";

Swiper.use(Pagination);

let breakpoint = window.matchMedia("(max-width: 320px)");

let swiper;

function enableSwiper() {
  swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

let breakpointChecker = function () {
  if (breakpoint.matches) {
    enableSwiper();
  }
};

breakpoint.addEventListener("resize", breakpointChecker);

breakpointChecker();

// Добавляем обработчик на кнопки

const popupButtons = document.querySelectorAll(".popup-button");
const burgerButton = document.querySelector(".burger-button");
const burgerWrapper = document.querySelector(".burger-menu");
const mainContent = document.querySelector(".main-content");

if (popupButtons.length > 0) {
  for (let i = 0; i < popupButtons.length; i++) {
    const popupButton = popupButtons[i];
    popupButton.addEventListener("click", function () {
      const popupName = popupButton.getAttribute("name");
      const currentPopup = document.querySelector(`.${popupName}`);
      popupOpenClose(currentPopup);
    });
  }
}

function popupOpenClose(currentPopup) {
  currentPopup.classList.add("open");
  const closeButton = currentPopup.querySelector(".close-button");
  closeButton.addEventListener("click", function () {
    currentPopup.classList.remove("open");
  });
}

burgerButton.addEventListener("click", function () {
  burgerOpenClose(burgerButton);
});

function burgerOpenClose(burgerButton) {
  burgerWrapper.classList.add("menu-open");
  const closeButton = burgerWrapper.querySelector(".close-button");
  closeButton.addEventListener("click", function () {
    burgerWrapper.classList.remove("menu-open");
  });
}
