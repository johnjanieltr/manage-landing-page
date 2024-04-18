const $header = document.getElementById("header"),
  $btnShadowHeader = document.querySelector(".btn--header .btn__shadow");

const headerBackgroundTransparent = (e) => {
  if (window.scrollY < 15) {
    // header background -> transparent
    if (!$header.classList.contains("header--bg-transparent")) {
      $header.classList.add("header--bg-transparent");
      $btnShadowHeader.classList.remove("btn__shadow-is-hidden");
    } else {
      return;
    }
  } else {
    // header background -> not transparent
    if ($header.classList.contains("header--bg-transparent")) {
      $header.classList.remove("header--bg-transparent");
      $btnShadowHeader.classList.add("btn__shadow-is-hidden");
    } else {
      return;
    }
  }
};

export default headerBackgroundTransparent;
