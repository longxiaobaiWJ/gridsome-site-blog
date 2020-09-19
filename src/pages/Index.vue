<template>
  <Layout>
    <section>
      <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="min-height: 400px" v-if="blog.id">
          <div slot="header">
            <span>{{blog.title}}</span>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
            发布 {{blog.created_at}}
            <br>
            更新 {{blog.updated_at}}
          </div>
          <div
            style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px"
          >
            <pre style="font-family: '微软雅黑'">{{blog.description}}</pre>
          </div>
          <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
        </el-card>
        <el-card shadow="never" class="empty-style" v-else>
          <font style="font-size: 30px;color:#dddddd ">
            <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
          </font>
        </el-card>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  allBlog (perPage: 1, page: 1) @paginate {
    edges {
      node {
        id,
        description,
        url,
        title
      }
    }
  }
}
</page-query>

<script>
import axios from "axios";

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
        created_at: "",
        updated_at: "",
      },
    };
  },
  mounted() {
    if (this.$page && this.$page.allBlog.edges) {
      const payload = this.$page.allBlog.edges[0];
      this.loadSource(payload);
    }
  },
  methods: {
    async loadSource(payload) {
      try {
        const { data } = await axios.get(
          `https://api.github.com/gists/${payload.node.id}`
        );
        const { files = {} } = data;
        for (const key in files) {
          data["title"] = key;
          data["content"] = files[key]["content"];
        }
        this.blog = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
