<template>
  <div id="container">
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
    <header>
      <svg class="icon search_back" aria-hidden="true" @click="goHome()">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <h2>租号</h2>
      <svg class="icon goSearch" aria-hidden="true" @click="goSearch()">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </header>
    <div class="nav">
      <ul>
        <li :class="{nav_checked:nc==0}" @click="navc(0)">热门租号</li>
        <li :class="{nav_checked:nc==1}" @click="navc(1)">免费试玩（仅安卓最新版）</li>
        <li :class="{nav_checked:nc==2}" @click="navc(2)">手游租号</li>
        <li :class="{nav_checked:nc==3}" @click="navc(3)">端游租号</li>
        <li :class="{nav_checked:nc==4}" @click="navc(4)">影视租号</li>
        <li :class="{nav_checked:nc==5}" @click="navc(5)">steam租号</li>
      </ul>
    </div>
    <ul class="article">
      <li v-show="nc==0">
        <div class="chooseGame">
          <h6>选择游戏</h6>
          <p>
            <span class="gameName" :class="{bl:isbl==0}" @click="isb(0)">热</span>
            <span class="gameName" :class="{bl:isbl=='C'}" @click="isb('C')">C</span>
            <span class="gameName" :class="{bl:isbl=='D'}" @click="isb('D')">D</span>
            <span class="gameName" :class="{bl:isbl=='J'}" @click="isb('J')">J</span>
            <span class="gameName" :class="{bl:isbl=='N'}" @click="isb('N')">N</span>
            <span class="gameName" :class="{bl:isbl=='V'}" @click="isb('V')">V</span>
            <span class="gameName" :class="{bl:isbl=='W'}" @click="isb('W')">W</span>
            <span class="gameName" :class="{bl:isbl=='Y'}" @click="isb('Y')">Y</span>
          </p>
        </div>
        <main>
          <ul>
            <li style="margin-top: 10px;">
              <router-link :to="'/list/yxlm'" class="main_img">
                <img src="../images/yxlm.png" alt="">
              </router-link>
              <router-link :to="'/list/yxlm'" class="main_name">英雄联盟</router-link>
            </li>
            <li style="margin-top: 10px;">
              <router-link :to="'/list/vip'" class="main_img">
                <img src="../images/vip.png" alt="">
              </router-link>
              <router-link :to="'/list/vip'" class="main_name">VIP会员账号</router-link>
            </li>
            <li style="margin: 10px 0 0 0;">
              <router-link :to="'/list/nz'" class="main_img">
                <img src="../images/nz.png" alt="">
              </router-link>
              <router-link :to="'/list/nz'" class="main_name">逆战</router-link>
            </li>
            <li>
              <router-link :to="'/list/cfm'" class="main_img">
                <img src="../images/cf.png" alt="">
              </router-link>
              <router-link :to="'/list/cfm'" class="main_name">穿越火线:枪战王者</router-link>
            </li>
            <li>
              <router-link :to="'/list/wzry'" class="main_img">
                <img src="../images/wzry.png" alt="">
              </router-link>
              <router-link :to="'/list/wzry'" class="main_name">王者荣耀</router-link>
            </li>
            <li style="margin-right: 0;">
              <router-link :to="'/list/dwrg'" class="main_img">
                <img src="../images/dwrg.png" alt="">
              </router-link>
              <router-link :to="'/list/dwrg'" class="main_name">第五人格</router-link>
            </li>
            <li>
              <router-link :to="'/list/cf'" class="main_img">
                <img src="../images/cfplus.png" alt="">
              </router-link>
              <router-link :to="'/list/cf'" class="main_name">穿越火线</router-link>
            </li>
            <li>
              <router-link :to="'/list/pubg'" class="main_img">
                <img src="../images/pubg.png" alt="">
              </router-link>
              <router-link :to="'/list/pubg'" class="main_name">绝地求生</router-link>
            </li>
          </ul>
        </main>
      </li>
      <li v-show="nc==1">
        <div class="chooseGame">
          <h6>选择游戏</h6>
          <p>
            <span class="gameName" :class="{bl:isbl==0}" @click="isb(0)">热</span>
            <span class="gameName" :class="{bl:isbl=='A'}" @click="isb('A')">A</span>
            <span class="gameName" :class="{bl:isbl=='C'}" @click="isb('C')">C</span>
            <span class="gameName" :class="{bl:isbl=='F'}" @click="isb('F')">F</span>
            <span class="gameName" :class="{bl:isbl=='J'}" @click="isb('J')">J</span>
            <span class="gameName" :class="{bl:isbl=='N'}" @click="isb('N')">N</span>
            <span class="gameName" :class="{bl:isbl=='Q'}" @click="isb('Q')">Q</span>
            <span class="gameName" :class="{bl:isbl=='S'}" @click="isb('S')">S</span>
            <span class="gameName" :class="{bl:isbl=='Y'}" @click="isb('Y')">Y</span>
          </p>
        </div>
        <main>
          <ul>
            <li style="margin-top: 10px;">
              <router-link :to="'/list/yxlm'" class="main_img">
                <img src="../images/yxlm2.png" alt="">
              </router-link>
              <router-link :to="'/list/yxlm'" class="main_name">英雄联盟</router-link>
            </li>
            <li style="margin-top: 10px;">
              <router-link :to="'/list/cf'" class="main_img">
                <img src="../images/cf2.png" alt="">
              </router-link>
              <router-link :to="'/list/cf'" class="main_name">穿越火线</router-link>
            </li>
            <li style="margin: 10px 0 0 0;">
              <router-link :to="'/list/pubg'" class="main_img">
                <img src="../images/pubg2.png" alt="">
              </router-link>
              <router-link :to="'/list/pubg'" class="main_name">绝地求生</router-link>
            </li>
            <li>
              <router-link :to="'/list/nz'" class="main_img">
                <img src="../images/nz2.png" alt="">
              </router-link>
              <router-link :to="'/list/nz'" class="main_name">逆战</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/qqfc.png" alt="">
              </router-link>
              <router-link to="" class="main_name">QQ飞车</router-link>
            </li>
            <li style="margin-right: 0;">
              <router-link to="" class="main_img">
                <img src="../images/csol.png" alt="">
              </router-link>
              <router-link to="" class="main_name">反恐精英OL</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/apex.png" alt="">
              </router-link>
              <router-link to="" class="main_name">Apex英雄</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/swxf.png" alt="">
              </router-link>
              <router-link to="" class="main_name">守望先锋</router-link>
            </li>
          </ul>
        </main>
      </li>
      <li v-show="nc==2">
        <div class="chooseGame">
          <h6>选择游戏</h6>
          <p>
            <span class="gameName" :class="{bl:isbl==0}" @click="isb(0)">热</span>
            <span class="gameName" :class="{bl:isbl=='B'}" @click="isb('B')">B</span>
            <span class="gameName" :class="{bl:isbl=='C'}" @click="isb('C')">C</span>
            <span class="gameName" :class="{bl:isbl=='D'}" @click="isb('D')">D</span>
            <span class="gameName" :class="{bl:isbl=='H'}" @click="isb('H')">H</span>
            <span class="gameName" :class="{bl:isbl=='J'}" @click="isb('J')">J</span>
            <span class="gameName" :class="{bl:isbl=='L'}" @click="isb('L')">L</span>
            <span class="gameName" :class="{bl:isbl=='M'}" @click="isb('M')">M</span>
            <span class="gameName" :class="{bl:isbl=='Q'}" @click="isb('Q')">Q</span>
            <span class="gameName" :class="{bl:isbl=='S'}" @click="isb('S')">S</span>
            <span class="gameName" :class="{bl:isbl=='T'}" @click="isb('T')">T</span>
            <span class="gameName" :class="{bl:isbl=='W'}" @click="isb('W')">W</span>
            <span class="gameName" :class="{bl:isbl=='Z'}" @click="isb('Z')">Z</span>
          </p>
        </div>
        <main>
          <ul>
            <li style="margin-top: 10px;">
              <router-link :to="'/list/wzry'" class="main_img">
                <img src="../images/wzry.png" alt="">
              </router-link>
              <router-link :to="'/list/wzry'" class="main_name">王者荣耀</router-link>
            </li>
            <li style="margin-top: 10px;">
              <router-link :to="'/list/cfm'" class="main_img">
                <img src="../images/cf.png" alt="">
              </router-link>
              <router-link :to="'/list/cfm'" class="main_name">穿越火线:枪战王者</router-link>
            </li>
            <li style="margin: 10px 0 0 0;">
              <router-link to="" class="main_img">
                <img src="../images/qqfcm.png" alt="">
              </router-link>
              <router-link to="" class="main_name">QQ飞车(手游)</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/cjzc.png" alt="">
              </router-link>
              <router-link to="" class="main_name">绝地求生:刺激战场</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/mrzh.png" alt="">
              </router-link>
              <router-link to="" class="main_name">明日之后</router-link>
            </li>
            <li style="margin-right: 0;">
              <router-link to="" class="main_img">
                <img src="../images/hyrz.png" alt="">
              </router-link>
              <router-link to="" class="main_name">火影忍者(手游)</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/qqdzz.png" alt="">
              </router-link>
              <router-link to="" class="main_name">球球大作战</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/lkwg.png" alt="">
              </router-link>
              <router-link to="" class="main_name">洛克王国</router-link>
            </li>
          </ul>
        </main>
      </li>
      <li v-show="nc==3">
        <div class="chooseGame">
          <h6>选择游戏</h6>
          <p>
            <span class="gameName" :class="{bl:isbl==0}" @click="isb(0)">热</span>
            <span class="gameName" :class="{bl:isbl=='B'}" @click="isb('A')">A</span>
            <span class="gameName" :class="{bl:isbl=='C'}" @click="isb('B')">B</span>
            <span class="gameName" :class="{bl:isbl=='D'}" @click="isb('C')">C</span>
            <span class="gameName" :class="{bl:isbl=='H'}" @click="isb('D')">D</span>
            <span class="gameName" :class="{bl:isbl=='J'}" @click="isb('F')">F</span>
            <span class="gameName" :class="{bl:isbl=='L'}" @click="isb('G')">G</span>
            <span class="gameName" :class="{bl:isbl=='M'}" @click="isb('H')">H</span>
            <span class="gameName" :class="{bl:isbl=='Q'}" @click="isb('J')">J</span>
            <span class="gameName" :class="{bl:isbl=='S'}" @click="isb('M')">M</span>
            <span class="gameName" :class="{bl:isbl=='T'}" @click="isb('N')">N</span>
            <span class="gameName" :class="{bl:isbl=='W'}" @click="isb('P')">P</span>
            <span class="gameName" :class="{bl:isbl=='Z'}" @click="isb('Q')">Q</span>
            <span class="gameName" :class="{bl:isbl=='M'}" @click="isb('R')">R</span>
            <span class="gameName" :class="{bl:isbl=='Q'}" @click="isb('S')">S</span>
            <span class="gameName" :class="{bl:isbl=='S'}" @click="isb('T')">T</span>
            <span class="gameName" :class="{bl:isbl=='T'}" @click="isb('W')">W</span>
            <span class="gameName" :class="{bl:isbl=='W'}" @click="isb('X')">X</span>
            <span class="gameName" :class="{bl:isbl=='Z'}" @click="isb('Y')">Y</span>
          </p>
        </div>
        <main>
          <ul>
            <li style="margin-top: 10px;">
              <router-link :to="'/list/pubg'" class="main_img">
                <img src="../images/pubg.png" alt="">
              </router-link>
              <router-link :to="'/list/pubg'" class="main_name">绝地求生</router-link>
            </li>
            <li style="margin-top: 10px;">
              <router-link :to="'/list/cf'" class="main_img">
                <img src="../images/cfplus.png" alt="">
              </router-link>
              <router-link :to="'/list/cf'" class="main_name">穿越火线</router-link>
            </li>
            <li style="margin: 10px 0 0 0;">
              <router-link :to="'/list/yxlm'" class="main_img">
                <img src="../images/yxlm.png" alt="">
              </router-link>
              <router-link :to="'/list/yxlm'" class="main_name">英雄联盟</router-link>
            </li>
            <li>
              <router-link :to="'/list/nz'" class="main_img">
                <img src="../images/nz.png" alt="">
              </router-link>
              <router-link :to="'/list/nz'" class="main_name">逆战</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/qqfc2.png" alt="">
              </router-link>
              <router-link to="" class="main_name">QQ飞车</router-link>
            </li>
            <li style="margin-right: 0;">
              <router-link to="" class="main_img">
                <img src="../images/swxf2.png" alt="">
              </router-link>
              <router-link to="" class="main_name">守望先锋</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/dnf.png" alt="">
              </router-link>
              <router-link to="" class="main_name">地下城与勇士</router-link>
            </li>
            <li>
              <router-link to="" class="main_img">
                <img src="../images/smzh.png" alt="">
              </router-link>
              <router-link to="" class="main_name">使命召唤OL</router-link>
            </li>
          </ul>
        </main>
      </li>
      <li v-show="nc==4">
        <div class="chooseGame">
          <h6>选择游戏</h6>
          <p>
            <span class="gameName" :class="{bl:isbl==0}" @click="isb(0)">热</span>
            <span class="gameName" :class="{bl:isbl=='V'}" @click="isb('V')">V</span>
          </p>
        </div>
        <main>
          <ul>
            <li style="margin-top: 10px;">
              <router-link :to="'/list/vip'" class="main_img">
                <img src="../images/vip.png" alt="">
              </router-link>
              <router-link :to="'/list/vip'" class="main_name">VIP会员账号</router-link>
            </li>
          </ul>
        </main>
      </li>
      <li v-show="nc==5">

      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nc:0,
        isbl:0,
      }
    },
    methods: {
      goSearch(){
        this.$router.push('/search');
      },
      goHome(){
        this.$router.push('/home');
      },
      navc(i){
        this.nc=i;
      },
      isb(i){
        this.isbl=i;
      }
    }
  }
</script>

<style scoped>
  .nav{
    overflow: auto;
    width: 95%;
    max-width: 475px;
    margin: 5px auto 0;
  }
  .nav::-webkit-scrollbar{
    display: none;
  }
  .nav>ul{
    width: 497px;
    overflow: hidden;
  }
  .nav>ul>li{
    float: left;
    padding: 0 3px;
    font-size: 14px;
    box-sizing: border-box;
    height: 30px;
    line-height: 30px;
  }
  .nav_checked{
    border-bottom: 3px solid #00c1fb;
    color: #00c1fb;
  }
  .chooseGame{
    width: 90%;
    max-width: 450px;
    margin: 17px auto 0;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-sizing: border-box;
    padding-bottom: 15px;
  }
  .chooseGame>h6{
    font-size: 12px;
    line-height: 12px;
    color: #333333;
    padding-left: 15px;
    margin-top: 18px;
  }
  .gameName{
    float: left;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 1px solid #dadada;
    font-size: 13px;
    line-height: 23px;
    background: white;
    color: #333333;
    text-align: center;
    margin: 15px 10px;
  }
  .bl{
    background: #00c1fb;
    color: white;
  }
  main{
    width: 95%;
    max-width: 475px;
    margin: 15px auto 50px;
    background: white;
    border-radius: 4px;
    padding: 10px 0;
  }
  main>ul{
    overflow: hidden;
    width: 90%;
    margin: auto;
    padding: 15px 0;
  }
  main>ul>li{
    float: left;
    margin: 8% 15% 0 0;
    width: 19.8265vw;
    max-width: 99px;
    height: 19.8265vw;
    max-height: 99px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 3px solid #b0bdc6;
  }
  .main_img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
  main>ul img{
    width: 100%;
    height: 100%;
  }
  .main_name{
    display: block;
    width: 100%;
    height: 25px;
    border-radius: 4px;
    background: linear-gradient(to right,#ffce48,#ff9216);
    position: absolute;
    color: white;
    font-size: 12px;
    line-height: 25px;
    text-align: center;
    left: 0;
    top: 88%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  header{
    height: 45px;
    background: #118eea;
  }
  .search_back{
    float: left;
    color: white;
    margin: 12px 0 0 15px;
    z-index: 3;
  }
  .goSearch{
    float: right;
    color: white;
    margin: 12px 15px 0 0;
  }
  h2{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    text-align: center;
    line-height: 45px;
    color: white;
  }
</style>
