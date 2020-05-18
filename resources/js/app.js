import Vue from "vue";
import router from "./router";
import Permissions from './mixins/Permissions.vue';
import Layout from "./components/Layout.vue";

Vue.mixin(Permissions);

Vue.config.devtools = true;
Vue.config.productionTip = false;



new Vue({
    router,
    render: h => h(Layout)
}).$mount("#app");
