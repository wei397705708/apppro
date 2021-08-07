import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import router from "./router";
import app from "./app";
import Mint from "mint-ui";
import moment from "moment";
import VuePreview from 'vue-preview'
import "./lib/css/app.vue.css";
import "./lib/css/lazyload.vue.css";
import "mint-ui/lib/style.css";
import "./lib/css/mui.min.css";
import "./lib/css/icons-extra.css";
import "./css/style.less";

Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(VueResource);
Vue.use(VuePreview)


Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;

// 定义全局时间格式化过滤器
Vue.filter('dateFormat',function(datastr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(datastr).format(pattern);
});

let vm = new Vue({
    el: "#app",
    router,
    // render: c => c(app),
    render(c){
        
        return c(app);
    },
});