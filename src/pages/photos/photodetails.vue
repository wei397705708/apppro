<template>
    <div class="newsinfo_body">
        <h3 class="newsinfolist_title">幸福</h3>
        <p class="mui-ellipsis newslit_timenum">
            <span class="newslit_time">发表时间：2021-07-31 10:52:21</span>
            <span class="newslit_time">点击次数：0次</span>
        </p>
        <div class="newsinfo_cont">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
            <p class="newsinfo_cont_text">在刚刚结束的东京奥运会女子帆板RS:X级比赛中，中国选手卢云秀夺冠，成功摘得东京奥运会帆船项目第一金，这也是中国代表团在本届奥运会上斩获的第20金！升国旗！奏国歌！</p>
            <!-- <img class="newsinfo_cont_img" src="../../images/img03.png" alt=""> -->
            
        </div>
        <div class="newsline"></div>
        <!-- 评论位置 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
import comment from "../common/comment";
export default {
    data(){
        return{
            id: this.$route.params.id,
            slide1: [
                {
                    src: '../../images/photodetails/cc_b.jpeg',
                    msrc: '../../images/photodetails/cc_m.jpeg',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 600,
                    h: 400
                },
                {
                    src: '../../images/photodetails/f_b.jpeg',
                    msrc: '../../images/photodetails/f_m.jpeg',
                    alt: 'picture2',
                    title: 'Image Caption 2',
                    w: 1200,
                    h: 900
                }
            ]
        }
    },
    components: {
        "cmt-box": comment,
    },
    methods: {
      handleClose () {
        // console.log('close event')
      }
    }
}
</script>

<style lang="less" scoped>
@newstextfontsize: 12px;
@newtitlefontsize: 14px;
@newsinfotitlecolor: #646464;
@newsinfotextcolor: #bdbdbd;
@bgcolor: #fff;

.newsinfo_body{
    height: calc(100vh - 90px);
    overflow-y: auto;
    padding: 0px 16px;
    background-color: @bgcolor;
}

.newsinfolist_title{
    font-size: @newtitlefontsize;
    color: @newsinfotitlecolor;
    text-align: center;
    margin: 0px;
    padding-top: 10px;
}
.newslit_timenum{
        display: flex;
        justify-content: space-between;
        padding-bottom: 6px;
        border-bottom: solid 1px #e2e2e2;
        .newslit_time{
            font-size: @newstextfontsize;
            color: @newsinfotextcolor;
            margin-top: 10px;
        }
}
.newsinfo_cont_text{
    font-size: @newstextfontsize;
}
.newsinfo_cont_img{
    width: 100%;
}
</style>