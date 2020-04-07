import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

// mock开关
const mock = true
if (mock) {
  require('./mock/api') // 这里不要用import，import 是预编译加载文件 require是执行加载文件
}

// 根据前端的跨域方式做调整 例如，代理的方式： /a/b /api/a/b => /a/b
// axios.defaults.baseURL = '/api' // '/api'的形式 适用于代理的跨域
axios.defaults.baseURL = 'https://easy-mock.com/mock/5e8c979ede14c07ce4b4f488/api' // easy mock地址
// axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status == 0) { // 请求成功
    return res.data
  } else if (res.status == 10) { // 未登录
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false // 生产环境的提示，默认是false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')