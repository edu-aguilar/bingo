<template>
  <ul class="bingo-table-wrapper">
    <li
      class="bingo-table-item"
      v-for="(item, index) in items"
      :key="index"
      :id="[`${index + 1}`]"
    >
      <span class="number">{{ index + 1 }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BingoTable",
  props: {
    lastNumber: {
      required: true
    }
  },
  data() {
    return {
      items: new Array(90)
    };
  },
  watch: {
    lastNumber: function(newNumber) {
      document.getElementById(newNumber).classList.add("filled");
    }
  }
};
</script>

<style lang="scss" scoped>
.bingo-table-wrapper {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(10, 90px);
  grid-template-rows: repeat(9, 90px);
  padding: 0;

  .bingo-table-item {
    border-radius: 100%;
    border: solid 1px red;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    font-weight: bold;

    .number {
      font-size: 30px;
    }

    &.filled {
      background-color: lightblue;
    }
  }
}
</style>
