<template>
  <div id="app">
    <app-header></app-header>
    <div id="theMain">
      <!-- 모바일 또는 웹 페이지 라우터 연결됨 -->
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss"></style>
