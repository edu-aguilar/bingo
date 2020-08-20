<template>
  <div class="view bingo-view">
    <div>container1</div>
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
}
</style>
