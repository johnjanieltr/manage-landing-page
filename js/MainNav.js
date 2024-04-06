let mainNavMobileIsActive = true;

const $darkLayer = document.getElementById("dark-layer");

export const changeMainNav = () => {
  if (window.matchMedia("(min-width: 670px)").matches) {
    if (mainNavMobileIsActive === true) {
      let $mainNavMobile = document.getElementById("main-nav-mobile");

      // remove main menu mobile version
      document.documentElement.lastChild.removeChild($mainNavMobile);
      // add main menu desktop version
      document
        .getElementById("header-logo-wrapper")
        .insertAdjacentElement("afterend", mainNavRender("desktop"));
      document.getElementById("dark-layer").classList.add("hidden");

      mainNavMobileIsActive = false;
    }
  } else {
    if (mainNavMobileIsActive === false) {
      let $mainNavDesktop = document.getElementById("main-nav-desktop");

      // remove main menu desktop version
      if ($mainNavDesktop)
        document
          .getElementById("header-container")
          .removeChild($mainNavDesktop);
      // print main menu mobile version
      document
        .getElementById("header")
        .insertAdjacentElement("afterend", mainNavRender("mobile"));

      mainNavMobileIsActive = true;
    }
  }
};

export const toggleMainNavMobile = () => {
  let $mainNav = document.getElementById("main-nav-mobile");

  if (!$mainNav.classList.contains("main-nav--is-active")) {
    // open main nav mobile
    $mainNav.classList.remove("hidden");
    $darkLayer.classList.remove("hidden");

    setTimeout(() => {
      $mainNav.classList.add("main-nav--is-active");
      $darkLayer.classList.add("dark-layer--is-active");
      document.getElementById("header-btn-wrapper").innerHTML = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          class="header__btn"
        >
          <path
            fill="#242D52"
            fill-rule="evenodd"
            d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
          />
        </svg>
      `;
    }, 0);
  } else {
    // close main nav mobile
    $mainNav.classList.remove("main-nav--is-active");
    $darkLayer.classList.remove("dark-layer--is-active");
    document.getElementById("header-btn-wrapper").innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="18"
        class="header__btn"
      >
        <g fill="#242D52" fill-rule="evenodd">
          <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
        </g>
      </svg>
    `;
    setTimeout(() => {
      $mainNav.classList.add("hidden");
      $darkLayer.classList.add("hidden");
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
