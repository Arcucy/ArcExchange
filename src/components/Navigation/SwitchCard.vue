<template>
  <router-link :to="{ name: item.id }" class="switchcard-container" :style="`color: ${item.color};`" :class="active && 'active'">
    <div class="title">
      <img :src="item.icon" :class="item.title === 'Exchange' ? 'title-icon-image' : 'title-icon-svg'" />
      <span class="title-text">
        {{ item.title }}
      </span>
    </div>
    <div class="description">
      {{ item.desp }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$el.style.setProperty('--bg-color', this.item.backgroundColor)
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}

.switchcard-container {
  height: 78px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: #F8F8F8;
  padding: 12px 15px 15px;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  &.active {
    background-color: var(--bg-color);
    &:hover {
      background-color: var(--bg-color);
      filter: brightness(1.02);
    }
  }
  &:hover {
    background-color: var(--bg-color);
    filter: brightness(0.98);
  }

}

.title {
  margin: 0;
  display: flex;
  align-items: center;
  height: 30px;
  &-icon-image {
    width: 27px;
    margin-right: 7px;
  }
  &-icon-svg {
    height: 30px;
    margin-right: 5px;
  }
  &-text {
    font-size: 15px;
    font-weight: 500;
  }
}

.description {
  font-size: 12px;
  margin: 4px 0 0;
  font-weight: 500;
}
</style>
