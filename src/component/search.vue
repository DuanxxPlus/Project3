<template>
  <div>
    <div class="search">
      <svg class="icon search_back" aria-hidden="true" @click="back()">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <form action="#">
        <input type="text" placeholder="请输入关键词">
        <img src="../images/search.png" alt="">
      </form>
      <span>搜索</span>
    </div>
    <article>
      <h6>热门搜索</h6>
      <span v-for="(v,i) in list" @click="ff(i)">{{v.value}}</span>
    </article>
    <main>
      <p>搜索历史</p>
      <img src="../images/search_del.png" alt="">
    </main>
  </div>
</template>

<script>
  export default {
    name: "search",
    data(){
      return{
        list:[],
      };
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      ff(i){
        if(i==2) this.$router.push('list/pubg');
        else if(i==3) this.$router.push('list/wzry');
      }
    },
    mounted(){
      var t=this;
      this.$http.get('./json/hotSearch.json').then(function (res) {
        t.list=res.data.node;
      }).catch().then();
    }
  }
</script>

<style scoped>
  .search_back{
    position: absolute;
    font-size: 20px;
    color: white;
    left: 12px;
    top: 10px;
  }
  .search>span{
    float: right;
    color: white;
    font-size: 14px;
    line-height: 42px;
    margin-right: 10px;
  }
  article{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #dddddd;
    background: white;
    overflow: hidden;
  }
  article>h6{
    margin: 19px 0 0 15px;
    line-height: 14px;
    font-size: 14px;
  }
  article>span{
    display: block;
    float: left;
    background: #fdeed4;
    width: 66px;
    height: 27px;
    line-height: 27px;
    font-size: 12px;
    text-align: center;
    color: #daaa02;
    border-radius: 15px;
    margin: 17px 0 0 10px;
  }
  main{
    width: 100%;
    height: 60px;
    background: white;
  }
  main>p{
    font-size: 15px;
    float: left;
    line-height: 60px;
    margin-left: 15px;
  }
  main>img{
    float: right;
    margin: 24px 15px 0 0;
  }
</style>
