<template>
  <div class="user-info-container">
    <Avatar :avatar="user.avatar" />
    <span class="username">{{ user.name }}</span>
  </div>
</template>

<script>
import Avatar from './Avatar.vue'

export default {
  components: {
    Avatar
  },
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
.user-info-container {
  height: fit-content;
  display: flex;
  align-items: center;
}

.username {
  margin-left: 15px;
  font-weight: 500;
}
</style>
