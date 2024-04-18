const $header = document.getElementById("header");

const headerBackgroundTransparent = (e) => {
  if (window.scrollY < 15) {
    // header background -> transparent
    if (!$header.classList.contains("header--bg-transparent")) {
      $header.classList.add("header--bg-transparent");
    } else {
      return;
    }
  } else {
    // header background -> not transparent
    if ($header.classList.contains("header--bg-transparent")) {
      $header.classList.remove("header--bg-transparent");
    } else {
      return;
    }
  }
};

export default headerBackgroundTransparent;
