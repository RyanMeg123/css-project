<!--  -->
<template>
  <div class="wave-container">
      <h2>Oasis Games</h2>
  </div>
</template>

<script>
// 导入的其他文件 例如：import moduleName from 'modulePath';

export default {
  //import所引入的组件注册
  components: {},

  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.wave-container {
  position: relative;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(118, 218, 255);
  overflow: hidden;
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #fff;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &:before {
    bottom: 15vh;
    border-radius: 45%;
    animation-duration: 10s;
  }

  &:after {
    bottom: 12vh;
    opacity: 0.5;
    border-radius: 47%;
    animation-duration: 10s;
  }
}
@keyframes rotate {
  0% {
    transform: translate(-50%, 0) rotateZ(0deg);
  }
  50% {
    transform: translate(-50%, -2%) rotateZ(180deg);
  }
  100% {
    transform: translate(-50%, 0%) rotateZ(360deg);
  }
}

h2 {
  position: relative;
  color: #333;
  z-index: 10;
  text-align: center;
  font-size: 8vw;
  text-shadow: 3px 3px 2px #999;
}
</style>