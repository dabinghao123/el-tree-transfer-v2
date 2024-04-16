// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import elementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(elementUi);

import Axios from "axios";
Vue.prototype.axios = Axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
