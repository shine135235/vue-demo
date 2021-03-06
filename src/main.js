import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  List,
  Icon,
  Button,
  Popover,
  Slider,
  Row,
  Col,
  Input,
  message
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(List);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Popover);
Vue.use(Slider);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);

Vue.prototype.$message = message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
console.log(process.env);
console.log(
  "%c ",
  "padding:112px 150px;background:url('http://returnc.com/frontend/images/console.gif') no-repeat;"
);
