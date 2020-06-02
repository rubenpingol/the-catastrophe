import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import Dayjs from "vue-dayjs";
import VueScrollTo from "vue-scrollto";
import VueSweetAlert2 from "vue-sweetalert2";
import VueCountdown from "@chenfengyuan/vue-countdown";

import "./scss/styles.scss";
import "sweetalert2/dist/sweetalert2.min.css";
import App from "./App.vue";
import router from "./router";
import ScrollToConfig from "./config/ScrollTo";
import SweetAlert2Config from "./config/SweetAlert2";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Dayjs);
Vue.use(VueAxios, axios);
Vue.use(VueScrollTo, ScrollToConfig);
Vue.use(VueSweetAlert2, SweetAlert2Config);
Vue.component(VueCountdown.name, VueCountdown);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
