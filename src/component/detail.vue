<template>
  <div id="container">
    <header>
    <span @click="back()">
      <svg class="icon search_back" aria-hidden="true" @click="back()">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </span>
      <h2>账号详情</h2>
    </header>
    <main>
      <h5>{{title}}</h5>
      <h6>{{area}}</h6>
      <p>
        <span class="mt">{{minTime}}小时起租</span>
        <span class="yj">押金：{{deposit}}元</span>
        <span class="h">/小时</span>
        <span class="price">{{price}}</span>
        <span class="rmb">&yen;</span>
      </p>
    </main>
    <article>
      <h6>账号描述</h6>
      <p>{{detail}}</p>
    </article>
    <section>
      <h6>账号截图</h6>
      <mt-swipe :auto="2000">
        <mt-swipe-item><img :src="img" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="img" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="img" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="img" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="img" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="img" alt=""></mt-swipe-item>
      </mt-swipe>
    </section>
    <router-link to="" class="footer">立即租赁</router-link>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
    data(){
      return{
        i:NaN,
        n:'',
        title:'',
        detail:'',
        area:'',
        minTime:'',
        deposit:'',
        price:'',
        location:'',
        img:'',
      }
    },
    mounted() {
      var t=this;
      this.n=this.$route.params.n;
      this.i=this.$route.params.i;
      var i=this.i;
      this.$http.get('./json/'+t.n+'.json').then(function (r) {
        console.log(r);
        const list=r.data.list;
        t.title=list[i].title;
        t.detail=list[i].detail;
        t.area=list[i].area;
        t.minTime=list[i].minTime;
        t.deposit=list[i].deposit;
        t.price=list[i].price;
        t.location=list[i].location;
        t.img='./images/'+t.n+'_de.png';
      }).catch().then();
    },
    methods:{
      back(){
        this.$router.push('/list/'+this.n);
      }
    }
  }
</script>

<style scoped>
  #container{
    padding-top: 45px;
  }
  header{
    width: 100%;
    max-width: 500px;
    height: 45px;
    background: #118eea;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
    z-index: 2;
  }
  header>span{
    float: left;
    line-height: 45px;
    margin-left: 15px;
    color: white;
    font-size: 20px;
  }
  header>h2{
    position: absolute;
    font-size: 17px;
    line-height: 45px;
    color: white;
    width: 70px;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
  }
  main{
    width: 100%;
    max-width: 500px;
    margin: auto;
    padding: 12px 0 20px;
    background: white;
    overflow: hidden;
  }
  main>h5{
    color: #333333;
    font-size: 12px;
    line-height: 18px;
    margin: 0 10px;
  }
  main>h6{
    font-size: 12px;
    line-height: 12px;
    color: #999999;
    margin: 10px 0 0 10px;
  }
  main>p{
    margin: 15px 10px 0;
  }
  main>p>span{
    font-size: 12px;
    line-height: 12px;
    color: #999999;
  }
  .mt{
    float: left;
  }
  .yj{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
  }
  .rmb{
    float: right;
  }
  .h{
    float: right;
  }
  .price{
    float: right;
    font-size: 18px;
    color: #f01100;
    font-weight: bold;
  }
  article,section{
    width: 100%;
    margin: 10px auto 0;
    max-width: 500px;
    background: white;
    padding: 10px 0;
  }
  article>h6{
    margin-left: 10px;
    font-size: 14px;
  }
  article>p{
    margin: 15px 10px 0;
    font-size: 12px;
    color: #666666;
    line-height: 18px;
  }
  section{
    margin-bottom: 45px;
  }
  section>h6{
    margin: 0 10px;
    font-size: 14px;
    line-height: 14px;
  }
  .mint-swipe{
    margin: 15px 10px 0;
    height: 315px;
  }
  .mint-swipe img{
    width: 100%;
  }
  .footer{
    background: #118eea;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
    height: 45px;
    width: 100%;
    max-width: 500px;
    text-align: center;
    line-height: 45px;
    color: white;
    font-size: 16px;
  }
</style>
