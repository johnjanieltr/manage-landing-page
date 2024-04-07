import headerEffect from "./headerEffect.js";
import { changeMainNav, toggleMainNavMobile } from "./MainNav.js";
import newsLetterHandler from "./newsLetterHandler.js";
import { changeReviewCard, reviewCardFunction } from "./ReviewCards.js";

const $newsletterFormInput = document.getElementById("newsletter-form-input"),
  $newsletterFormErrorMsg = document.getElementById("newsletter-form-err-msg");

let changeReviewCardsIsRunning;

document.addEventListener("DOMContentLoaded", () => {
  changeMainNav();
  headerEffect();
});

window.addEventListener("load", () => {
  if (!window.matchMedia("(min-width: 576px)").matches) {
    reviewCardFunction();
    changeReviewCardsIsRunning = true;
  }
});

document.addEventListener("click", (e) => {
  if (
    e.target.matches("#header-btn-wrapper") ||
    e.target.matches("#header-btn-wrapper *")
  )
    toggleMainNavMobile();
  if (e.target.matches("#dark-layer")) toggleMainNavMobile();
  if (e.target.matches(".main-nav__item a")) toggleMainNavMobile();
  return;
});

document.addEventListener("submit", (e) => {
  if (e.target.matches("#newsletter-form")) {
    e.preventDefault();
    newsLetterHandler();
  }
});

document.addEventListener("keypress", (e) => {
  if (e.target.matches("#newsletter-form-input")) {
    if (!$newsletterFormErrorMsg.classList.contains("hidden")) {
      $newsletterFormInput.classList.remove("footer__form-email--err");
      $newsletterFormErrorMsg.classList.add("hidden");
    } else {
      return;
    }
  }
});

document.addEventListener("scroll", headerEffect);

window.addEventListener("resize", () => {
  changeMainNav();

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
