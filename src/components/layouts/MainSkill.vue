<template>
  <div id="mainSkill">
    <div class="skill-wrap">
      <div class="skill-title">
        <h2>SKILL</h2>
        <p>
          저는 Web Publisher,<br />
          UI & Markup 개발자입니다.
        </p>
      </div>
      <div class="skill-inner-desktop">
        <div class="skill-box-wrap">
          <h2>Frontend</h2>
          <div class="skill-box">
            <strong>Node.js 기반 백엔드</strong>
            <p>
              Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql DB를
              통한 CRUD API를 자유롭게 구현할 수 있습니다.
            </p>
          </div>
          <div class="skill-box">
            <strong>Node.js 기반 백엔드</strong>
            <p>
              Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql DB를
              통한 CRUD API를 자유롭게 구현할 수 있습니다.
            </p>
          </div>
        </div>
        <div class="skill-box-wrap">
          <h2>backend</h2>
          <div class="skill-box">
            <strong>Node.js 기반 백엔드</strong>
            <p>
              Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql DB를
              통한 CRUD API를 자유롭게 구현할 수 있습니다.
            </p>
          </div>
        </div>
        <div class="skill-box-wrap">
          <h2>publishing</h2>
          <div class="skill-box">
            <strong>Node.js 기반 백엔드</strong>
            <p>
              Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql DB를
              통한 CRUD API를 자유롭게 구현할 수 있습니다.
            </p>
          </div>
          <div class="skill-box">
            <strong>Node.js 기반 백엔드</strong>
            <p>
              Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql DB를
              통한 CRUD API를 자유롭게 구현할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <!-- skill desktop -->
      <div class="skill-inner-mobile-tablet">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="slide-skill-box">
                <strong>첫번째 타이틀</strong>
                <p>
                  Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql
                  DB를 통한 CRUD API를 자유롭게 구현할 수 있습니다.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-skill-box">
                <strong>두번째 타이틀</strong>
                <p>
                  Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql
                  DB를 통한 CRUD API를 자유롭게 구현할 수 있습니다.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-skill-box">
                <strong>세번째 타이틀</strong>
                <p>
                  Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql
                  DB를 통한 CRUD API를 자유롭게 구현할 수 있습니다.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-skill-box">
                <strong>네번째 타이틀</strong>
                <p>
                  Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql
                  DB를 통한 CRUD API를 자유롭게 구현할 수 있습니다.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-skill-box">
                <strong>다섯번째 타이틀</strong>
                <p>
                  Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql
                  DB를 통한 CRUD API를 자유롭게 구현할 수 있습니다.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-skill-box">
                <strong>여섯번째 타이틀</strong>
                <p>
                  Node.js 기반 백엔드 개발이 가능하면 express 패키지와 mysql
                  DB를 통한 CRUD API를 자유롭게 구현할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- skill mobile-tablet -->
    </div>
  </div>
</template>
<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  name: "MainBanner",
  mounted() {
    new Swiper(".swiper-container", {
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        "@0.50": {
          // 768 모바일기기
          slidesPerView: 1.5,
          slidesPerGroup: 1,
        },
        "@1.00": {
          // 1024 태블릿기기
          slidesPerView: 2.5,
          slidesPerGroup: 2,
        },
      },
    });
  },
};
</script>
<style lang="scss" scoped>
#mainSkill {
  padding: 100px 0;
  width: 100%;
  border-top: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-wrap {
  width: 1160px;
  padding: 0 20px;
  height: 80%;
}

.skill-title {
  margin-bottom: 30px;
  color: rgb(66, 66, 66);
  h2 {
    font-size: 50px;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
  }
}

.skill-box-wrap {
  margin-top: 50px;
  h2 {
    font-size: 30px;
    margin-bottom: 30px;
    color: rgb(66, 66, 66);
  }
}

.skill-box {
  background: rgba(236, 236, 236, 0.705);
  color: rgb(90, 90, 90);
  border-radius: 20px;
  height: 100px;
  margin-bottom: 20px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  strong {
    font-size: 20px;
    margin-bottom: 20px;
  }
}

.skill-inner-mobile-tablet {
  display: none;
}

// tablet
@media screen and (max-width: 1024px) {
  .skill-wrap {
    width: 100%;
    padding: 0;
    overflow: hidden;
  }

  .skill-title {
    padding: 0 0 50px 20px;
  }
  .skill-inner-desktop {
    display: none;
  }

  .skill-inner-mobile-tablet {
    display: block;
    width: 100%;
  }
  .swiper-container {
    width: 95vw;
    height: 550px;
    overflow: visible;
  }

  .swiper-wrapper {
    width: 100%;
    height: 500px;
    .swiper-slide {
      width: 100%;
      height: 100%;
      background: rgba(221, 221, 221, 0.705);
      color: rgb(90, 90, 90);
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .slide-skill-box {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        strong {
          font-size: 25px;
        }
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }

  // pagination
  .swiper-wrapper {
    :global(.swiper-pagination-bullet) {
      background-color: rgba(110, 110, 110, 0.85);
      width: 16px;
      height: 16px;
    }
    :global(.swiper-pagination-bullet-active) {
      background: rgb(110, 110, 110);
    }
  }

  .swiper-pagination {
    text-align: right; //right 수정해야함
    top: -90px;
  }
}

// mobile
@media screen and (max-width: 768px) {
  .skill-title {
    padding-bottom: 20px;
  }

  .swiper-container {
    width: 90vw;
    height: 400px;
  }

  .swiper-wrapper {
    height: 350px;
    .swiper-slide {
      .slide-skill-box {
        strong {
          font-size: 20px;
        }
        p {
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }

  .swiper-pagination {
    text-align: right; //right 수정해야함
    top: -70px;
  }
}
</style>
