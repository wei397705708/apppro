import VueRouter from 'vue-router';
import homeContainer from './pages/tabbar/homeContainer';
import menbarContainer from './pages/tabbar/menbarContainer';
import searchContainer from './pages/tabbar/searchContainer';
import shopcarContainer from './pages/tabbar/shopcarContainer';
import newslist from './pages/news/newslist';
import newsinfo from './pages/news/newsinfo';
import photolist from './pages/photos/photolist';
import photodetails from './pages/photos/photodetails';

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
    ],
    linkActiveClass: "mui-active",
});

export default router;