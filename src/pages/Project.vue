<template>
  <Layout>
    <section>
      <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="margin-bottom: 20px">
          <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
          <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
          <el-button icon="el-icon-share" type="warning" style="margin-left: 10px" plain circle></el-button>
        </el-card>
        <div v-if="$page.allRepos && $page.allRepos.edges.length > 0">
          <el-card
            shadow="hover"
            v-for="(edge) in $page.allRepos.edges"
            :key="edge.node.id"
            style="margin-bottom: 20px"
          >
            <div slot="header">
              <el-row>
                <el-col :span="16">
                  <span>
                    <a
                      style="text-decoration:none;cursor:pointer;"
                      :href="edge.node.html_url"
                      target="_blank"
                    >
                      <i class="el-icon-service"></i>
                      &nbsp;&nbsp; {{edge.node.name}}
                    </a>
                  </span>
                </el-col>
                <el-col :span="8">
                  <div style="text-align: right;">
                    <el-button style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                    <el-button style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div
              style="font-size: 0.9rem;line-height: 1.5;color: #606c71;"
            >最近更新 {{edge.node.updated_at}}</div>
            <div
              style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px"
            >{{edge.node.description}}</div>
            <div style="font-size: 1.1rem;color: #303133;padding: 10px 0px 0px 0px">
              <el-row>
                <el-col :span="16" style="padding-top: 5px">
                  <el-tooltip
                    effect="dark"
                    :content="'star '+edge.node.stargazers_count"
                    placement="bottom"
                  >
                    <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                  </el-tooltip>
                  {{edge.node.stargazers_count}}
                  <el-tooltip
                    effect="dark"
                    :content="'watch '+edge.node.watchers_count"
                    placement="bottom"
                  >
                    <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                  </el-tooltip>
                  {{edge.node.watchers_count}}
                  <el-tooltip
                    effect="dark"
                    :content="'fork '+edge.node.forks_count"
                    placement="bottom"
                  >
                    <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                  </el-tooltip>
                  {{edge.node.forks_count}}
                </el-col>
                <el-col :span="8" style="text-align: right;">
                  <el-tag
                    size="small"
                    type="danger"
                    v-if="edge.node.license"
                  >{{edge.node.license.spdx_id}}</el-tag>
                  <el-tag
                    size="small"
                    type="success"
                    v-if="edge.node.language"
                    style="margin: 0 4px;"
                  >{{edge.node.language}}</el-tag>
                </el-col>
              </el-row>
            </div>
          </el-card>
          <div style="text-align: center">
            <el-pagination
              @current-change="onChangePages"
              layout="prev, pager, next"
              :current-page.sync="$page.allRepos.pageInfo.currentPage"
              :page-size="5"
              :total="$page.allRepos.pageInfo.totalPages * 5"
            ></el-pagination>
          </div>
        </div>
        <el-card shadow="never" class="empty-style" v-else>
          <font style="font-size: 30px;color:#dddddd ">
            <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
          </font>
        </el-card>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allRepos (perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id,
        name,
        html_url,
        description,
        language,
				license {
          spdx_id
        },
        updated_at,
        stargazers_count,
        forks_count,
        watchers_count
      }
    }
  }
}
</page-query>

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
    onChangePages(page) {
      let path = `/project`;
      if(page !== 1) path =`${path}/${page}` ;
      this.$router.push({ path: path });
    },
  },
  mounted() {
  },
};
</script>