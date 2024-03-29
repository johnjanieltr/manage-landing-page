let mainNavMobileIsActive = true;

export const changeMainMenu = () => {
  if (window.matchMedia("(min-width: 670px)").matches) {
    if (mainNavMobileIsActive === true) {
      let $mainNavMobile = document.getElementById("main-nav-mobile");

      // remove main menu mobile version
      document.documentElement.lastChild.removeChild($mainNavMobile);
      // add main menu desktop version
      document
        .getElementById("header-icon-contain")
        .insertAdjacentElement("afterend", mainNavRender("desktop"));

      mainNavMobileIsActive = false;
    }
  } else {
    if (mainNavMobileIsActive === false) {
      let $mainNavDesktop = document.getElementById("main-nav-desktop");

      // remove main menu desktop version
      if ($mainNavDesktop)
        document.getElementById("header-div").removeChild($mainNavDesktop);
      // print main menu mobile version
      document
        .getElementById("header")
        .insertAdjacentElement("afterend", mainNavRender("mobile"));

      mainNavMobileIsActive = true;
    }
  }
};

export const toggleMainNavMobile = () => {
  let $mainNav = document.getElementById("main-nav-mobile"),
    $darkenedScreen = document.getElementById("darkened-screen");

  if (!$mainNav.classList.contains("main-nav--is-active")) {
    // open main nav mobile
    $mainNav.classList.remove("hidden");
    $darkenedScreen.classList.remove("hidden");

    setTimeout(() => {
      $mainNav.classList.add("main-nav--is-active");
      $darkenedScreen.classList.add("darkened-screen--is-active");
      document.getElementById("burger-btn-icon").src =
        "./assets/icons/icon-close.svg";
    }, 0);
  } else {
    // close main nav mobile
    $mainNav.classList.remove("main-nav--is-active");
    $darkenedScreen.classList.remove("darkened-screen--is-active");
    document.getElementById("burger-btn-icon").src =
      "./assets/icons/icon-hamburger.svg";

    setTimeout(() => {
      $mainNav.classList.add("hidden");
      $darkenedScreen.classList.add("hidden");
    }, 200);
  }
};

export const mainNavRender = (device) => {
  const $nav = document.createElement("nav");
  $nav.classList.add("main-nav");
  $nav.innerHTML = `
    <ul class="main-nav__list">
      <li class="main-nav__item"><a href="#">Pricing</a></li>
      <li class="main-nav__item"><a href="#">Product</a></li>
      <li class="main-nav__item"><a href="#">About Us</a></li>
      <li class="main-nav__item"><a href="#">Careers</a></li>
      <li class="main-nav__item"><a href="#">Community</a></li>
    </ul>
  `;
  if (device === "mobile") {
    $nav.classList.add("main-nav--mobile");
    $nav.classList.add("hidden");
    $nav.setAttribute("id", "main-nav-mobile");
  }
  if (device === "desktop") {
    $nav.classList.add("main-nav--desktop");
    $nav.setAttribute("id", "main-nav-desktop");
  }
  return $nav;
};
