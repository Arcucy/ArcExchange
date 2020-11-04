<template>
  <div class="navigation-container">
    <UserInfoHeader :user="user" />
    <el-select v-model='value' placeholder='请选择' class="contract-input">
      <el-option
        v-for='item in options'
        :key='item.value'
        :label='item.label'
        :value='item.value'
      >
      </el-option>
    </el-select>
    <SwitchCard
      v-for="(item, index) in navigation"
      :key="index"
      :item="item"
      :active="$route.name === item.id"
    />
    <div class="spacer"></div>
    <Footer />
  </div>
</template>

<script>
import UserInfoHeader from './User/UserInfoHeader.vue'
import SwitchCard from './Navigation/SwitchCard.vue'
import Footer from './Layout/Footer.vue'

import nekoAvatar from '../assets/neko-avatar.jpg'

import exchangeIcon from '../assets/exchange.png'
import assetsIcon from '../assets/assets.svg'
import transactionIcon from '../assets/transactions.svg'
import analysisIcon from '../assets/chart.svg'

export default {
  components: {
    UserInfoHeader,
    SwitchCard,
    Footer
  },
  data () {
    return {
      user: {
        name: 'Ayaka Neko',
        avatar: nekoAvatar
      },
      navigation: [
        {
          id: 'Exchange',
          icon: exchangeIcon,
          title: 'Exchange',
          desp: 'Exchange AR or PST to your favorite currency',
          color: '#0AD2F3',
          backgroundColor: '#E0F9FD'
        },
        {
          id: 'Assets',
          icon: assetsIcon,
          title: 'Assets',
          desp: 'Control you current assets in your hold or mint more token',
          color: '#675CF7',
          backgroundColor: '#EBE9FD'
        },
        {
          id: 'Transaction',
          icon: transactionIcon,
          title: 'Transaction',
          desp: 'Payment history and manage your payment method',
          color: '#E56D9B',
          backgroundColor: '#FFE9F0'
        },
        {
          id: 'Analysis',
          icon: analysisIcon,
          title: 'Analysis',
          desp: 'View your analysis chart to learn more about the flow',
          color: '#FFB661',
          backgroundColor: '#FFF6E9'
        }
      ],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  mounted () {
    window.VueTest = this
  }
}
</script>

<style lang="less" scoped>
.navigation-container {
  display: flex;
  flex-direction: column;
  width: 370px;
  padding: 32px 31px 0;
  min-height: 100%;
  height: 100%;
}

.spacer {
  flex: 1;
}

.contract-input {
  width: 370px;
  padding-top: 17px;
  /deep/ input {
    height: 37px;
    border: 2px solid #E56D9B;
  }
  /deep/ .el-input__suffix {
    .el-input__suffix-inner {
      i {
        padding-top: 2px;
        color: #E56D9B;
      }
    }
  }
}
</style>
