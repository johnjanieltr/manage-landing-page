(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&h(v)}).observe(document,{childList:!0,subtree:!0});function b(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(t){if(t.ep)return;t.ep=!0;const s=b(t);fetch(t.href,s)}})();const o=document.getElementById("header"),w=e=>{if(window.scrollY>15)if(o.classList.contains("header--bg-transparent"))o.classList.remove("header--bg-transparent");else return;else if(!o.classList.contains("header--bg-transparent"))o.classList.add("header--bg-transparent");else return};let c=!0;const m=document.getElementById("dark-layer"),y=()=>{if(window.matchMedia("(min-width: 670px)").matches){if(c===!0){let e=document.getElementById("main-nav-mobile");document.documentElement.lastChild.removeChild(e),document.getElementById("header-logo-wrapper").insertAdjacentElement("afterend",g("desktop")),document.getElementById("dark-layer").classList.add("hidden"),c=!1}}else if(c===!1){let e=document.getElementById("main-nav-desktop");e&&document.getElementById("header-container").removeChild(e),document.getElementById("header").insertAdjacentElement("afterend",g("mobile")),c=!0}},f=()=>{let e=document.getElementById("main-nav-mobile");e.classList.contains("main-nav--is-active")?(e.classList.remove("main-nav--is-active"),m.classList.remove("dark-layer--is-active"),document.getElementById("header-btn-wrapper").innerHTML=`
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
      `},0))},g=e=>{const a=document.createElement("nav");return a.classList.add("main-nav"),a.innerHTML=`
    <ul class="main-nav__list">
      <li class="main-nav__item"><a href="#">Pricing</a></li>
      <li class="main-nav__item"><a href="#">Product</a></li>
      <li class="main-nav__item"><a href="#">About Us</a></li>
      <li class="main-nav__item"><a href="#">Careers</a></li>
      <li class="main-nav__item"><a href="#">Community</a></li>
    </ul>
  `,e==="mobile"&&(a.classList.add("main-nav--mobile"),a.classList.add("hidden"),a.setAttribute("id","main-nav-mobile")),e==="desktop"&&(a.classList.add("main-nav--desktop"),a.setAttribute("id","main-nav-desktop")),a},i=document.getElementById("newsletter-form-input"),L=document.getElementById("newsletter-form-err-msg"),I=()=>{const e=/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;let a=i.value;e.test(a)?(i.value="",i.classList.remove("footer__form-email--err"),i.blur(),L.classList.add("hidden")):(i.classList.add("footer__form-email--err"),L.classList.remove("hidden"))};let r=document.querySelectorAll(".review-card"),l=document.querySelectorAll(".rc-nav__li");r=Array.from(r);l=Array.from(l);let E,n=0,u=3;const _=()=>{E=setInterval(()=>{n>=l.length&&(n=0),r[u].classList.remove("review-cards--is-active"),r[n].classList.remove("hidden"),l[u].classList.remove("rc-nav__li--is-active"),l[n].classList.add("rc-nav__li--is-active"),setTimeout(()=>{r[n].classList.add("review-cards--is-active")},0),setTimeout(()=>{r[u].classList.add("hidden")},800),setTimeout(()=>{u=n,n++},1e3)},5500)},M=document.getElementById("newsletter-form-input"),p=document.getElementById("newsletter-form-err-msg");let d;document.addEventListener("DOMContentLoaded",()=>{y(),w()});window.addEventListener("load",()=>{window.matchMedia("(min-width: 576px)").matches||(_(),d=!0)});document.addEventListener("click",e=>{(e.target.matches("#header-btn-wrapper")||e.target.matches("#header-btn-wrapper *"))&&f(),e.target.matches("#dark-layer")&&f(),e.target.matches(".main-nav__item a")&&f()});document.addEventListener("submit",e=>{e.target.matches("#newsletter-form")&&(e.preventDefault(),I())});document.addEventListener("keypress",e=>{if(e.target.matches("#newsletter-form-input"))if(!p.classList.contains("hidden"))M.classList.remove("footer__form-email--err"),p.classList.add("hidden");else return});document.addEventListener("scroll",w);window.addEventListener("resize",()=>{y(),window.matchMedia("(min-width: 620px)").matches?d&&(clearInterval(E),d=!1):d||(_(),d=!0)});
