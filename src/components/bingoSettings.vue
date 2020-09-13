<template>
  <div class="bingo-settings-wrapper">
    <form class="bingo-settings-wrapper__form">
      <div class="bingo-settings-wrapper__form__field">
        <label for="lineProfit">Cuantía línea: </label>
        <input id="lineProfit" type="number" v-model="lineProfit" />
      </div>
      <div class="bingo-settings-wrapper__form__field">
        <label for="bingoProfit">Cuantía bingo: </label>
        <input id="bingoProfit" type="number" v-model="bingoProfit" />
      </div>
      <div class="bingo-settings-wrapper__form__field">
        <label for="timing">Tiempo entre números: </label>
        <input id="timing" type="number" v-model="frequency" />
      </div>
    </form>
    <button
      :disabled="!areSettingsValid"
      class="bingo-settings-wrapper__button"
      @click="startBingo"
    >
      Empezar
    </button>
  </div>
</template>

<script>
export default {
  name: "BingoSettings",
  data() {
    return {
      lineProfit: 0,
      bingoProfit: 0,
      frequency: 4000
    };
  },
  methods: {
    startBingo() {
      this.$emit("on-settings-selected", {
        lineProfit: this.lineProfit,
        bingoProfit: this.bingoProfit,
        frequency: this.frequency
      });
    }
  },
  computed: {
    areSettingsValid() {
      return this.lineProfit > 0 && this.bingoProfit > 0 && this.frequency > 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.bingo-settings-wrapper {
  &__form {
    label {
      display: inline-block;
      width: 200px;
    }

    &__field + &__field {
      font-size: 18px;
      margin-top: 1rem;
    }

    input {
      min-height: 30px;
    }
  }
  &__button {
    margin-top: 2rem;
    padding: 0.5rem 2rem;
    min-height: 48px;
  }
}
</style>
