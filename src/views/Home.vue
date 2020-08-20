<template>
  <div class="view home-view">
    <bingo-settings @on-settings-selected="setBingoSettings"></bingo-settings>
  </div>
</template>

<script>
import bingoSettings from "@/components/bingoSettings.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    bingoSettings
  },
  methods: {
    ...mapActions({
      add: "bingo/increment"
    }),
    setBingoSettings(ev) {
      console.log(ev);
      this.add();
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
