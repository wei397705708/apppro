<template>
    <div class="home_swipe_body">
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
	data(){
		return {

		}
	},
	methods: {
		getSwipe(){
            this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
                console.log(result.body);
            });
        }
	},
    created(){
        // this.getSwipe();
    },
}
</script>

<style lang="scss" scoped>
.home_swipe_body {
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: rebeccapurple;
            }
            &:nth-child(2){
                background-color: darkcyan;
            }
            &:nth-child(3){
                background-color: salmon;
            }
        }
    }
}

</style>
