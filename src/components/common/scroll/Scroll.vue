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
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 1.创建BScroll对象
    // 如果使用wrapper，有可能和其他组件的自带同名wrapper冲突
    // this.scroll = new BScroll(document.querySelector('.wrapper'), {});
    // click默认是false，导致无法点击
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    // scrollTo为Better Scroll自带的一个函数，前面两个代表坐标，后面一个代表时间
    // this.scroll.scrollTo(0, 0, 500);

    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    // 3.监听上拉事件
   /*  this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    }); */
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // 同时判断scroll对象是否有值
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      // better-scroll自带的finishPullUp
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      console.log('---');
      this.scroll && this.scroll.refresh( )
    }
  },
};
</script>

<style scoped>
</style>

