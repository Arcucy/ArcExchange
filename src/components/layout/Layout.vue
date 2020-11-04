<template>
  <div class="container">
    <Navigation />
    <Header />
  </div>
</template>

<script>
import Navigation from '../Navigation.vue'
import Header from '../Layout/Header.vue'

export default {
  components: {
    Navigation,
    Header
  }
}
</script>

<style lang="less" scoped>
.container {
  min-height: 100%;
  height: 100%;
  display: flex;
}
</style>
