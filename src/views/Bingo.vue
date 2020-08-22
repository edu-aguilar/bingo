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
      <p class="bingo-view__bingo-data-wrapper__current-num">
        {{ lastNumber }}
      </p>
      <ul class="bingo-view__bingo-data-wrapper__last-nums">
        <li
          class="bingo-table-item"
          v-for="(item, index) in lastNumbers"
          :key="index"
        >
          <span>{{ item }}</span>
        </li>
      </ul>
      <div class="bingo-view__bingo-data-wrapper__bingo-info">
        <p class="title">Premios:</p>
        <p>Linea: {{ bingoSettings.lineProfit }}€</p>
        <p>Bingo: {{ bingoSettings.bingoProfit }}€</p>
        <hr />
        <p>
          Total:
          {{ bingoSettings.lineProfit + bingoSettings.bingoProfit }}€
        </p>
      </div>
    </div>
    <bingo-table :lastNumber="lastNumber"></bingo-table>
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
      isBingoStarted: "bingo/isStarted",
      lastNumber: "bingo/lastNumber",
      lastNumbers: "bingo/lastNumbers"
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
  },
  data() {
    return {
      speech: new SpeechSynthesisUtterance()
    };
  },
  watch: {
    lastNumber: function(newNumber) {
      this.speech.text = newNumber;
      window.speechSynthesis.speak(this.speech);
      const numberAsString = "" + newNumber;
      if (numberAsString.length === 2) {
        numberAsString.split("").forEach(number => {
          const voice = new SpeechSynthesisUtterance();
          voice.text = number;
          window.speechSynthesis.speak(voice);
        });
      }
    }
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

      p.title {
        font-size: 22px;
        font-weight: 500;
      }

      p {
        font-size: 18px;
      }
    }
  }
}
</style>
