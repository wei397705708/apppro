<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                    <a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                </div>
            </div>

        </div>
        <ul class="page-lazyload-list lazyload_body">
            <router-link 
            class="page-lazyload-listitem" 
            v-for="item in list" 
            :key="item.id"
            :to="'/home/photolist/photodetails/'+item.id" tag="li">
                <img class="page-lazyload-image" v-lazy="item.src">
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '../../lib/js/mui.min.js';
import lazyimg from '../../json/lazyloadimg.json';

export default {
    data(){
        return{
            list: lazyimg
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
}
</script>

<style lang="less" scoped>
    *{
        touch-action: pan-y;
    }
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .lazyload_body{
        height: calc(100vh - 90px - 38px);
        overflow-y: auto;
        .page-lazyload-listitem{
            width: 92%;
            max-width: 500px;
        }
    }
    
</style>