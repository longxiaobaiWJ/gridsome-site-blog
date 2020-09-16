<template>
  <div class="sidebar-view">
    <div class="el-card is-never-shadow">
      <!---->
      <div class="el-card__body">
        <ul role="menubar" class="el-menu">
          <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
            <g-link to="/">
              <i class="el-icon-star-off"></i>
              <span>最新动态</span>
            </g-link>
          </li>
          <li
            role="menuitem"
            tabindex="-1"
            class="el-menu-item is-active"
            style="padding-left: 20px;"
          >
            <g-link to="/social-concact">
              <i class="el-icon-mobile-phone"></i>
              <span>社交圈</span>
            </g-link>
          </li>
          <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
            <g-link to="/blog">
              <i class="el-icon-edit-outline"></i>
              <span>博客列表</span>
            </g-link>
          </li>
          <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
            <g-link to="/project">
              <i class="el-icon-service"></i>
              <span>开源项目</span>
            </g-link>
          </li>
          <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
            <g-link to="/helper">
              <i class="el-icon-printer"></i>
              <span>使用帮助</span>
            </g-link>
          </li>
          <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
            <i class="el-icon-document"></i>
            <span>README.md</span>
          </li>
        </ul>
      </div>
    </div>
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
};
</script>