<template>
    <el-avatar :size="size" :src="avatar"></el-avatar>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 65
    }
  },
  computed: {
    remoteAvatar () {
      const domain = ''
      return domain + this.avatar
    }
  }
}
</script>
