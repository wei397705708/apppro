import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import app from "./app";
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
import "./lib/css/mui.min.css";
import "./lib/css/icons-extra.css"

Vue.use(VueRouter);
Vue.use(Mint);

let vm = new Vue({
    el: "#app",
    router,
    render: c => c(app),
});