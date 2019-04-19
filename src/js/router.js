import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../component/home.vue';
import lease from '../component/lease.vue';
import download from '../component/download.vue';
import my from '../component/my.vue';
import search from '../component/search.vue';
import list from '../component/list.vue';
import register from '../component/register.vue';
import detail from '../component/detail.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:home,
    },
    {
      path:'/lease',
      component:lease,
    },
    {
      path:'/download',
      component:download,
    },
    {
      path:'/my',
      component:my,
    },
    {
      path:'/search',
      component:search,
    },
    {
      path:'/list/:s',
      component:list,
    },
    {
      path:'/register',
      component:register,
    },
    {
      path:'/detail/:n/:i',
      component:detail,
    },
    {
      path:'/*',
      redirect:'/home',
    }
  ],
});
