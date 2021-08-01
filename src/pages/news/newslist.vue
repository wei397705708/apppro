<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/1'">
            <img class="mui-media-object mui-pull-left" src="../../images/img01.png"/>
            <div class="mui-media-body">
                <h3 class="newslist_title">幸福幸福幸福</h3>
                <p class="mui-ellipsis newslit_timenum">
                    <span class="newslit_time">发表时间：2021-07-31 10:52:21</span>
                    <span class="newslit_time">点击次数：0次</span>
                </p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../images/img01.png"/>
            <div class="mui-media-body">
                <h3 class="newslist_title">幸福</h3>
                <p class="mui-ellipsis newslit_timenum">
                    <span class="newslit_time">发表时间：2021-07-31 10:52:21</span>
                    <span class="newslit_time">点击次数：0次</span>
                </p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../images/img01.png"/>
            <div class="mui-media-body">
                <h3 class="newslist_title">幸福</h3>
                <p class="mui-ellipsis newslit_timenum">
                    <span class="newslit_time">发表时间：2021-07-31 10:52:21</span>
                    <span class="newslit_time">点击次数：0次</span>
                </p>
            </div>
        </a>
    </li>
  </ul>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
};
</script>

<style lang="less" scoped>
@newstextfontsize: 12px;
@newtitlefontsize: 14px;
@titlecolor: #646464;
@textcolor: #4d97e4;

.newslist_title{
    font-size: @newtitlefontsize;
    color: @titlecolor;
}
.mui-media-body{
    .newslit_timenum{
        display: flex;
        justify-content: space-between;
        .newslit_time{
            font-size: @newstextfontsize;
            color: @textcolor;
        }
    }
}
</style>