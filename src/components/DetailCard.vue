<template>
  <el-row style="min-height: 200px;">
    <el-col :span="8" v-for="(item) in listShow" :key="item.id" style="padding: 10px">
      <el-card shadow="hover" class="shadow-style">
        <i class="el-icon-star-off"></i>&emsp;
        <a @click="onClickRoute(item.name)" class="href-style">{{item.name}}</a>
        <br />
        <i class="el-icon-message"></i>&emsp;
        <a :href="item.htmlUrl" target="_blank" class="href-style">TA的主页</a>
        <br />
        <img :src="item.avatarUrl" class="avatar-style" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "DetailCard",
    props: {
      listShow: {
        type: Array,
        default: [],
      },
    },
    methods: {
      onClickRoute(name) {
        this.$router.push(`/user/social/details/${name}`);
      },
    },
  };
</script>

<style scoped>
.avatar-style {
  width: 100%;
  border-radius: 5px;
  margin-top: 5px;
}
</style>