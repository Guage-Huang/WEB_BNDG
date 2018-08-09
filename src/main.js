/*
 *                             _ooOoo_
 *                            o8888888o
 *                            88" . "88
 *                            (| -_- |)
 *                            O\  =  /O
 *                         ____/`---'\____
 *                       .'  \\|     |//  `.
 *                      /  \\|||  :  |||//  \
 *                     /  _||||| -:- |||||-  \
 *                     |   | \\\  -  /// |   |
 *                     | \_|  ''\---/''  |   |
 *                     \  .-\__  `-`  ___/-. /
 *                   ___`. .'  /--.--\  `. . __
 *                ."" '<  `.___\_<|>_/___.'  >'"".
 *               | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *               \  \ `-.   \_ __\ /__ _/   .-` /  /
 *          ======`-.____`-.___\_____/___.-`____.-'======
 *                             `=---='
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                   
*/

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import FastClick from 'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { DatetimePlugin,AlertPlugin,WechatPlugin } from 'vux'

import axios from 'axios'
Vue.prototype.$http = axios


import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.min.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/weui.min.css'
import '@/assets/styles/main.css'

Vue.config.productionTip = false
//FastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)
Vue.use(DatetimePlugin)
Vue.use(AlertPlugin)
Vue.use(WechatPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {

  }
})
