<template>
  <ul class="bingo-table-wrapper">
    <li class="bingo-table-item" v-for="(item, index) in items" :key="index">
      <span>{{ index + 1 }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BingoTable",
  data() {
    return {
      items: new Array(90)
    };
  }
};
</script>

<style lang="scss" scoped>
.bingo-table-wrapper {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(10, 70px);
  grid-template-rows: repeat(9, 70px);
  padding: 0;

  .bingo-table-item {
    border-radius: 100%;
    border: solid 1px red;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
  }
}
</style>
