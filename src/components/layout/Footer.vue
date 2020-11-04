<template>
  <div class="footer-container">
    <div class="footer-info">
      <div class="footer-info-text">
        <p>Version <span class="pink">1.0.0 (24205551)</span></p>
        <p style="margin-top: 2px;">Developed by <span class="pink">Arcucy</span> as part of the <span class="pink">Project ArcLight</span></p>
      </div>
    </div>
    <div class="footer-brand">
      <img :src="logo" class="logo"/>
      <div class="title">
        <div class="title-main">ArcExchange</div>
        <div class="title-by">by Arcucy</div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../assets/logo.png'

export default {
  data () {
    return {
      logo: logo
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  bottom: 30px;
  position: sticky;
}

.footer-brand {
  display: flex;
  align-items: center;
  margin-top: 18px;
}

.footer-info {
  height: 54px;
  background-color: #FDF2F6;
  border-radius: 15px;
  padding: 13px;
  box-sizing: border-box;
  &-text {
    font-size: 12px;
    p {
      margin: 0px;
    }
  }
}

.title {
  margin-top: -5px;
  margin-left: 8px;
  color: #E56D9B;
}

.title-main {
  font-size: 22px;
}

.title-by {
  font-size: 12px;
}

.logo {
  height: 65px;
  width: 65px;
}

.pink {
  color: #E56D9B;
}
</style>
