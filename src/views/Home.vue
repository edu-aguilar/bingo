<template>
  <div class="view home-view">
    <h1 class="title">Bingo Sicomoro 3</h1>
    <bingo-settings @on-settings-selected="updateBingoSettings">
    </bingo-settings>
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
    updateBingoSettings(ev) {
      try {
        const settings = {
          lineProfit: parseFloat(ev.lineProfit),
          bingoProfit: parseFloat(ev.bingoProfit),
          frequency: parseInt(ev.frequency)
        };
        this.setBingoSettings(settings);
        this.$router.push({ name: "Bingo" });
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
  flex-direction: column;

  .title {
    margin-top: -10rem;
    margin-bottom: 3rem;
    font-size: 60px;
  }
}
</style>
