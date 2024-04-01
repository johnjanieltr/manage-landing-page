import { changeMainMenu, toggleMainNavMobile } from "./MainNav.js";
import { changeReviewCard, reviewCardFunction } from "./ReviewCards.js";

const $newsletterFormInput = document.getElementById("newsletter-form-input"),
  $newsletterFormErrorMsg = document.getElementById("newsletter-form-err-msg");

let changeReviewCardsIsRunning;

document.addEventListener("DOMContentLoaded", changeMainMenu);

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

document.addEventListener("submit", (e) => {
  if (e.target.matches("#newsletter-form")) {
    e.preventDefault();
    const REGEXP =
      /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    let inputValue = $newsletterFormInput.value;

    if (REGEXP.test(inputValue)) {
      $newsletterFormInput.value = "";
      $newsletterFormInput.classList.remove("footer__form-email--err");
      $newsletterFormInput.blur();
      $newsletterFormErrorMsg.classList.add("hidden");
    } else {
      $newsletterFormInput.classList.add("footer__form-email--err");
      $newsletterFormErrorMsg.classList.remove("hidden");
    }
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
