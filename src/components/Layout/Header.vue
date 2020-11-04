<template>
  <div class="header-container">
    <SettingButton :icon="infoIcon" :size="18" class="setting-btn" @click="showInfo = !showInfo" />
    <SettingButton :icon="settingIcon" class="setting-btn" @click="showSettings = !showSettings" />
    <SettingButton :icon="earthIcon" :size="24" class="setting-btn" @click="showTranslation = !showTranslation" />
    <SettingButton :icon="moreIcon" :size="18" style="transform: rotate(90deg)" class="setting-btn" @click="showMore = !showMore" />
  </div>
</template>

<script>
import SettingButton from './SettingButton.vue'

import infoIcon from '../../assets/info.svg'
import settingIcon from '../../assets/settings.svg'
import earthIcon from '../../assets/earth.svg'
import moreIcon from '../../assets/more.svg'

export default {
  components: {
    SettingButton
  },
  data () {
    return {
      showInfo: false,
      showSettings: false,
      showTranslation: false,
      showMore: false,
      infoIcon: infoIcon,
      settingIcon: settingIcon,
      earthIcon: earthIcon,
      moreIcon: moreIcon
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  padding-top: 32px;
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  right: 30px;
}

.setting-btn {
  margin-left: 5px;
}
</style>
