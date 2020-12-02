<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 如果使用wrapper，有可能和其他组件的自带同名wrapper冲突
    // this.scroll = new BScroll(document.querySelector('.wrapper'), {});
    // click默认是false，导致无法点击
    this.scroll = new BScroll(this.$refs.wrapper, { click: true });
  },
};
</script>

<style scoped>
</style>