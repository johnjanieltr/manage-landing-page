(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&f(h)}).observe(document,{childList:!0,subtree:!0});function I(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(t){if(t.ep)return;t.ep=!0;const s=I(t);fetch(t.href,s)}})();const o=document.getElementById("header"),g=document.querySelector(".btn--header .btn__shadow"),y=e=>{if(window.scrollY<15)if(!o.classList.contains("header--bg-transparent"))o.classList.add("header--bg-transparent"),g.classList.remove("btn__shadow-is-hidden");else return;else if(o.classList.contains("header--bg-transparent"))o.classList.remove("header--bg-transparent"),g.classList.add("btn__shadow-is-hidden");else return};let c=!0;const m=document.getElementById("dark-layer"),_=()=>{window.matchMedia("(min-width: 670px)").matches?c===!0&&(document.body.removeChild(document.getElementById("main-nav-mobile")),document.getElementById("header-btn-wrapper").innerHTML=`
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
      `,document.getElementById("header-logo-wrapper").insertAdjacentElement("afterend",w("desktop")),document.getElementById("dark-layer").classList.add("hidden"),c=!1):c===!1&&(document.getElementById("header-container").removeChild(document.getElementById("main-nav-desktop")),document.getElementById("header").insertAdjacentElement("afterend",w("mobile")),c=!0)},v=()=>{let e=document.getElementById("main-nav-mobile");e.classList.contains("main-nav--is-active")?(e.classList.remove("main-nav--is-active"),m.classList.remove("dark-layer--is-active"),document.getElementById("header-btn-wrapper").innerHTML=`
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
    `,setTimeout(()=>{e.classList.add("hidden"),m.classList.add("hidden")},200)):(e.classList.remove("hidden"),m.classList.remove("hidden"),setTimeout(()=>{e.classList.add("main-nav--is-active"),m.classList.add("dark-layer--is-active"),document.getElementById("header-btn-wrapper").innerHTML=`
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
  `,e==="mobile"&&(a.classList.add("hidden"),a.setAttribute("id","main-nav-mobile")),e==="desktop"&&a.setAttribute("id","main-nav-desktop"),a},i=document.getElementById("newsletter-form-input"),p=document.getElementById("newsletter-form-err-msg"),M=()=>{const e=/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;let a=i.value;e.test(a)?(i.value="",i.classList.remove("footer__form-email--err"),i.blur(),p.classList.add("hidden")):(i.classList.add("footer__form-email--err"),p.classList.remove("hidden"))};let n=document.querySelectorAll(".review-card"),l=document.querySelectorAll(".rc-nav__li");n=Array.from(n);l=Array.from(l);let b,r=0,u=3;const E=()=>{b=setInterval(()=>{r>=l.length&&(r=0),n[u].classList.remove("review-cards--is-active"),n[r].classList.remove("hidden"),l[u].classList.remove("rc-nav__li--is-active"),l[r].classList.add("rc-nav__li--is-active"),setTimeout(()=>{n[r].classList.add("review-cards--is-active")},0),setTimeout(()=>{n[u].classList.add("hidden")},800),setTimeout(()=>{u=r,r++},1e3)},5500)},B=document.getElementById("newsletter-form-input"),L=document.getElementById("newsletter-form-err-msg");let d;document.addEventListener("DOMContentLoaded",()=>{_(),y()});window.addEventListener("load",()=>{window.matchMedia("(min-width: 576px)").matches||(E(),d=!0)});document.addEventListener("click",e=>{(e.target.matches("#header-btn-wrapper")||e.target.matches("#header-btn-wrapper *"))&&v(),e.target.matches("#dark-layer")&&v(),e.target.matches(".main-nav__item a")&&v()});document.addEventListener("submit",e=>{e.target.matches("#newsletter-form")&&(e.preventDefault(),M())});document.addEventListener("keypress",e=>{if(e.target.matches("#newsletter-form-input"))if(!L.classList.contains("hidden"))B.classList.remove("footer__form-email--err"),L.classList.add("hidden");else return});document.addEventListener("scroll",y);window.addEventListener("resize",()=>{_(),window.matchMedia("(min-width: 620px)").matches?d&&(clearInterval(b),d=!1):d||(E(),d=!0)});
