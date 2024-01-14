import { changeMainMenu, toggleMainNavMobile } from "./MainNav.js";
import { changeReviewCard, reviewCardFunction } from "./ReviewCards.js";

let changeReviewCardsIsRunning;

document.addEventListener("DOMContentLoaded", () => changeMainMenu());

window.addEventListener("load", () => {
  if (!window.matchMedia("(min-width: 576px)").matches) {
    reviewCardFunction();
    changeReviewCardsIsRunning = true;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches("#burger-btn")) toggleMainNavMobile();
  if (e.target.matches("#darkened-screen")) toggleMainNavMobile();
  if (e.target.matches(".main-nav__item a")) toggleMainNavMobile();
});

window.addEventListener("resize", () => {
  changeMainMenu();

  if (window.matchMedia("(min-width: 620px)").matches) {
    if (changeReviewCardsIsRunning) {
      // stop sliders cards in desktop version
      clearInterval(changeReviewCard);
      changeReviewCardsIsRunning = false;
    }
  } else {
    if (!changeReviewCardsIsRunning) {
      // run sliders cards in mobile version
      reviewCardFunction();
      changeReviewCardsIsRunning = true;
    }
  }
});
