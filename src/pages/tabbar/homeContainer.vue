<template>
  <div class="home_swipe_body">
    <!-- 轮播图位置 -->
    <scrollimg :imagesrc="src" :isfull="false"></scrollimg>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon">
              <img class="grid_iconimg" src="../../images/news.png" alt="">
          </span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <span class="mui-icon">
              <!-- <span class="mui-badge">5</span> -->
              <img class="grid_iconimg" src="../../images/images.png" alt="">
            </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <span class="mui-icon">
              <img class="grid_iconimg" src="../../images/shopcar.png" alt="">
          </span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon">
              <img class="grid_iconimg" src="../../images/message.png" alt="">
          </span>
          <div class="mui-media-body">留言反馈</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon">
              <img class="grid_iconimg" src="../../images/video.png" alt="">
          </span>
          <div class="mui-media-body">视频专区</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon">
              <img class="grid_iconimg" src="../../images/telphone.png" alt="">
          </span>
          <div class="mui-media-body">联系我们</div></a
        >
      </li>
      
    </ul>
  </div>
</template>

<script>
import imgsrc from "../../json/img.json";
import scrollimg from "../common/scrollimg.vue";
export default {
  components:{
    scrollimg,
  },
  data() {
    return {
      src: imgsrc,
    };
  },
  methods: {
    getSwipe() {
      this.$http.get("http://vue.studyit.io/api/getlunbo").then((result) => {
        console.log(result.body);
      });
    },
  },
  created() {
    // this.getSwipe();
  },
};
</script>

<style lang="scss" scoped>
.home_swipe_body {
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: rebeccapurple;
      }
      &:nth-child(2) {
        background-color: darkcyan;
      }
      &:nth-child(3) {
        background-color: salmon;
      }
    }
  }
  
  .grid_iconimg{
      width: 60px;
  }
}
</style>
