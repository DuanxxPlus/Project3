<template>
  <div id="container">
    <header>
      <svg class="icon search_back" aria-hidden="true" @click="back()">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <h2>注册</h2>
    </header>
    <form action="#">
      <label for="phone">手机号</label><input type="number" id="phone" placeholder="请输入手机号">
      <label for="code" class="code">短信验证码</label><input type="number" id="code" placeholder="请输入短信验证码">
      <label for="password" class="password">密码</label><input :type="pt" id="password" placeholder="请输入登录密码">
      <svg class="icon search_back" aria-hidden="true" @click="pass()">
        <use :xlink:href="pa"></use>
      </svg>
      <a href="#">获取验证码</a>
    </form>
    <p>密码为6-20个英文字母，数字或符号</p>
    <a href="#">完成</a>
    <span class="footer1">完成注册即代表已阅读并同意</span>
    <span class="footer2">《服务条款和隐私政策》</span>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          pa:'#icon-openEye',
          pt:'password',
        }
      },
      methods:{
        back(){
          this.$router.go(-1);
        },
        pass(){
          if(this.pa=='#icon-openEye'){
            this.pa='#icon-yanjing';
            this.pt='text';
          }
          else{
            this.pa='#icon-openEye';
            this.pt='password';
          }
        }
      }
    }
</script>

<style scoped>
  #container{
    height: 100vh;
    background: white;
  }
  header{
    height: 45px;
    background: #118eea;
  }
  header>svg{
    float: left;
    font-size: 18px;
    color: white;
    margin: 12px 0 0 15px;
  }
  header>h2{
    font-size: 18px;
    color: white;
    line-height: 45px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
  }
  header>a{
    float: right;
    font-size: 15px;
    line-height: 45px;
    color: white;
    margin-right: 15px;
  }
  form{
    width: 92.5%;
    max-width: 500px;
    margin: auto;
    color: #333333;
    overflow: hidden;
  }
  label{
    width: 25%;
    height: 40px;
    float: left;
    font-size: 15px;
    line-height: 40px;
    color: #333333;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
  }
  input{
    float: right;
    border: none;
    outline: none;
    width: 75%;
    height: 40px;
    padding-right: 25%;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
  }
  input::placeholder{
    color: #757575;
  }
  form svg{
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  form>a{
    display: block;
    position: absolute;
    top: 49px;
    right: 8px;
    color: #118eea;
  }
  #container>p{
    max-width: 500px;
    font-size: 14px;
    line-height: 14px;
    color: #999999;
    width: 92.5%;
    margin: 14px auto 0;
  }
  #container>a{
    display: block;
    width: 92.5%;
    max-width: 500px;
    height: 50px;
    margin: 40px auto 0;
    background: #118eea;
    color: white;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
  }
  .footer1{
    float: left;
    font-size: 14px;
    color: #999999;
    line-height: 14px;
    margin: 14px 0 0 15px;
  }
  .footer2{
    float: left;
    font-size: 14px;
    line-height: 14px;
    color: #118eea;
    margin-top: 14px;
  }
</style>
