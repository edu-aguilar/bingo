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
      setBingoSettings: "bingo/setSettings"
    }),
    setBingoSettings(ev) {
      try {
        const settings = {
          lineProfit: parseFloat(ev.lineProfit),
          bingoProfit: parseFloat(ev.bingoProfit),
          frequency: parseInt(ev.frequency)
        };
        this.setBingoSettings(settings);
      } catch (error) {
        throw Error(error);
      }
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
