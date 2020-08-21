<template>
  <div class="bingo-control-wrapper">
    <ul class="bingo-control-wrapper__options">
      <li><button :disabled="isRunning" @click="onStart">Start</button></li>
      <li><button :disabled="!isRunning" @click="onPause">Pause</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BingoControl",
  props: {
    isRunning: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onStart() {
      this.$emit("on-start-bingo");
    },
    onPause() {
      this.$emit("on-pause-bingo");
    }
  }
};
</script>

<style lang="scss" scoped>
.bingo-control-wrapper {
  &__options {
    list-style: none;
    display: flex;

    li + li {
      margin-left: 2rem;
    }
  }
}
</style>
