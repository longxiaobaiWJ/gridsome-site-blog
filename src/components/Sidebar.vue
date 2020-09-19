<template>
  <div class="sidebar-view">
    <el-card shadow="never">
      <el-menu :default-active="active">
        <el-menu-item v-for="item in visitRouters" :key="item.path" :index="item.path" >
          <g-link class="route-class" :to="item.path" tag="span" :exact="dataSolve(item.path)" active-class="route-active">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </g-link>
        </el-menu-item>
      </el-menu>
    </el-card>
    <el-card shadow="never" style="margin-top: 20px;text-align: center">
      <div v-if="!token" style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
        <el-tag type="danger" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token未绑定&nbsp;&nbsp;
        <el-button type="text" @click="openTokenDialog">绑定</el-button>
      </div>
      <div v-if="token" style="font-size: 0.9rem;line-height: 1.5;color: #303133;">
        <el-tag type="success" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token已绑定&nbsp;&nbsp;
        <el-button type="text" @click="cancellation">注销</el-button>
      </div>
      <div style="margin-top: 10px;text-align: left">
        <el-alert title="Token获取" type="info" :description="description" :closable="false"></el-alert>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        visitRouters: [
          {
            path: "/",
            title: "最新动态",
            icon: "el-icon-star-off",
          },
          {
            path: "/social-concact",
            title: "社交圈",
            icon: "el-icon-mobile-phone",
          },
          {
            path: "/blog",
            title: "博客列表",
            icon: "el-icon-edit-outline",
          },
          {
            path: "/project",
            title: "开源项目",
            icon: "el-icon-service",
          },
          {
            path: "/helper",
            title: "使用帮助",
            icon: "el-icon-printer",
          },
          {
            path: "/read-me",
            title: "README.md",
            icon: "el-icon-document",
          },
        ],
        active: '',
        token: "",
        description: `在 github-> settings-> developerSettings-> personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md`,
      };
    },
    methods: {
      openTokenDialog() {},
      cancellation() {},
      dataSolve(path) {
        return '/' === path
      }
    },
  };
</script>

<style scoped>
.route-class{
  display: inline-block;
  width: 100%;
}

.route-active {
  color: #409eff;
}
</style>
