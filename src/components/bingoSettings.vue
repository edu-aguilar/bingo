<template>
  <div class="bingo-settings-wrapper">
    <form class="bingo-settings-wrapper__form">
      <div>
        <label for="linePrice">Cuantía línea: </label>
        <input id="linePrice" type="number" v-model="linePrice" />
      </div>
      <div>
        <label for="bingoPrice">Cuantía bingo: </label>
        <input id="bingoPrice" type="number" v-model="bingoPrice" />
      </div>
      <div>
        <label for="timing">Tiempo entre números: </label>
        <input id="timing" type="number" v-model="bingoFrequency" />
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
      linePrice: 0,
      bingoPrice: 0,
      bingoFrequency: 4000
    };
  },
  methods: {
    startBingo() {
      this.$emit("on-settings-selected", {
        linePrice: this.linePrice,
        bingoPrice: this.bingoPrice,
        bingoFrequency: this.bingoFrequency
      });
    }
  },
  computed: {
    areSettingsValid() {
      return (
        this.linePrice > 0 && this.bingoPrice > 0 && this.bingoFrequency > 0
      );
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
  }
  &__button {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
  }
}
</style>
