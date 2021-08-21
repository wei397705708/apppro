import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import router from "./router";
import app from "./app";
import Mint from "mint-ui";
import moment from "moment";
import VuePreview from 'vue-preview';
import Vuex from 'vuex';
import "./lib/css/app.vue.css";
import "./lib/css/lazyload.vue.css";
import "mint-ui/lib/style.css";
import "./lib/css/mui.min.css";
import "./lib/css/icons-extra.css";
import "./css/style.less";

Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(VueResource);
Vue.use(VuePreview);
Vue.use(Vuex);

Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;

// 定义全局时间格式化过滤器
Vue.filter('dateFormat',function(datastr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(datastr).format(pattern);
});
function lStorage(){
    return JSON.parse(localStorage.getItem('car')) || [];
};
let store = new Vuex.Store({
    state:{
        car: lStorage(),
    },
    mutations:{
        getinfos: function(state,goodsinfo){
            let flag = state.car.some(item=>{
                if(item.id === goodsinfo.id){
                    item.count += parseInt(goodsinfo.count);
                    return true;
                }
            });
            if(!flag){
                state.car.push(goodsinfo);
            }
            // 把数据存储到本地
            localStorage.setItem('car',JSON.stringify(state.car));
            // console.log(state.car);
        },
        updateNumFn(state,goodsmsg){
            state.car.some(item=>{
                if(item.id === goodsmsg.id){
                    item.count = parseInt(goodsmsg.count);
                    return true;
                }
            });
            console.log(state.car);
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        deletegoods(state,id){
            state.car.some((item,index)=>{
                if(item.id == id){
                    state.car.splice(index,1);
                    return true;
                };
            });
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        changeSwitchState(state,options){
            state.car.some(item=>{
                if(item.id == options.id){
                    item.selected = options.selected;
                    return true;
                }
            });
            localStorage.setItem('car',JSON.stringify(state.car));
        },
    },
    getters:{
        getCountNum(state){
            let count = 0;
            state.car.forEach(item=>{
                count += item.count;
            });
            return count;
        },
        selectedState(state){
            var obj = {};
            state.car.forEach((item)=>{
                obj[item.id] = item.selected;
            });
            return obj;
        },
        sumNum(state){
            let numobj = {};
            let price = 0;
            let count = 0;
            state.car.forEach(item=>{
                if(item.selected){
                    price += item.price*item.count;
                    count += item.count;
                }
            });
            numobj.count = count;
            numobj.price = price;
            return numobj;
        },
    }
});

let vm = new Vue({
    el: "#app",
    router,
    store: store,
    // render: c => c(app),
    render(c){
        
        return c(app);
    },
});