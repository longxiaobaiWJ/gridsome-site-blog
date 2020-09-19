<template>
  <Layout>
    <section>
      <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="margin-bottom: 20px">
          <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
          <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
          <el-button style="margin-left: 10px" icon="el-icon-share" type="warning" plain circle></el-button>
          <el-button
            type="primary"
            icon="el-icon-edit"
            round
            plain
            style="float: right;"
            @click="blogCreate"
          >写博文</el-button>
        </el-card>
        <div v-if="$page.allBlog && $page.allBlog.edges.length > 0">
          <el-card
            shadow="hover"
            v-for="(edge) in $page.allBlog.edges"
            :key="edge.node.id"
            style="margin-bottom: 20px"
          >
            <div slot="header">
              <el-row>
                <el-col :span="16">
                  <span>
                    <a class="href-style">
                      <i class="el-icon-edit-outline"></i>
                      &nbsp;&nbsp; {{edge.node.title}}
                    </a>
                  </span>
                </el-col>
                <el-col :span="8">
                  <div style="text-align: right;">
                    <el-button style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                    <el-button style="padding: 3px 0" type="text" icon="el-icon-edit" v-if="token"></el-button>
                    <el-button
                      style="padding: 3px 0"
                      type="text"
                      icon="el-icon-delete"
                      v-if="token"
                    ></el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div style="updtate-style">最近更新 {{edge.node.updated_at}}</div>
            <div class="description-style">{{edge.node.description}}</div>
          </el-card>
          <div style="text-align: center">
            <el-pagination
             @current-change="onChangePages"
              layout="prev, pager, next"
              :current-page.sync="$page.allBlog.pageInfo.currentPage"
              :page-size="5"
              :total="$page.allBlog.pageInfo.totalPages * 5"
            ></el-pagination>
          </div>
        </div>
        <el-card shadow="never" class="empty-style" v-else>
          <font style="font-size: 30px;color:#dddddd;">
            <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
          </font>
        </el-card>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allBlog (perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
export default {
  name: "BlogPage",
  metaInfo: {
    title: "About us",
  },
  data() {
    return {
      query: {
        page: 1,
        pageSize: 5,
        pageNumber: 1,
      },
      loading: false,
      searchKey: "",
      blogs: [],
    };
  },
  methods: {
    blogCreate() {},
    search() {},
    onChangePages(page) {
      let path = `/blog`;
      if(page !== 1) path =`${path}/${page}` ;
      this.$router.push({ path: path });
    },
  },
};
</script>

<style scoped>
.update-style {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #606c71;
}

.description-style {
  font-size: 1.1rem;
  line-height: 1.5;
  color: #303133;
  padding: 10px 0px 0px 0px;
}
</style>