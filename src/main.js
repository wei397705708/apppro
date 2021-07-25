import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import router from "./router";
import app from "./app";
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
import "./lib/css/mui.min.css";
import "./lib/css/icons-extra.css"

Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(VueResource);

let vm = new Vue({
    el: "#app",
    router,
    // render: c => c(app),
    render(c){
        return c(app);
    },
});