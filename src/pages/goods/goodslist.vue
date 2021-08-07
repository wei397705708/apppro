<template>
   <ul class="mui-table-view mui-grid-view goodslist_body ">
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
        <a @click="goodsinfo(id[0])">
            <img class="mui-media-object" src="../../images/lazyload/lazyimg03.jpeg" />
            <div class="mui-media-body">金三顺寿司金三顺寿司金三顺寿司金三顺寿司金三顺寿司</div>
            <div class="goodslist_jia_box">
                <div class="goodslist_jia_list">
                    <span class="goodslist_xjnum">￥1323</span>
                    <span class="goodslist_yjnum">￥2323</span>
                </div>
                <div class="goodslist_goumainum">
                    <span>热卖中</span>
                    <span>已售2323件</span>
                </div>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
      <a @click="goodsinfo(id[1])">
        <img class="mui-media-object" src="../../images/lazyload/lazyimg04.jpeg" />
        <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
        <div class="goodslist_jia_box">
            <div class="goodslist_jia_list">
                <span class="goodslist_xjnum">￥1323</span>
                <span class="goodslist_yjnum">￥2323</span>
            </div>
            <div class="goodslist_goumainum">
                <span>热卖中</span>
                <span>已售2323件</span>
            </div>
        </div></a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
      <a @click="goodsinfo(id[2])"><img class="mui-media-object" src="../../images/lazyload/lazyimg02.jpeg" />
        <div class="mui-media-body">Color of SIP CBD</div>
        <div class="goodslist_jia_box">
            <div class="goodslist_jia_list">
                <span class="goodslist_xjnum">￥1323</span>
                <span class="goodslist_yjnum">￥2323</span>
            </div>
            <div class="goodslist_goumainum">
                <span>热卖中</span>
                <span>已售2323件</span>
            </div>
        </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
      <a @click="goodsinfo(id[3])">
        <img class="mui-media-object" src="../../images/lazyload/lazyimg02.jpeg" />
        <div class="mui-media-body">静静看这世界</div>
        <div class="goodslist_jia_box">
            <div class="goodslist_jia_list">
                <span class="goodslist_xjnum">￥1323</span>
                <span class="goodslist_yjnum">￥2323</span>
            </div>
            <div class="goodslist_goumainum">
                <span>热卖中</span>
                <span>已售2323件</span>
            </div>
        </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6">
      <a @click="goodsinfo(id[4])">
        <img class="mui-media-object" src="../../images/lazyload/lazyimg03.jpeg" />
        <div class="mui-media-body">金三顺寿司金三顺寿司金三顺寿司金三顺寿司金三顺寿司</div>
        <div class="goodslist_jia_box">
            <div class="goodslist_jia_list">
                <span class="goodslist_xjnum">￥1323</span>
                <span class="goodslist_yjnum">￥2323</span>
            </div>
            <div class="goodslist_goumainum">
                <span>热卖中</span>
                <span>已售2323件</span>
            </div>
        </div>
        </a>
    </li>
    <mt-button class="goodslist_padding fontsize_12" type="primary" size="large" plain>加载更多</mt-button>
  </ul>
  
</template>

<script>
export default {
    data(){
        return{
            id: [0,1,2,3,4]
        }
    },
    methods: {
        goodsinfo(id){
            this.$router.push({ name: 'goodsinfo', params: {infoid: id} });
        }
    }
};
</script>

<style lang="less" scoped>
.goodslist_padding{
    margin-bottom: 20px;
    margin-top: 20px;
}
.goodslist_body{
    height: calc(100vh - 90px);
    overflow-y: auto;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
    max-width: 180px;
    height: 180px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    white-space: normal;
    font-size: 12px;
    overflow: visible;
    height: 34px;
    text-align: left;
}
.mui-table-view.mui-grid-view {
    padding: 6px;
}
.goodslist_body 
.mui-table-view-cell>a:not(.mui-btn) {
    border: solid 1px #ddd;
}
.mui-table-view.mui-grid-view .mui-table-view-cell {
    margin-right: 0px;
    padding: 2px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell>a:not(.mui-btn) {
    margin: 0px;
}
.goodslist_body.mui-table-view:after {
    height: 0px;
}

.goodslist_jia_box{
    padding: 4px;
    background-color: #e8e8e8;
    font-size: 12px;
    color: #646464;
    text-align: left;
    .goodslist_jia_list{
        .goodslist_yjnum{
            text-decoration: line-through;
            margin-left: 4px;
            color: #aaa;
        }
        .goodslist_xjnum{
            font-size: 14px;
            color: rgb(238, 49, 49);
        }
    }
    .goodslist_goumainum{
        display: flex;
        justify-content: space-between;
    }
}
</style>