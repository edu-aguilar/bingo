<template>
  <div class="view bingo-view">
    <div class="bingo-view__bingo-data-wrapper">
      <bingo-control
        :isRunning="isBingoRunning"
        :isStarted="isBingoStarted"
        @on-start-bingo="startBingo"
        @on-pause-bingo="pauseBingo"
        @on-continue-bingo="continueBingo"
      >
      </bingo-control>
      <p class="bingo-view__bingo-data-wrapper__current-num">30</p>
      <ul class="bingo-view__bingo-data-wrapper__last-nums">
        <li>11</li>
        <li>2</li>
        <li>67</li>
        <li>34</li>
        <li>87</li>
      </ul>
      <div class="bingo-view__bingo-data-wrapper__bingo-info">
        <p>Premio de la linea: {{ bingoSettings.lineProfit }}€</p>
        <p>Premio del bingo: {{ bingoSettings.bingoProfit }}€</p>
        <p>
          premio total:
          {{ bingoSettings.lineProfit + bingoSettings.bingoProfit }}€
        </p>
      </div>
    </div>
    <bingo-table></bingo-table>
  </div>
</template>

<script>
import bingoTable from "@/components/bingoTable.vue";
import bingoControl from "@/components/bingoControl.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    bingoTable,
    bingoControl
  },
  computed: {
    ...mapGetters({
      bingoSettings: "bingo/settings",
      isBingoRunning: "bingo/isRunning",
      isBingoStarted: "bingo/isStarted"
    })
  },
  mounted() {
    const areSettingsFilled = this._validateBingoSettings(this.bingoSettings);
    if (!areSettingsFilled) {
      this.$router.replace({ name: "Home" });
    }
  },
  methods: {
    _validateBingoSettings(settings) {
      return Object.keys(settings).every(key => settings[key]);
    },
    ...mapActions({
      startBingo: "bingo/start",
      pauseBingo: "bingo/pause",
      continueBingo: "bingo/unpause"
    })
  }
};
</script>

<style lang="scss" scoped>
.bingo-view {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  &__bingo-data-wrapper {
    display: flex;
    flex-direction: column;

    &__current-num {
      font-size: 200px;
      font-weight: bold;
      margin: 0;
    }

    &__last-nums {
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      flex-grow: 1;

      li {
        font-size: 70px;
        font-weight: 400;
      }
    }

    &__bingo-info {
      flex-grow: 1;
      text-align: center;
    }
  }
}
</style>
