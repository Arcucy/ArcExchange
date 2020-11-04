<template>
  <div class="button-container">
    <img :src="icon" class="icon" :style="`height: ${size}px; width: ${size}px;`" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 25
    }
  }
}
</script>

<style lang="less" scoped>
.button-container {
  height: 30px;
  width: 30px;
  border-radius: 13px;
  border: 2px solid #E56D9B;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #fff4f4;
  }
  &:active {
    background-color: #ffeaea;
  }
}

.icon {
  height: 25px;
  width: 25px;
}
</style>
