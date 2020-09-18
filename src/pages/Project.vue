<template>
  <Layout>
    <section>
      <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="margin-bottom: 20px">
          <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
          <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
          <el-button icon="el-icon-share" type="warning" style="margin-left: 10px" plain circle></el-button>
        </el-card>

        <div v-if="projects.length > 0"></div>
        <el-card shadow="never" class="empty-style" v-else>
          <font style="font-size: 30px;color:#dddddd ">
            <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
          </font>
        </el-card>
      </div>
    </section>
  </Layout>
</template>

<script>
  export default {
    name: "ProjectPage",
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
        projects: [],
      };
    },
    methods: {
      search() {},
    },
  };
</script>