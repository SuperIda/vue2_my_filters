import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 批量注册过滤器
import * as filters from "@/filters";
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
