<template>
  <div class="view bingo-view">
    <div class="bingo-view__bingo-data-wrapper">
      <p class="bingo-view__bingo-data-wrapper__current-num">30</p>
      <ul class="bingo-view__bingo-data-wrapper__last-nums">
        <li>11</li>
        <li>2</li>
        <li>67</li>
        <li>34</li>
        <li>87</li>
      </ul>
      <div class="bingo-view__bingo-data-wrapper__bingo-info">
        <p>linea: 2€</p>
        <p>bingo: 5€</p>
        <p>premio total: 7€</p>
      </div>
    </div>
    <bingo-table></bingo-table>
  </div>
</template>

<script>
import bingoTable from "@/components/bingoTable.vue";
export default {
  components: {
    bingoTable
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
