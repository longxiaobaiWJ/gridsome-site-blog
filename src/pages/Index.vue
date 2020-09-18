<template>
  <Layout>
    <section>
      <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="min-height: 400px" v-if="blog.id">
          <div slot="header">
            <span>{{blog.title}}</span>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
            发布 {{blog.createTime}}
            <br />
            更新 {{blog.updateTime}}
          </div>
          <div
            style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px"
          >
            <pre style="font-family: '微软雅黑'">{{blog.description}}</pre>
          </div>
          <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
        </el-card>
        <el-card
          shadow="never"
          class="empty-style"
          v-else
        >
          <font style="font-size: 30px;color:#dddddd ">
            <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
          </font>
        </el-card>
      </div>
    </section>
  </Layout>
</template>

<script>
  export default {
    name: "HomePage",
    metaInfo: {
      title: "Hello, world!",
    },
    data() {
      return {
        query: {
          page: 1,
          pageSize: 1,
        },
        loading: false,
        blog: {
          id: "",
          title: "",
          content: "",
          description: "",
          createTime: "",
          updateTime: "",
        },
      };
    },
  };
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
