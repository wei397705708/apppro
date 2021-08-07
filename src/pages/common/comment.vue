<template>
  <div class="comment_body">
    <div>发表评论</div>
    <div class="mui-input-row" style="margin: 10px 5px">
      <textarea
        class="fontsize_12"
        id="textarea"
        rows="5"
        placeholder="请输入评论内容"
        v-model="msg"
      ></textarea>
    </div>
    <mt-button class="fontsize_12" type="primary" size="large">发表</mt-button>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <div>
          <img
            class="news_commentimg mui-media-object mui-pull-left"
            src="../../images/images.png"
          />
          <div class="mui-media-body fontsize_14">
            幸福
            <p class="">在刚刚结束的东京奥运会女子帆板RS可是？</p>
            <div class="news_comment_timebox">
              <span>2021-07-31 21:14:59</span>
              <span>第1楼</span>
            </div>
          </div>
        </div>
      </li>
      <li class="mui-table-view-cell mui-media">
        <div>
          <img
            class="news_commentimg mui-media-object mui-pull-left"
            src="../../images/images.png"
          />
          <div class="mui-media-body fontsize_14">
            幸福
            <p class="">在刚刚结束的东京奥运会女子帆板RS可是？</p>
            <div class="news_comment_timebox">
              <span>2021-07-31 21:14:59</span>
              <span>第1楼</span>
            </div>
          </div>
        </div>
      </li>
      <li class="mui-table-view-cell mui-media">
        <div>
          <img
            class="news_commentimg mui-media-object mui-pull-left"
            src="../../images/images.png"
          />
          <div class="mui-media-body fontsize_14">
            幸福
            <p class="">在刚刚结束的东京奥运会女子帆板RS可是？</p>
            <div class="news_comment_timebox">
              <span>2021-07-31 21:14:59</span>
              <span>第1楼</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <mt-button class="fontsize_12" type="primary" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            pageIndex: 1,
            comments: [],
            msg: "",
        }
    },
    methods: {
        // 获取评论数据和加载更多
        getComments(){
            this.$http.get('api/getComments'+this.id+'?pageindex='+this.pageIndex).then((result)=>{
                if(result.body.status == 0){
                    this.comments = this.comments.concat(result.body.message);
                }else{
                    Toast("获取评论失败！");
                }
            });
        },
        addComments(){
            if(this.msg.trim().length === 0){
                return Toast("发表内容不能为空!");
            };

            this.$http.post("api/postComments" + this.id, {content: this.msg.trim()}).then((result)=>{

            });
        },
    },
    created(){

    },
    props: [
        "id"
    ],
}
</script>

<style lang="less">
.comment_body{
  padding-bottom: 20px;
}
.fontsize_14 {
  font-size: 14px !important;
}
.fontsize_12 {
  font-size: 12px !important;
}
.news_commentimg {
  border-radius: 50%;
}
.news_comment_timebox {
  display: flex;
  justify-content: space-between;
}
.news_comment_timebox span {
  font-size: 12px;
  color: #b5b5b5;
}
</style>
