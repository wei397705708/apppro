<template>
    <div class="app-contentbody">
        <!-- header -->
        <mt-header fixed title="首页"></mt-header>

		<transition>
			<router-view></router-view>
		</transition>
		
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-itemp" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-itemp" to="/menbar">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-itemp" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-itemp" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.app-contentbody{
    padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	position: absolute;
	opacity: 0;
	transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active{
	transition: all ease 0.3s;
}

.mui-bar-tab .mui-tab-itemp {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-itemp.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-itemp .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-itemp .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
