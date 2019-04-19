<template>
  <div id="container">
    <header>
      <svg class="icon search_back" aria-hidden="true" @click="back()">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <h2>登录</h2>
      <router-link to="/register">注册</router-link>
    </header>
    <h1><img src="../images/logo.png" alt=""></h1>
    <form action="#">
      <label for="phone">手机号</label><input type="number" id="phone" placeholder="请输入手机号">
      <label for="password" class="password">密码</label><input :type="pt" id="password" placeholder="请输入登录密码">
      <svg class="icon search_back" aria-hidden="true" @click="pass()">
        <use :xlink:href="pa"></use>
      </svg>
    </form>
    <router-link to="/private">登录</router-link>
    <a href="#" id="fog">忘记密码?</a>
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
  h1{
    text-align: center;
    margin-top: 55px;
  }
  h1>img{
    width: 70px;
    height: 70px;
  }
  form{
    width: 92.5%;
    max-width: 500px;
    margin: 42px auto 0;
    color: #333333;
    overflow: hidden;
  }
  label{
    width: 17.4%;
    height: 40px;
    float: left;
    font-size: 15px;
    line-height: 40px;
    color: #333333;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
  }
  input{
    border: none;
    outline: none;
    height: 40px;
    width: 82.6%;
    padding-right: 40%;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
  }
  input::placeholder{
    color: #757575;
  }
  .password,#password{
    margin-top: 22px;
  }
  form svg{
    position: absolute;
    right: 10px;
    bottom: 10px;
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
  #container>#fog{
    background: none;
    color: #118eea;
    text-align: right;
    font-size: 15px;
    line-height: 15px;
    margin-top: 20px;
  }
</style>
