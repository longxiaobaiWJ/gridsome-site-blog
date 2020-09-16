<template>
  <div class="layout">
    <section
      class="page-header"
      style="background-image: linear-gradient(120deg, rgb(38, 144, 249), rgb(252, 45, 45)); color: rgb(255, 255, 255);"
    >
      <div style="position: absolute; top: 20px; right: 20px; z-index: 2;">
        <el-tooltip effect="dark" :content="fullButton.full?'退出':'全屏'" placement="bottom-end">
          <el-button @click="full" :icon="fullButton.full?'el-icon-close':'el-icon-rank'" circle></el-button>
        </el-tooltip>
      </div>
      <div class="font-size-section">
        <div
          v-for="(item,index) in randomIcon"
          :key="'ri'+index"
          :style="'position:absolute; top:'+item.top+'px; left:'+item.left+'px; z-index:1;'"
        >
          <font :style="'font-size: '+item.size+'px;color:#fff;'">
            <b>♪</b>
          </font>
        </div>
      </div>
      <h1 class="project-name">Laziji</h1>
      <h2 class="project-tagline">欢迎来到辣子鸡的个人博客。</h2>
      <a href="https://github.com/longxiaobaiWJ" target="_blank" class="btn">GitHub主页</a>
      <a href="https://github.com/longxiaobaiWJ/gridsome-site-blog" target="_blank" class="btn">博客源码</a>
    </section>
    <div style="position: relative; z-index: 2; margin: -30px auto auto; width: 64rem;">
      <card-view></card-view>
    </div>

    <section class="main-content">
      <div class="el-row">
        <div class="el-col el-col-6" style="padding-right: 10px;">
          <sidebar></sidebar>
        </div>
        <div class="el-col el-col-18" style="padding-left: 10px;">
          <slot />
        </div>
      </div>
    </section>
    <section class="foot">
      <foot-view></foot-view>
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import FootView from "@/components/FootView.vue";
import CardView from "@/components/CardView.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  data() {
    return {
      music: {
        isPlay: false,
        currentTime: 0,
        maxTime: 0,
        volume: 100,
      },
      fullButton: {
        full: false,
      },
      topbar: {
        active: "",
      },
      randomIcon: [],
    };
  },
  components: {
    FootView,
    CardView,
    Sidebar
  },
  methods: {
    full() {},
    randomInt(s, e) {
      let d = e - s;
      if (d < 0) {
        return s;
      }
      let r = Math.random() * d + s;
      r = parseInt(r, 10);
      return r;
    },
    siteCreate() {
      let width = window.innerWidth;
      for (let i = 0; i < 12; i++) {
        let temp = {};
        let left = this.randomInt(10, width - 310);
        if (left > width / 2 - 150) {
          left += 300;
        }
        temp["left"] = left;
        temp["top"] = this.randomInt(20, 300);
        temp["size"] = this.randomInt(20, 40);
        this.randomIcon.push(temp);
      }
    },
  },
  mounted() {
    this.siteCreate();
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
}
</style>
