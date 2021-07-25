import VueRouter from 'vue-router';
import homeContainer from './pages/homeContainer';
import menbarContainer from './pages/menbarContainer';
import searchContainer from './pages/searchContainer';
import shopcarContainer from './pages/shopcarContainer';

let router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: homeContainer},
        {path: '/menbar', component: menbarContainer},
        {path: '/shopcar', component: shopcarContainer},
        {path: '/search', component: searchContainer},
    ],
    linkActiveClass: "mui-active",
});

export default router;