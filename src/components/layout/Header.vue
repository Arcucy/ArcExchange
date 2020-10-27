<template>
  <div class="header-container">
    <router-link to="./" class="header-icon-link">
      <img :src="logo" class="header-icon" />
    </router-link>
    <div class="spacer"></div>
    <el-menu
      :default-active="activeIndex1"
      class="login-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="2">
        <template slot="title">Account</template>
        <el-menu-item v-if="!isLoggedIn" index="1-1">Login</el-menu-item>
        <el-menu-item v-if="!isLoggedIn" index="1-2">Register</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

import logo from '@/assets/logo.png'

export default {
  props: {
    inProcess: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeIndex: '1',
      logo: logo
    }
  }
}
</script>

<style lang="less" scoped>
.header-icon {
  margin-left: 20px;
  margin-right: 20px;
  height: 50px;
  object-fit: cover;
  text-align: left;
}
.spacer {
  flex: 1;
}
.header-menu {
  flex: 1;
}
.header-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.text-link {
  text-decoration: none;
  color: black;
}
/deep/ .el-menu-item {
  font-size: 16px;
  font-weight: 700;
}
/deep/ .el-submenu__title {
  font-size: 16px;
  font-weight: 700;
}
</style>

<style lang="less">
.el-menu--popup-bottom-start {
  text-align: center;
}
.el-menu--popup {
  min-width: 100px !important;
}
</style>
