<template>
    <comment-box :class="['newsinfo_body','padding_top_20']" :id="cmid"></comment-box>
</template>

<script>
import comment from '../common/comment';
export default {
    data(){
        return{
            cmid: this.$route.params.cmid,
        }
    },
    components: {
        'comment-box': comment,
    },
}
</script>

<style lang="less" scoped>
    @bgcolor: #fff;

.newsinfo_body{
    height: calc(100vh - 90px);
    overflow-y: auto;
    padding: 0px 16px;
    background-color: @bgcolor;
}
.margin_top_20{
    margin-top: 20px;
}
.padding_top_20{
    padding-top: 20px;
}
</style>