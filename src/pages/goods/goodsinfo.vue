<template>
    <div class="mui-content goodsinfo_content">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div ref="ball" v-show="ballflag" class="ball"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner goodsinfo_imgcontent">
                    <scrollimg :imagesrc="src" :isfull="true"></scrollimg>
                </div>
            </div>
        </div>
        <div class="mui-card overflow_visible">
            <div class="mui-card-header">小M手机新款</div>
            <div class="mui-card-content" >
                <div class="display_flex goodsinfo_jiage">
                    <span>市场价：</span>
                    <span class="goodsinfo_scjiagenum">￥2322</span>
                    <span class="margin_left_20">预售价：</span>
                    <span class="goodsinfo_ysjiagenum">￥{{price}}</span>
                </div>
                <div class="display_flex goodsinfo_jiage goodsinfo_gmnumbox position_relative">
                    <span class="goodsinfo_gmtitle">购买数量：</span>

                    <num-box :maxFnum="maxn" @getcountnum = "countnum"></num-box>

                    <!-- <button class="goodsinfo_numbtn jianbtn">-</button>
                    <input class="goodsinfo_numinput" type="text">
                    <button class="goodsinfo_numbtn jiabtn">+</button> -->
                    
                </div>
            </div>
            <div class="mui-card-footer">
                <div class="mui-btn mui-btn-primary font_size_12">
					立即购买
				</div>
                <button type="button" class="mui-btn mui-btn-danger font_size_12" @click="anim">
					加入购物车
				</button>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="display_flex goodsinfo_jiage">
                    <span>商品编号：</span>
                    <span>D2323O42</span>
                </div>
                <div class="display_flex goodsinfo_jiage">
                    <span>库存情况：</span>
                    <span>{{maxn}}件</span>
                </div>
                <div class="display_flex goodsinfo_jiage">
                    <span>商家时间：</span>
                    <span>2021-08-03 09:00:00</span>
                </div>
            </div>
            <div class="mui-card-footer goodsinfo_footer">
                <mt-button class="fontsize_12" type="primary" size="large" plain @click="picw(id)">图文介绍</mt-button>
                <mt-button class="fontsize_12" type="danger" size="large" plain @click="comment(id)">商品评论</mt-button>
            </div>
        </div>
        
    </div>
</template>

<script>
import imgsrc from "../../json/img.json";
import scrollimg from "../common/scrollimg";
import numbox from "../common/numbox";
export default {
    components: {
        scrollimg,
        "num-box": numbox,
    },
    data() {
        return {
            src: imgsrc,
            id: this.$route.params.infoid,
            ballflag: false,
            goodsnum: 1,
            maxn: 99,
            price: 1989,
            onoff: true,
        };
    },
    methods:{
        picw(id){
            this.$router.push({ name: 'goodsdesc', params: {gdid: id} });
        },
        comment(id){
            this.$router.push({name: 'goodscomment', params: {cmid: id} });
        },
        anim(){
            if(this.onoff){
                this.onoff = false;
                this.ballflag = !this.ballflag;
                let goodsinfostr = {
                    id: this.id,
                    count: parseInt(this.goodsnum),
                    price: this.price,
                    selected: true
                };
                this.$store.commit('getinfos',goodsinfostr);
                
            }
            
        },
        beforeEnter(el){
            el.style.transform = "translate(0, 0)";
        },
        enter(el, done){
            el.offsetWidth;
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePositino = document.getElementById("muibadge").getBoundingClientRect();
            const ballX = badgePositino.left - ballPosition.left;
            const ballY = badgePositino.top - ballPosition.top;
            el.style.transform = `translate(${ballX + 3}px,${ballY + 3}px)`;
            el.style.transition = "all cubic-bezier(.63,-0.51,.39,.99) .6s";
            done();
        },
        afterEnter(el){
            this.ballflag = !this.ballflag;
            this.onoff = true;
        },
        countnum(num){
            this.goodsnum = num;
        },
    },
}
</script>

<style lang="less" scoped>
    .goodsinfo_content{
        height: calc(100vh - 90px);
        overflow-y: auto;
        position: relative;
    }
    .goodsinfo_imgcontent{
        height: 200px;
        padding: 2px;
    }
    .ball{
        width: 10px;
        height: 10px;
        background-color: rgb(235, 51, 51);
        border-radius: 50%;
        position: absolute;
        top: 327px;
        left: 225px;
        z-index: 99;
    }
    .overflow_visible{
        overflow: visible;
    }
    .position_relative{
        position: relative;
    }
</style>