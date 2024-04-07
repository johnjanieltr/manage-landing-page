const $header = document.getElementById("header");

const headerEffect = (e) => {
  if (window.scrollY > 15) {
    if ($header.classList.contains("header--bg-transparent")) {
      $header.classList.remove("header--bg-transparent");
    } else {
      return;
    }
  } else {
    if (!$header.classList.contains("header--bg-transparent")) {
      $header.classList.add("header--bg-transparent");
    } else {
      return;
    }
  }
};

export default headerEffect;
