<template>
  <header id="appheader" class="nav">
    <div class="nav-inner">
      <router-link to="/" class="logo">L O G O</router-link>
      <ul>
        <li class="about-link"><a href="#about">ABOUT</a></li>
        <li class="about-link"><a href="#skill">SKILL</a></li>
        <li class="portfolio-link"><a href="#portfolio">PORTFOLIO</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
export default {
  name: "Header",
  mounted() {
    let nav = $("header"),
      navText = $(".nav-inner a");

    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll === 0) {
        nav.css("background", "transparent");
        navText.css("color", "#fff");
      } else {
        nav.css("background", "#fff");
        navText.css("color", "#252525");
      }
    });

    $("a").click(function () {
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
      );
      return false;
    });
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 4rem;
  font-size: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-inner {
    width: 1160px;
    padding: 0 20px;
    background: transparent;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: #fff;
      font-weight: bold;
    }
    .logo {
      width: 5rem;
    }
    ul {
      width: 18rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

// tablet
@media screen and (max-width: 1024px) {
  header {
    background: red;
    .nav-inner {
      ul {
        width: 15rem;
      }
    }
  }
}

// mobile
@media screen and (max-width: 768px) {
  header {
    background: blue;
    font-size: 14px;
  }
}
</style>
