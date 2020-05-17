import Vue from "vue";
import router from "./router";
import Layout from "./components/Layout.vue";

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(Layout)
}).$mount("#app");
