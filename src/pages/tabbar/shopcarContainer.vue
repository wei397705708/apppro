<template>
    <div class="contbody_height background_color_white">
        <div class="goods_list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div v-for="item in cardata" :key="item.id" class="mui-card-content-inner display_flex align_items_center">
                        <mt-switch 
                        v-model="$store.getters.selectedState[item.id]" 
                        @change="changestate(item.id,$store.getters.selectedState[item.id])">
                        </mt-switch>
                        <!-- <div class="car_goodsimg display_flex align_items_center">
                            <img src="../../images/lazyload/lazyimg02.jpeg" alt="">
                        </div> -->
                        <img class="car_goodsimg" :src="srcaddress + item.id + `.jpeg`" alt="">
                        <div class="goodscar_titlebox">
                            <h3 class="goodscar_title">营养蔬菜水果餐</h3>
                            <div class="display_flex align_items_center">
                                <span class="goodscar_title_jiage font_size_12">￥{{item.price}}</span>
                                <carnumbox :spnum="item.count" :goodsid="item.id"></carnumbox>
                                <span @click="deleteList(item.id)" class="goodscar_title_scbtn font_size_12">删除</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner goodsinfo_imgcontent display_flex align_items_center">
                    <div class="goodsinfo_zongjia">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span>{{$store.getters.sumNum.count}}</span>件，总价<span>￥{{$store.getters.sumNum.price}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import lazyimg from '../../json/lazyloadimg.json';
import carnumbox from '../common/carnumbox';
export default {
    data(){
        return {
            cardata: this.$store.state.car,
            srcaddress: "../../images/lazyload/lazyimg"
        }
    },
    components: {
        carnumbox,
    },
    methods:{
        deleteList(id){
            this.$store.commit('deletegoods',id);
        },
        changestate(id,stateF){
            
            this.$store.commit('changeSwitchState',{
                id,
                selected: stateF
            });
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
