<template>
  <div id="container">
    <main>
      <a href="#" id="ios">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ios"></use>
        </svg>
        <span>iphone 下载</span>
      </a>
      <a href="#" id="ad">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-anzhuo"></use>
        </svg>
        <span>Android 下载</span>
      </a>
    </main>
  </div>
</template>

<script>
    export default {
        name: "download"
    }
</script>

<style scoped>
  #container{
    height: 100vh;
    background: white;
  }
  main{
    height: 600px;
    background: url("../images/downloadbg.png") no-repeat top center;
  }
  a{
    width: 220px;
    height: 35px;
    display: block;
    position: fixed;
    left: 50%;
    transform: translate(-50%,0);
    color: white;
    text-align: center;
    background: #008ed9;
    border-radius: 9px;
  }
  #ios{
    top: 500px;
  }
  #ad{
    top: 555px;
  }
  svg{
    font-size: 22px;
  }
  span{
    line-height: 35px;
    font-size: 16px;
  }
</style>
