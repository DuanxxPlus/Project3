<template>
  <div id="container">
    <div v-if="olli!=undefined" class="bgb" @click="f()"></div>
    <header>
      <span @click="back()">
        <svg class="icon search_back" aria-hidden="true" @click="back()">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </span>
      <h2>{{resName}}</h2>
    </header>
    <main>
      <ul>
        <li @click="foo(0)" :class="{blue:bl==0}">
          <p>
            <span>{{resLocations[0]}}</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-down"></use>
            </svg>
          </p>
        </li>
        <li @click="foo(1)" :class="{blue:bl==1}">
          <p>
            <span>服务器</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-down"></use>
            </svg>
          </p>
        </li>
        <li @click="foo(2)" :class="{blue:bl==2}">
          <p>
            <span>排序</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-down"></use>
            </svg>
          </p>
        </li>
        <li @click="foo(3)" :class="{blue:bl==3}">
          <p>
            <span>筛选</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-down"></use>
            </svg>
          </p>
        </li>
      </ul>
      <ol>
        <transition enter-active-class="oEnter" leave-active-class="oLeave">
          <li v-show="olli==0">
            <p v-for="(v,i) in resLocations" @click="fooP(i)" :class="{blue:olp==i}">{{v}}</p>
          </li>
        </transition>
        <transition enter-active-class="oEnter" leave-active-class="oLeave">
          <li v-show="olli==1">
            <aside>
              <ul>
                <li v-for="(v,i) in resArea" @click="asi(i)" :class="{areaChecked:areac==i}">{{v}}</li>
              </ul>
            </aside>
            <div class="ol_2right">
              <div v-for="(v,i) in resArea" v-show="ars==i">
                <span v-for="(vv,ii) in areas[i]" @click="choose(i,ii)">{{vv}}</span>
              </div>
            </div>
          </li>
        </transition>
        <transition enter-active-class="oEnter" leave-active-class="oLeave">
          <li v-show="olli==2">
            <ul class="px">
              <li :class="{blue:pxch==0}" @click="px(0)">默认排序</li>
              <li :class="{blue:pxch==1}" @click="px(1)">价格由高到低</li>
              <li :class="{blue:pxch==2}" @click="px(2)">价格由低到高</li>
            </ul>
          </li>
        </transition>
        <transition enter-active-class="oEnter" leave-active-class="oLeave">
          <li v-show="olli==3">
            <ul class="jg">
              <li>
                <span style="margin-left: 15px;">价格范围</span>
              </li>
              <li style="background: #eeeeee">
                <p>
                  <input type="text" placeholder="最低价">
                  <span>--</span>
                  <input type="text" placeholder="最高价">
                </p>
              </li>
              <li>
                <div>
                  <button id="cz" @click="btn()">重置</button>
                  <button id="qd" @click="btn()">确定</button>
                </div>
              </li>
            </ul>
          </li>
        </transition>
      </ol>
    </main>
    <div class="section">
      <section v-for="(v,i) in resList" v-lazy.container="v">
        <router-link :to="'/detail/'+listName+'/'+i">
          <img :src="img" alt="">
          <div>
            <h4>{{resList[i].title}}</h4>
            <h5>{{resList[i].detail}}</h5>
            <h6><span>{{resList[i].area}}</span></h6>
            <p>
              <span>{{resList[i].minTime}}小时起租 押金：{{resList[i].deposit}}元</span>
              <span class="rmb">&yen;</span>
              <span class="price">{{resList[i].price}}</span>
              <span style="margin-left: -4px;">/小时</span>
            </p>
          </div>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Lazyload } from 'mint-ui';
  import { Toast } from 'mint-ui';
  Vue.use(Lazyload);
  function changeValue(a,b) {
    var c;
    c=a;
    a=b;
    b=c;
  }
  export default {
    name: "list",
    data(){
      return{
        pxch:0,
        olli:undefined,
        bl:undefined,
        olp:0,
        ars:0,
        areac:0,
        bgb:false,
        listName:'',
        areaDetail:'',
        resName:'',
        resList:[],
        resLocations:[],
        resArea:[],
        areas:[],
        img:'',
      }
    },
    mounted(){
      var t=this;
      this.listName=this.$route.params.s;
      var str='../json/'+t.listName+'.json';
      this.$http.get(str).then(function (r) {
        t.resName=r.data.name;
        t.resList=r.data.list;
        t.resLocations=r.data.locations;
        t.resArea=r.data.area;
        t.areas=r.data.areas;
        t.img=r.data.img;
      }).catch().then();
    },
    methods:{
      btn(){
        this.f();
      },
      px(i){
        this.pxch=i;
        this.f();
        var l=this.resList.length;
      },
      choose(l,a){
        var t=this;
        var str='../json/'+t.listName+'.json';
        this.$http.get(str).then(function (r) {
          t.resList=r.data.list;
          var st=t.resName+'-'+t.resArea[l]+'-'+t.areas[l][a];
          var len=t.resList.length;
          for(var i=0;i<len;i++){
            if(t.resList[i].area!=st){
              t.resList.splice(i,1);
              len--;
              i--;
            }
          }
        }).catch().then();
        this.f();
      },
      back(){
        this.$router.push('/home');
      },
      foo(i){
        if(i==1){
          if(this.resArea){
            if(this.olli==i){
              this.olli=undefined;
              this.bl=undefined;
            }
            else{
              this.olli=i;
              this.bl=i;
            }
          }
          else{
            var t=Toast({
              message: '暂无服务器筛选',
              position: 'bottom',
              duration: 5000,
            });
            setTimeout(function () {
              t.close();
            },1000)
          }
        }
        else{
          if(this.olli==i){
            this.olli=undefined;
            this.bl=undefined;
          }
          else{
            this.olli=i;
            this.bl=i;
          }
        }
      },
      fooP(i){
        this.olp=i;
        this.f();
      },
      f(){
        this.bl=undefined;
        this.olli=undefined;
      },
      asi(i){
        this.ars=i;
        this.areac=i;
      },
    },
  }
</script>

<style scoped>
  .bgb{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    z-index: 2;
  }
  header{
    width: 100%;
    max-width: 500px;
    height: 45px;
    background: #118eea;
    z-index: 5;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
  }
  header>span{
    float: left;
    line-height: 45px;
    margin-left: 15px;
    color: white;
    font-size: 20px;
  }
  header>h2{
    line-height: 45px;
    color: white;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
    font-size: 18px;
  }
  main{
    width: 100%;
    max-width: 500px;
    height: 40px;
    background: white;
    margin-bottom: 15px;
    position: fixed;
    top: 45px;
    left: 50%;
    transform: translate(-50%,0);
    z-index: 4;
  }
  main>ul{
    width: 100%;
    height: 100%;
    background: white;
    z-index: 4;
  }
  main>ul>li{
    float: left;
    width: 25%;
    height: 100%;
    color: #333333;
  }
  main>ul p{
    height: 100%;
    margin: auto;
    text-align: center;
  }
  main>ul span{
    font-size: 14px;
    line-height: 40px;
  }
  main>ul img{
    float: right;
    margin: 18px 26px 0 0;
  }
  main>ol{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  main>ol>li{
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: white;
    border-top: 1px solid gray;
    z-index: 3;
  }
  main>ol p{
    line-height: 40px;
    font-size: 14px;
    padding-left: 15px;
  }
  aside{
    float: left;
    width: 20%;
  }
  aside>ul{
    width: 100%;
    height: 100%;
  }
  aside>ul>li{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
    background: #f2f2f2;
  }
  .oEnter{
    animation: oEnter 300ms linear;
  }
  .oLeave{
    animation: oLeave 300ms;
  }
  @keyframes oEnter {
    from{
      top: -500px;
    }
    to{
      top: 40px;
    }
  }
  @keyframes oLeave {
    from{
      top: 40px;
    }
    to{
      top: -500px;
    }
  }
  .ol_2right{
    float: right;
    width: 75%;
  }
  .ol_2right span{
    float: left;
    width: 120px;
    height: 30px;
    border: 1px solid #cccccc;
    margin: 10px 10px 5px 0;
    color: #333333;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
  }
  .areaChecked{
    background: white;
    border-left: 2px solid #118eea;
  }
  .blue{
    color: #118eea;
  }
  .px>li{
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    font-size: 14px;
  }
  .jg>li{
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    overflow: hidden;
  }
  .jg>li>p{
    width: 223px;
    height: 30px;
    margin: 10px auto 0;
    padding-left: 0;
  }
  .jg>li input{
    float: left;
    width: 100px;
    height: 30px;
    border: none;
    background: white;
    outline: none;
    box-sizing: border-box;
    padding-left: 5px;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
  }
  .jg>li input::-webkit-input-placeholder{
    color: #757575;
  }
  .jg p>span{
    float: left;
    line-height: 30px;
    margin: 0 5px;
  }
  .jg div{
    width: 140px;
    height: 30px;
    margin: 10px auto 0;
  }
  .jg button{
    width: 60px;
    height: 30px;
    float: left;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 12px;
    line-height: 30px;
  }
  #cz{
    background: #dddddd;
    color: #888888;
  }
  #qd{
    background: #0ea8f0;
    color: white;
    margin-left: 10px;
  }
  .section{
    max-width: 500px;
    transform: translate(0,100px);
  }
  section{
    margin: auto;
    background: white;
    padding: 0 2.5%;
    overflow: hidden;
  }
  section>a{
    width: 100%;
    color: black;
  }
  section img{
    width: 28%;
    float: left;
    margin-top: 15px;
    border-radius: 4px;
  }
  section img[lazy=loading]{
    width: 55px;
    height: 55px;
    float: left;
    margin: 25px;
    border-radius: 4px;
  }
  section div{
    float: right;
    width: 70%;
    margin-top: 15px;
  }
  section div>h4{
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 20px;
  }
  section div>h5{
    width: 100%;
    font-size: 12px;
    color: #776f6f;
    line-height: 16px;
  }
  section div>h6{
    margin-top: 5px;
    overflow: hidden;
  }
  section h6>span{
    float: left;
    border: 1px solid #e5e5e5;
    border-radius: 7px;
    font-size: 12px;
    line-height: 16px;
    color: #776f6f;
  }
  section div>p{
    margin-top: 3px;
  }
  section p>span{
    color: #776f6f;
    font-size: 12px;
    line-height: 14px;
  }
  section .rmb{
    margin-left: 22px;
  }
  section .price{
    font-size: 18px;
    color: #f01100;
    font-weight: bold;
  }
</style>
