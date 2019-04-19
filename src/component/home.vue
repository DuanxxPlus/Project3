<template>
    <div>
      <nav>
        <ul>
          <li>
            <router-link to="/home">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-test"></use>
              </svg>
              <br>
              首页
            </router-link>
          </li>
          <li>
            <router-link to="/lease">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zujin"></use>
              </svg>
              <br>
              租号
          </router-link>
          </li>
          <li>
            <router-link to="/download">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai1"></use>
              </svg>
              <br>
              APP下载
            </router-link>
          </li>
          <li>
            <router-link to="/my">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wode1"></use>
              </svg>
              <br>
              我的
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="search">
        <svg class="icon search_left" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi3"></use>
        </svg>
        <form action="#" @click="goSearch()">
          <input type="text" placeholder="请输入关键词">
          <img src="../images/search.png" alt="">
        </form>
        <svg class="icon search_right" aria-hidden="true">
          <use xlink:href="#icon-kefu"></use>
        </svg>
      </div>
      <mt-swipe :auto="2000">
        <mt-swipe-item><img class="banner" src="../images/banner.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="banner" src="../images/banner.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="banner" src="../images/banner.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="banner" src="../images/banner.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="banner" src="../images/banner.png" alt=""></mt-swipe-item>
      </mt-swipe>
      <main>
        <h6>
          <b>热门</b>
          <span>更多></span>
        </h6>
        <ul>
          <li>
            <router-link :to="'/list/yxlm'">
              <p><img src="../images/yxlm.png" alt=""></p>
              <span>英雄联盟</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'/list/vip'">
              <p><img src="../images/vip.png" alt=""></p>
              <span>VIP账号</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'/list/nz'">
              <p><img src="../images/nz.png" alt=""></p>
            <span>逆战</span>
          </router-link>
          </li>
          <li style="margin-right: 0;">
            <router-link :to="'/list/cfm'">
              <p><img src="../images/cf.png" alt=""></p>
              <span>穿越火线:枪战王者</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'/list/wzry'">
              <p><img src="../images/wzry.png" alt=""></p>
              <span>王者荣耀</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'/list/dwrg'">
              <p><img src="../images/dwrg.png" alt=""></p>
              <span>第五人格</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'/list/cf'">
              <p><img src="../images/cfplus.png" alt=""></p>
              <span>穿越火线</span>
            </router-link>
          </li>
          <li style="margin-right: 0;">
            <router-link :to="'/list/pubg'">
              <p><img src="../images/pubg.png" alt=""></p>
              <span>绝地求生</span>
            </router-link>
          </li>
        </ul>
      </main>
      <main style="padding-top: 15px;">
        <h6>
          <b>端游</b>
          <span>更多></span>
        </h6>
        <ul>
          <li>
            <router-link :to="'list/yxlm'">
              <p><img src="../images/yxlm2.png" alt=""></p>
              <span>英雄联盟</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'list/cf/'">
              <p><img src="../images/cf2.png" alt=""></p>
              <span>穿越火线</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'list/pubg'">
              <p><img src="../images/pubg2.png" alt=""></p>
              <span>绝地求生</span>
            </router-link>
          </li>
          <li style="margin-right: 0;">
            <router-link :to="'list/nz'">
              <p><img src="../images/nz2.png" alt=""></p>
              <span>逆战</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/qqfc.png" alt=""></p>
              <span>QQ飞车</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/csol.png" alt=""></p>
              <span>反恐精英OL</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/apex.png" alt=""></p>
              <span>Apex英雄</span>
            </router-link>
          </li>
          <li style="margin-right: 0;">
            <router-link to="">
              <p><img src="../images/swxf.png" alt=""></p>
              <span>守望先锋</span>
            </router-link>
          </li>
        </ul>
      </main>
      <main style="padding-top: 15px;">
        <h6>
          <b>手游</b>
          <span>更多></span>
        </h6>
        <ul>
          <li>
            <router-link :to="'/list/wzry'">
              <p><img src="../images/wzry.png" alt=""></p>
              <span>王者荣耀</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/cf.png" alt=""></p>
              <span>穿越火线:枪战王者</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/qqfcm.png" alt=""></p>
              <span>QQ飞(手游)</span>
            </router-link>
          </li>
          <li style="margin-right: 0;">
            <router-link to="">
              <p><img src="../images/cjzc.png" alt=""></p>
              <span>绝地求生:刺激战场</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/mrzh.png" alt=""></p>
              <span>明日之后</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/hyrz.png" alt=""></p>
              <span>火影忍者(手游)</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/qqdzz.png" alt=""></p>
              <span>球球大作战</span>
            </router-link>
          </li>
          <li style="margin-right: 0;">
            <router-link to="">
              <p><img src="../images/lkwg.png" alt=""></p>
              <span>洛克王国</span>
            </router-link>
          </li>
        </ul>
      </main>
      <main style="padding-top: 15px;">
        <h6>
          <b>影视</b>
          <span>更多></span>
        </h6>
        <ul>
          <li>
            <router-link :to="'list/pubg'">
              <p><img src="../images/pubg.png" alt=""></p>
              <span>绝地求生</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'list/cf'">
              <p><img src="../images/cf.png" alt=""></p>
              <span>穿越火线</span>
            </router-link>
          </li>
          <li>
            <router-link :to="'list/yxlm'">
              <p><img src="../images/yxlm.png" alt=""></p>
              <span>英雄联盟</span>
            </router-link>
          </li>
          <li style="margin-right: 0;">
            <router-link :to="'list/nz'">
              <p><img src="../images/nz.png" alt=""></p>
              <span>逆战</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/qqfc2.png" alt=""></p>
              <span>QQ飞车</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/swxf2.png" alt=""></p>
              <span>守望先锋</span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <p><img src="../images/dnf.png" alt=""></p>
              <span>地下城与勇士</span>
            </router-link>
          </li>
          <li style="margin-right: 0;">
            <router-link to="">
              <p><img src="../images/smzh.png" alt=""></p>
              <span>使命召唤OL</span>
            </router-link>
          </li>
        </ul>
      </main>
      <main style="padding-top: 15px;margin-bottom: 65px;">
        <h6>
          <b>steam专区</b>
          <span>更多></span>
        </h6>
        <ul>
          <li>
            <router-link to="">
              <p><img src="../images/vip.png" alt=""></p>
              <span>VIP会员账号</span>
            </router-link>
          </li>
        </ul>
      </main>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'mint-ui';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  $(function () {
    $('main>ul img').height($('main>ul img').width()+'px');
  });
  $(window).resize(function () {
    $('main>ul img').height($('main>ul img').width()+'px');
  });
  export default {
    name: "home",
    mounted(){
      $('main>ul img').height($('main>ul img').width()+'px');
    },
    methods:{
      goSearch(){
        this.$router.push('/search');
      },
    },
  }
</script>

<style scoped>
  .mint-swipe{
    box-sizing: border-box;
    padding-top: 42px;
    height: 40vw;
    max-height: 300px;
    min-height: 200px;
    max-width: 500px;
  }
  .banner{
    width: 100%;
    height: 100%;
  }
  main{
    background: white;
    overflow: hidden;
  }
  main>h6{
    margin: 25px auto 0;
    width: 92.5%;
    overflow: hidden;
  }
  main>h6>b{
    float: left;
    font-size: 17px;
  }
  main>h6>span{
    font-size: 14px;
    float: right;
    color: #999999;
  }
  main>ul{
    width: 92.5%;
    margin: auto;
    overflow: hidden;
  }
  main>ul>li{
    width: 22%;
    float: left;
    margin: 2vw 4% 0 0;
  }
  main>ul a{
    width: 100%;
    height: 100%;
    display: block;
  }
  main>ul p{
    width: 100%;
    height: 0;
    box-sizing: border-box;
    padding-bottom: 100%;
  }
  main>ul img{
    width: 100%;
    border-radius: 5px;
  }
  main>ul span{
    display: block;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    margin-top: 13px;
    color: #333333;
    height: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
