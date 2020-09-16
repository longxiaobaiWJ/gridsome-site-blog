<template>
  <div class="sidebar-view">
    <div class="el-card is-never-shadow">
      <div class="el-card__body">
        <ul role="menubar" class="el-menu">
          <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
            <g-link to="/">
              <i class="el-icon-star-off"></i>
              <span>最新动态</span>
            </g-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- <el-card shadow="never">
        <el-menu :default-active="active" @select="onSelect">
            <el-menu-item v-for="item in constantRouterMap"
                :key="item.path" :index="item.path">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
        </el-menu>
    </el-card> -->
    <div class="el-card is-never-shadow" style="margin-top: 20px; text-align: center;">
      <!---->
      <div class="el-card__body">
        <div style="font-size: 0.9rem; line-height: 1.5; color: rgb(96, 108, 113);">
          <span class="el-tag el-tag--danger el-tag--small">
            &nbsp;
            <!---->
          </span>&nbsp;&nbsp; Token未绑定&nbsp;&nbsp;
          <button type="button" class="el-button el-button--text">
            <!---->
            <!---->
            <span>绑定</span>
          </button>
        </div>
        <!---->
        <div style="margin-top: 10px; text-align: left;">
          <div role="alert" class="el-alert el-alert--info">
            <!---->
            <div class="el-alert__content">
              <span class="el-alert__title is-bold">Token获取</span>
              <p
                class="el-alert__description"
              >在 github-&gt; settings-&gt; developerSettings-&gt; personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md</p>
              <i class="el-alert__closebtn el-icon-close" style="display: none;"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="el-dialog__wrapper" style="display: none;">
        <div class="el-dialog" style="width: 500px; margin-top: 15vh;">
          <div class="el-dialog__header">
            <span class="el-dialog__title">绑定Token</span>
            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <!---->
          <div class="el-dialog__footer">
            <span class="dialog-footer">
              <button type="button" class="el-button el-button--default">
                <!---->
                <!---->
                <span>取 消</span>
              </button>
              <button type="button" class="el-button el-button--primary">
                <!---->
                <!---->
                <span>确 定</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data () {
    return {
      visitRouters: [
        {
          path: '/',
          name: '最新动态',
          icon: 'el-icon-star-off'
        },
        {
          path: '/social-concact',
          name: '社交圈',
          icon: 'el-icon-mobile-phone'
        },
        {
          path: '/blog',
          name: '博客列表',
          icon: 'el-icon-edit-outline'
        },
        {
          path: '/project',
          name: '开源项目',
          icon: 'el-icon-service'
        },
        {
          path: '/helper',
          name: '使用帮助',
          icon: 'el-icon-printer'
        },
        {
          path: '/read-me',
          name: 'README.md',
          icon: 'el-icon-document'
        },
      ]
    }
  }
};
</script>