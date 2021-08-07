import VueRouter from 'vue-router';
import homeContainer from './pages/tabbar/homeContainer';
import menbarContainer from './pages/tabbar/menbarContainer';
import searchContainer from './pages/tabbar/searchContainer';
import shopcarContainer from './pages/tabbar/shopcarContainer';
import newslist from './pages/news/newslist';
import newsinfo from './pages/news/newsinfo';
import photolist from './pages/photos/photolist';
import photodetails from './pages/photos/photodetails';
import goodslist from './pages/goods/goodslist';
import goodsinfo from './pages/goods/goodsinfo';
import goodsdesc from './pages/goods/goodsdesc';
import goodscomment from './pages/goods/goodscomment';

let router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: homeContainer},
        {path: '/menbar', component: menbarContainer},
        {path: '/shopcar', component: shopcarContainer},
        {path: '/search', component: searchContainer},
        {path: '/home/newslist', component: newslist},
        {path: '/home/newsinfo/:id', component: newsinfo},
        {path: '/home/photolist', component: photolist},
        {path: '/home/photolist/photodetails/:id', component: photodetails},
        {path: '/home/goodslist', component: goodslist},
        {path: '/home/goodsinfo/:infoid', component: goodsinfo, name: 'goodsinfo'},
        {path: '/home/goodsinfo/goodsdesc/:gdid', component: goodsdesc, name: 'goodsdesc'},
        {path: '/home/goodsinfo/goodscomment/:cmid',component: goodscomment, name: 'goodscomment'},
    ],
    linkActiveClass: "mui-active",
});

export default router;