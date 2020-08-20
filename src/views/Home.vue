<template>
  <div class="view home-view">
    <bingo-settings @on-settings-selected="setBingoSettings"></bingo-settings>
  </div>
</template>

<script>
import bingoSettings from "@/components/bingoSettings.vue";

export default {
  name: "Home",
  components: {
    bingoSettings
  },
  methods: {
    setBingoSettings(ev) {
      console.log(ev);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-view {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
