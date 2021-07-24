import Vue from "vue";
import app from "./app";
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import "./lib/css/mui.min.css";

Vue.use(Mint);

let vm = new Vue({
    el: "#app",
    render: c => c(app),
});