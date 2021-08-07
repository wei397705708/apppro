<template>
    <div ref="muinumbox" class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input ref="inputN" id="test" class="mui-input-numbox" 
        type="number" value="1" @change="getcountnum" />
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
        getcountnum(){
            let inputn = this.$refs.inputN.value;
            this.$emit('getcountnum',inputn);
        },
    },
    mounted (){
        let muinumbox = this.$refs.muinumbox;
        mui(muinumbox).numbox();
        mui('.mui-numbox').numbox().setOption('max',this.maxFnum);
    },
    watch: {
        maxFnum: function(newVal,oldVal){
            mui('.mui-numbox').numbox().setOption('max',newVal);
        }
    },
    props:['maxFnum'],
}
</script>

<style lang="">
    
</style>