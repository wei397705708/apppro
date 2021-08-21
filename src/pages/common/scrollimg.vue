<template>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imagesrc" :key="item.key">
        <img class="swipe_img" :class="{swipe_img_auto:false}" :src="item.src" alt="" />
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>

export default {
    data(){
        return{
            
        }
    },
    props:[
        'imagesrc',
        'isfull',
    ],
}
</script>

<style lang="less" scoped>
    .mint-swipe 
    img{
        margin: 0 auto;
    }
    .swipe_img {
        width: 100%;
        height: 100%;
    }
    .swipe_img_auto{
        width: auto;
        height: 100%;
    }
</style>