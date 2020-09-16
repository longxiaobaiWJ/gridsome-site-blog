<template>
  <el-card shadow="never" :body-style="{ padding: '0px' }">
    <el-row>
      <el-col :span="10">
        <!-- <el-menu
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
        </el-menu>-->
        <ul role="menubar" class="el-menu--horizontal el-menu">
          <li role="menuitem" aria-haspopup="true" class="el-submenu" tabindex="0">
            <div class="el-submenu__title" style="border-bottom-color: transparent;">
              了解博主
              <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
            </div>
            <div class="el-menu--horizontal" style="display: none;">
              <ul role="menu" class="el-menu el-menu--popup el-menu--popup-bottom-start">
                <li role="menuitem" tabindex="-1" class="el-menu-item">github主页</li>
                <li role="menuitem" tabindex="-1" class="el-menu-item">其他博客</li>
              </ul>
            </div>
          </li>
          <li role="menuitem" aria-haspopup="true" class="el-submenu" tabindex="0">
            <div class="el-submenu__title" style="border-bottom-color: transparent;">
              其他网站
              <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
            </div>
            <div class="el-menu--horizontal" style="display: none;">
              <ul role="menu" class="el-menu el-menu--popup el-menu--popup-bottom-start">
                <li role="menuitem" tabindex="-1" class="el-menu-item">segmentfault</li>
              </ul>
            </div>
          </li>
        </ul>
      </el-col>
      <el-col :span="8" style="text-align: center;padding: 12px 0px 0px 10px">
        <!-- <el-row>
          <el-col :span="4">
            <el-popover placement="top" trigger="hover">
              <div style="text-align: center">
                <el-progress color="#67C23A" type="circle" :percentage="music.volume"></el-progress>
                <br />
                <el-button @click="changeVolume(-10)" icon="el-icon-minus" circle></el-button>
                <el-button @click="changeVolume(10)" icon="el-icon-plus" circle></el-button>
              </div>

              <el-button
                @click="play"
                id="play"
                slot="reference"
                :icon="music.isPlay?'el-icon-refresh':'el-icon-caret-right'"
                circle
              ></el-button>
            </el-popover>
          </el-col>
          <el-col :span="14" style="padding-left: 20px">
            <el-slider
              @change="changeTime"
              :format-tooltip="$util.formatTime"
              :max="music.maxTime"
              v-model="music.currentTime"
              style="width: 100%;"
            ></el-slider>
          </el-col>
          <el-col
            :span="6"
            style="padding: 9px 0px 0px 10px;color:#909399;font-size: 13px"
          >{{$util.formatTime(music.currentTime)}}/{{$util.formatTime(music.maxTime)}}</el-col>
        </el-row>

        <audio ref="music" loop autoplay v-if="audioAutoPlay">
          <source :src="audioUrl" type="audio/mpeg" />
        </audio>
        <audio ref="music" loop v-else>
          <source :src="audioUrl" type="audio/mpeg" />
        </audio> -->
        <div class="el-row">
            <div class="el-col el-col-4">
              <span>
                <div
                  role="tooltip"
                  id="el-popover-8458"
                  aria-hidden="true"
                  class="el-popover el-popper"
                  tabindex="0"
                  style="display: none;"
                >
                  <div style="text-align: center;">
                    <div
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="el-progress el-progress--circle"
                    >
                      <div class="el-progress-circle" style="height: 126px; width: 126px;">
                        <svg viewBox="0 0 100 100">
                          <path
                            d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"
                            stroke="#e5e9f2"
                            stroke-width="4.8"
                            fill="none"
                            class="el-progress-circle__track"
                          />
                          <path
                            d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"
                            stroke-linecap="round"
                            stroke="#67C23A"
                            stroke-width="4.8"
                            fill="none"
                            class="el-progress-circle__path"
                            style="stroke-dasharray: 299.08px, 299.08px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;"
                          />
                        </svg>
                      </div>
                      <div class="el-progress__text" style="font-size: 16px;">100%</div>
                    </div>
                    <br />
                    <button type="button" class="el-button el-button--default is-circle">
                      <i class="el-icon-minus"></i>
                    </button>
                    <button type="button" class="el-button el-button--default is-circle">
                      <i class="el-icon-plus"></i>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  class="el-button el-button--default is-circle el-popover__reference"
                  id="play"
                  aria-describedby="el-popover-8458"
                  tabindex="0"
                >
                  <i class="el-icon-caret-right"></i>
                </button>
              </span>
            </div>
            <div class="el-col el-col-14" style="padding-left: 20px;">
              <div
                role="slider"
                aria-valuemin="0"
                aria-valuemax="0"
                aria-orientation="horizontal"
                class="el-slider"
                aria-valuetext="0"
                aria-label="slider between 0 and 0"
                style="width: 100%;"
              >
                <div class="el-slider__runway">
                  <div class="el-slider__bar" style="left: 0%;"></div>
                  <div tabindex="0" class="el-slider__button-wrapper">
                    <div
                      class="el-slider__button el-tooltip"
                      aria-describedby="el-tooltip-7705"
                      tabindex="0"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="el-col el-col-6"
              style="padding: 9px 0px 0px 10px; color: rgb(144, 147, 153); font-size: 13px;"
            >00:00/00:00</div>
          </div>
          <audio loop="loop">
            <source
              src="http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&amp;pin=6cd414115fdb9a950d827487b16b5f97#.mp3"
              type="audio/mpeg"
            />
          </audio>
			</el-col>
      <el-col :span="4" style="text-align: right;">
        <!-- <div style="font-size: 20px;color:#606266;margin-top: 5px">
          <b>{{githubUsername}}</b>
        </div>
        <div style="color:#606266;">
          <i class="el-icon-location"></i>
          &nbsp;{{location?location:'未填写地址'}}
          <br />
        </div> -->
       <div style="font-size: 20px; color: rgb(96, 98, 102); margin-top: 5px;">
            <b>GitHub-Laziji</b>
          </div>
          <div style="color: rgb(96, 98, 102);">
            <i class="el-icon-location"></i>&nbsp;fuzhou
            <br />
          </div>
			</el-col>
      <el-col :span="2" style="text-align: center;">
        <!-- <img
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
        </el-popover> -->
       <img
            class="el-popover__reference"
            aria-describedby="el-popover-481"
            tabindex="0"
            src="https://avatars0.githubusercontent.com/u/30425217?v=4"
            style="margin-top: 4px; margin-right: 10px; width: 52px; height: 52px; border-radius: 5px; border: 1px solid rgb(235, 238, 245);"
          />
          <span>
            <div
              role="tooltip"
              id="el-popover-481"
              aria-hidden="true"
              class="el-popover el-popper"
              tabindex="0"
              style="width: 200px; display: none;"
            >
              <div class="el-popover__title">GitHub-Laziji</div>
              <i class="el-icon-star-on"></i> 辣子鸡
              <br />
              <i class="el-icon-location"></i> fuzhou
              <br />
              <img
                src="https://avatars0.githubusercontent.com/u/30425217?v=4"
                style="width: 200px; height: 200px;"
              />
            </div>
          </span>
			</el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: "CardView",
  };
</script>