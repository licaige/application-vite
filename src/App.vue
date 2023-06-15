<template>
  <div class="app">
    <el-button type="primary">点击试试</el-button>
    <div>你愁啥</div>
    <div>nik</div>
    <div>你猜</div>
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
</style>
