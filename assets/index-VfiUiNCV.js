(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function I(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(t){if(t.ep)return;t.ep=!0;const r=I(t);fetch(t.href,r)}})();const l=document.getElementById("header"),g=document.querySelector(".btn--header .btn__shadow"),y=e=>{if(window.scrollY<15)if(!l.classList.contains("header--bg-transparent"))l.classList.add("header--bg-transparent"),g.classList.remove("btn__shadow-is-hidden");else return;else if(l.classList.contains("header--bg-transparent"))l.classList.remove("header--bg-transparent"),g.classList.add("btn__shadow-is-hidden");else return};let o=!0;const c=document.getElementById("dark-layer"),_=()=>{window.matchMedia("(min-width: 670px)").matches?o===!0&&(document.body.removeChild(document.getElementById("main-nav-mobile")),document.getElementById("header-btn-wrapper").innerHTML=`
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
      `,document.getElementById("header-logo-wrapper").insertAdjacentElement("afterend",w("desktop")),document.getElementById("dark-layer").classList.add("hidden"),o=!1):o===!1&&(document.getElementById("header-container").removeChild(document.getElementById("main-nav-desktop")),document.getElementById("header").insertAdjacentElement("afterend",w("mobile")),o=!0)},h=()=>{let e=document.getElementById("main-nav-mobile");e.classList.contains("main-nav--is-active")?(e.classList.remove("main-nav--is-active"),c.classList.remove("dark-layer--is-active"),document.getElementById("header-btn-wrapper").innerHTML=`
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
    `,setTimeout(()=>{e.classList.add("hidden"),c.classList.add("hidden")},200)):(e.classList.remove("hidden"),c.classList.remove("hidden"),setTimeout(()=>{e.classList.add("main-nav--is-active"),c.classList.add("dark-layer--is-active"),document.getElementById("header-btn-wrapper").innerHTML=`
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
      `},0))},w=e=>{const a=document.createElement("nav");return a.classList.add("main-nav"),a.innerHTML=`
    <ul class="main-nav__list">
      <li class="main-nav__item"><a href="#">Pricing</a></li>
      <li class="main-nav__item"><a href="#">Product</a></li>
      <li class="main-nav__item"><a href="#">About Us</a></li>
      <li class="main-nav__item"><a href="#">Careers</a></li>
      <li class="main-nav__item"><a href="#">Community</a></li>
    </ul>
  `,e==="mobile"&&(a.classList.add("hidden"),a.setAttribute("id","main-nav-mobile")),e==="desktop"&&a.setAttribute("id","main-nav-desktop"),a},s=document.getElementById("newsletter-form-input"),p=document.getElementById("newsletter-form-err-msg"),M=()=>{const e=/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;let a=s.value;e.test(a)?(s.value="",s.classList.remove("footer__form-email--err"),s.blur(),p.classList.add("hidden")):(s.classList.add("footer__form-email--err"),p.classList.remove("hidden"))};let m=document.querySelectorAll(".review-card"),d=document.querySelectorAll(".rc-nav__li");m=Array.from(m);d=Array.from(d);let n=0,v=3,b;const E=()=>{b=setInterval(()=>{n>=d.length&&(n=0),m[v].classList.remove("review-cards--is-active"),d[v].classList.remove("rc-nav__li--is-active"),d[n].classList.add("rc-nav__li--is-active"),setTimeout(()=>{m[n].classList.add("review-cards--is-active"),v=n,n++},0)},5500)},B=document.getElementById("newsletter-form-input"),L=document.getElementById("newsletter-form-err-msg");let i;document.addEventListener("DOMContentLoaded",()=>{_(),y()});window.addEventListener("load",()=>{window.matchMedia("(min-width: 576px)").matches||(E(),i=!0)});document.addEventListener("click",e=>{(e.target.matches("#header-btn-wrapper")||e.target.matches("#header-btn-wrapper *"))&&h(),e.target.matches("#dark-layer")&&h(),e.target.matches(".main-nav__item a")&&h()});document.addEventListener("submit",e=>{e.target.matches("#newsletter-form")&&(e.preventDefault(),M())});document.addEventListener("keypress",e=>{if(e.target.matches("#newsletter-form-input"))if(!L.classList.contains("hidden"))B.classList.remove("footer__form-email--err"),L.classList.add("hidden");else return});document.addEventListener("scroll",y);window.addEventListener("resize",()=>{_(),window.matchMedia("(min-width: 620px)").matches?i&&(clearInterval(b),i=!1):i||(E(),i=!0)});
