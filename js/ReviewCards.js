let $reviewCards = document.querySelectorAll(".review-card"),
  $reviewCardsNav = document.querySelectorAll(".rc-nav__li");

$reviewCards = Array.from($reviewCards);
$reviewCardsNav = Array.from($reviewCardsNav);

export let changeReviewCard;

let currentCard = 0,
  lastCard = 3;

export const reviewCardFunction = () => {
  changeReviewCard = setInterval(() => {
    // reset the slider every time it reaches the last one
    if (currentCard >= $reviewCardsNav.length) currentCard = 0;

    $reviewCards[lastCard].classList.remove("review-cards--is-active");
    $reviewCards[currentCard].classList.remove("hidden");
    $reviewCardsNav[lastCard].classList.remove("rc-nav__li--is-active");
    $reviewCardsNav[currentCard].classList.add("rc-nav__li--is-active");

    setTimeout(() => {
      $reviewCards[currentCard].classList.add("review-cards--is-active");
    }, 0);
    setTimeout(() => {
      $reviewCards[lastCard].classList.add("hidden");
    }, 800);
    setTimeout(() => {
      lastCard = currentCard;
      currentCard++;
    }, 1000);
  }, 5500);
};
