<template>
  <el-card shadow="never" :body-style="{ padding: '0px' }">
    <el-row>
      <el-col :span="10">
        <el-menu
          @select="selectTopbar"
          :default-active="topbar.active"
          mode="horizontal"
          menu-trigger="click"
        >
          <el-submenu index="#more">
            <template slot="title">了解博主</template>
            <el-menu-item index="#githubHome">github主页</el-menu-item>
            <el-menu-item index="#blog">其他博客</el-menu-item>
          </el-submenu>
          <el-submenu index="#webSites" v-if="webSites.length>0">
            <template slot="title">其他网站</template>
            <el-menu-item
              :index="'#webSites-'+index"
              v-for="(item,index) in webSites"
              :key="'#webSites'+index"
            >{{item.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="8" style="text-align: center;padding: 12px 0px 0px 10px">
        <el-row>
          <el-col :span="4">
            <el-popover placement="top" trigger="hover">
              <div style="text-align: center">
                <el-progress color="#67C23A" type="circle" :percentage="music.volume"></el-progress>
                <br />
                <el-button @click="changeVolume(-10)" icon="el-icon-minus" circle></el-button>
                <el-button @click="changeVolume(10)" icon="el-icon-plus" circle></el-button>
              </div>

              <el-button
                @click="playMusic"
                id="play"
                slot="reference"
                :icon="music.isPlay?'el-icon-refresh':'el-icon-caret-right'"
                circle
              ></el-button>
            </el-popover>
          </el-col>
          <el-col :span="14" style="padding-left: 20px">
            <!-- :format-tooltip="$util.formatTime" -->
            <el-slider
              @change="changeTime"
              :max="music.maxTime"
              v-model="music.currentTime"
              style="width: 100%;"
            ></el-slider>
          </el-col>
          <el-col
            :span="6"
            style="padding: 9px 0px 0px 10px;color:#909399;font-size: 13px"
          >
          <!-- {{$util.formatTime(music.currentTime)}}/{{$util.formatTime(music.maxTime)}} -->
          6/9
          </el-col>
        </el-row>

        <audio ref="music" loop autoplay v-if="audioAutoPlay">
          <source :src="audioUrl" type="audio/mpeg" />
        </audio>
        <audio ref="music" loop v-else>
          <source :src="audioUrl" type="audio/mpeg" />
        </audio>
			</el-col>
      <el-col :span="4" style="text-align: right;">
        <div style="font-size: 20px;color:#606266;margin-top: 5px">
          <b>{{githubUsername}}</b>
        </div>
        <div style="color:#606266;">
          <i class="el-icon-location"></i>
          &nbsp;{{location?location:'未填写地址'}}
          <br />
        </div>
			</el-col>
      <el-col :span="2" style="text-align: center;">
        <img
          v-popover:bigAvatar
          :src="avatarUrl"
          style="margin-top: 4px;margin-right: 10px;width:52px; height:52px; border-radius:5px; border: 1px solid #EBEEF5"
        />
        <el-popover
          ref="bigAvatar"
          placement="top-start"
          :title="githubUsername"
          width="200"
          trigger="hover"
        >
          <i class="el-icon-star-on"></i>
          &emsp;{{name}}
          <br />
          <i class="el-icon-location"></i>
          &emsp;{{location}}
          <br />
          <img :src="avatarUrl" style="width: 200px;height: 200px;" />
        </el-popover>
			</el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "CardView",
  data () {
    return {
      topbar: {
        active: "",
      },
      webSites: [],
      music: {
        isPlay: false,
        currentTime: 0,
        maxTime: 100,
        volume: 100
      },
      githubUsername: 'longxiaobaiWJ',
      name: 'osa',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/23134712?s=60&v=4',
      audioAutoPlay: false,
      audioUrl: 'https://m10.music.126.net/20200917000311/0ed1897037c512f547f84e79d96f7597/ymusic/0758/550f/545f/028d3b9421be8425d60dc57735cf6ebc.mp3'
    }
  },
  props: ['location',],
  methods: {
    selectTopbar(index) {

    },
    changeVolume () {

    },
    playMusic () {
      console.log('playMusic');
    },
    changeTime(time) {
      this.$refs.music.currentTime = time
    },
  }
};
</script>