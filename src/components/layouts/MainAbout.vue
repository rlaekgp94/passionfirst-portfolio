<template>
  <div id="mainAbout">
    <div class="about-background"></div>
    <div class="about-wrap">
      <div class="about-profile-img"></div>
      <div class="about-inner">
        <div class="about-name">
          <h2>Web Publisher</h2>
          <p>&#64;김다혜</p>
        </div>
        <div class="about-pr-text">
          <strong
            >견고한 UI와 기억에 남는<br />
            UX를 만드는 웹 퍼블리셔입니다
          </strong>
          <p>
            저는 제 일을 좋아합니다.<br />
            좋아하니까 즐기게 되고, 더 잘하고 싶어집니다.<br />
            목표를 향해 성큼성큼 나아가는 의지,<br />
            끊임없이 솟아오르는<br />
            영감, 모두 제가 가진 저만의 '다움’입니다 :)
          </p>
        </div>
        <div class="about-link-button">
          <button type="button">Git</button>
          <button type="button">Mail</button>
        </div>
        <ul class="about-career-list">
          <li>
            <ul>
              <li>자격증</li>
              <li>자격내용</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>학위</li>
              <li>학위내용</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>이력</li>
              <li>이력내용</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>수료</li>
              <li>수료내용</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#mainAbout {
  width: 100%;
  height: 100vh;
}

// about 배경사진
.about-background {
  width: 100%;
  height: 30%;
  background: url("https://image.freepik.com/free-vector/gradient-wallpaper-background_1159-5356.jpg")
    no-repeat center / cover;
}

.about-wrap {
  width: 100%;
  height: 70%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}

.about-inner {
  width: 480px;
  height: 75%;
  margin-bottom: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

// 프로필사진
.about-profile-img {
  position: absolute;
  top: -110px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  border-radius: 200px;
  border: 10px solid #fff;
  overflow: hidden;
  background: url("https://w7.pngwing.com/pngs/263/387/png-transparent-smiley-emoji-illustration-emoji-emoticon-smiley-computer-icons-blushing-emoji-face-computer-wallpaper-sphere.png")
    no-repeat center / cover;
}

.about-name {
  text-align: center;
  h2 {
    font-size: 28px;
    margin-bottom: 5px;
  }
  p {
    font-weight: 600;
  }
}

.about-link-button {
  width: 480px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    cursor: pointer;
    font-size: 16px;
    width: 225px;
    height: 40px;
    outline: none;
    border-radius: 40px;
    color: #252525;
    border: 1px solid rgba(163, 163, 163, 0.3);
  }
}

.about-pr-text {
  width: 480px;
  text-align: center;
  font-size: 16px;
  line-height: 22.5px;
  strong {
    font-size: 18px;
  }
  p {
    margin-top: 5px;
  }
}

.about-career-list {
  width: 480px;
  display: flex;
  flex-direction: column;
  li {
    color: #252525;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid rgba(163, 163, 163, 0.3);
    ul {
      li:last-child {
        font-weight: bold;
        font-size: 15px;
      }
      font-size: 14px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}

// tablet
@media screen and (max-width: 1024px) {
}

// mobile
@media screen and (max-width: 768px) {
  // about 배경사진
  .about-background {
    height: 25%;
  }

  .about-wrap {
    height: 75%;
  }

  .about-inner {
    width: 350px;
    height: 80%;
    margin-bottom: 25px;
  }

  // 프로필사진
  .about-profile-img {
    top: -85px;
    width: 150px;
    height: 150px;
    border: 7px solid #fff;
  }

  .about-name {
    h2 {
      font-size: 24px;
    }
  }

  .about-link-button {
    width: 350px;
    button {
      font-size: 16px;
      width: 165px;
    }
  }

  .about-pr-text {
    width: 350px;
  }

  .about-career-list {
    width: 350px;
  }
}
</style>
