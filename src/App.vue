<template>
  <div class="app">
    <el-button type="primary">点击试试</el-button>
    <div>你愁啥</div>
    <div>
      svg-icon 图标
      <svg-icon icon-class="fullscreen" className="header-icon" />
    </div>
    <el-tooltip effect="dark" content="全屏" placement="bottom">
      <svg-icon
        :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
        @click="toggle"
        className="header-icon"
      />
    </el-tooltip>
    <div class="moni">
      空中飞行员
      <span>试试看</span>
    </div>
    <div>
      <img src="@/assets/image/cro-avatar.jpg" alt="" />
    </div>
    <el-icon :size="20">
      <Edit />
    </el-icon>
    <el-icon color="#409EFC" class="no-inherit">
      <Share />
    </el-icon>
    <el-icon>
      <Delete />
    </el-icon>
    <el-icon class="is-loading">
      <Loading />
    </el-icon>
    <el-button type="primary">
      <el-icon style="vertical-align: middle">
        <Search />
      </el-icon>
      <span style="vertical-align: middle"> Search </span>
    </el-button>
  </div>
</template>
<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();
</script>
<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-pager li:focus {
  border: none;
}
.el-dropdown:focus {
  border: none;
}
.svg-icon:focus {
  border: none;
}
// 实验代码
.moni {
  color: red;
  font-size: 30px;
  & span {
    color: yellow;
    font-size: 36px;
  }
}
</style>
