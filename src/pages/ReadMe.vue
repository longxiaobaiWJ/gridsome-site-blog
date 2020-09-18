<template>
  <Layout>
    <div style="min-height: 600px" v-loading="loading">
      <el-card shadow="never">
        <div text class="markdown-body" v-if="text"></div>
        <div class="empty-style" v-else>
          <font style="font-size: 30px;color:#dddddd ">
            <b>◔ ‸◔？没有博客介绍</b>
          </font>
        </div>
      </el-card>
    </div>
  </Layout>
</template>

<script>
  export default {
    name: "ReadMePage",
    metaInfo: {
      title: "About us",
    },
    data() {
      return {
        loading: false,
        text: "",
      };
    },
  };
</script>
