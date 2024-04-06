const $newsletterFormInput = document.getElementById("newsletter-form-input"),
  $newsletterFormErrorMsg = document.getElementById("newsletter-form-err-msg");

const newsLetterHandler = () => {
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
};

export default newsLetterHandler;
