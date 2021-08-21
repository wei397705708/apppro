<template>
    <div ref="muinumbox" class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input ref="goodsN" id="test" class="mui-input-numbox" 
        type="number" :value="spnum" @change="updateNum" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../lib/js/mui.min.js';
export default {
    data(){
        return{
            
        }
    },
    methods: {
        updateNum(){
            this.$store.commit('updateNumFn',{
                id: this.goodsid,
                count: this.$refs.goodsN.value
            });
        },
    },
    mounted (){
        let muinumbox = this.$refs.muinumbox;
        mui(muinumbox).numbox();
        
    },
    props: [
        "spnum",
        "goodsid"
    ],
    
}
</script>

<style lang="">
    
</style>