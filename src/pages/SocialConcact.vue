<template>
  <Layout>
    <section>
      <el-card shadow="never" class="caps-style">
        <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
          <el-tab-pane :label="'粉丝 ' + followersTotal" name="followers" style="padding: 5px">
            <div v-loading="followers.loading">
              <div v-if="followers.list.length">
                <detail-card :list-show="followers.list"></detail-card>
              </div>
              <div class="empty-style" v-else>
                <font style="font-size: 30px;color:#dddddd ">
                  <b>(￢_￢) 没有一个粉丝</b>
                </font>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="'关注 '+ followingTotal" name="following" style="padding: 5px">
            <div v-loading="following.loading">
              <div v-if="following.list.length">
                <detail-card :list-show="following.list"></detail-card>
              </div>
              <div class="empty-style" v-else>
                <font style="font-size: 30px;color:#dddddd ">
                  <b>(￢_￢) 还没有关注一个人</b>
                </font>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </section>
  </Layout>
</template>

<script>
  import DetailCard from "@/components/DetailCard.vue";

  export default {
    name: "SocialConcact",
    metaInfo: {
      title: "About us",
    },
    data() {
      return {
        activeTab: "followers",
        followers: {
          query: {
            page: 1,
            pageSize: 9,
            pageNumber: 1,
          },
          loading: false,
          list: [],
        },
        following: {
          query: {
            page: 1,
            pageSize: 9,
            pageNumber: 1,
          },
          loading: false,
          list: [],
        },
        followersTotal: 0,
        followingTotal: 0,
      };
    },
    components: {
      DetailCard,
    },
    methods: {
      onSelect() {
        if ("followers" === this.activeTab) {
          this.listFollowers();
        } else {
          this.listFollowing();
        }
      },
    },
  };
</script>

<style scoped>
.caps-style {
  min-height: 400px;
  margin-bottom: 20px;
  padding: 0px 0px 20px 0px;
}

.shadow-style {
  font-size: 13px;
  color: #606266;
  line-height: 20px;
}
</style>