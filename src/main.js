/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import WildVue from 'wildvue';
import Wilddog from 'wilddog';
import AMap from './components/map';
import Env from './config/env';

Vue.use(VueRouter);//安装VueRouter模块
Vue.use(iView);//安装iView组件库
Vue.use(WildVue);//安装wilddog vue模块

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    history: Env != 'production'
});

router.map(Routers);

router.beforeEach(() => {
    window.scrollTo(0, 0);
});

router.afterEach(() => {

});

router.redirect({
    '*': "/test"
});
router.start(App, '#app');

new Vue({
  el: 'body',
  components: { Map }
})