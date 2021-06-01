<template>
  <div id="theMain">
    <main-about />
    <main-skill />
    <main-portfolio />
    <main-contact />
  </div>
</template>
<script>
import MainAbout from "../components/layouts/MainAbout.vue";
import MainSkill from "../components/layouts/MainSkill.vue";
import MainPortfolio from "../components/layouts/MainPortfolio.vue";
import MainContact from "../components/layouts/MainContact.vue";

export default {
  components: { MainAbout, MainSkill, MainPortfolio, MainContact },
};
</script>

<style lang="scss" scoped></style>
