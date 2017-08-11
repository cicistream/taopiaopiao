<template>
    <div class="cinema">
		<header>
			<div class="city brand">
		        <div class="city-name">无锡</div>
		        <a href="javascript:;"></a>
		    </div>
		    <div class="nav-right">
		        <router-link to="/cinema/filtrate" class="nav-btn"><i class="iconfont">&#xe686;</i> 筛选</router-link> 
		        <router-link to="/cinema/search" class="nav-btn"><i class="iconfont">&#xe660;</i> 搜索</router-link>
		    </div>
		</header>
		<!-- <foot></foot> -->
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
    // import foot from './components/footer'
	export default{
		// components:{
		// 	foot
		// }
	}
</script>
<style type="text/css" scoped>
	 .cinema{
    	font-size: 0.55rem;
    	color: #8a869e;
    }
	header{
		display: flex;
		justify-content: space-between;
		padding-right: 0.35rem;
		position: relative;
		border-bottom: 1px solid #ccc;
	}
	.nav-right{
		line-height: 1.8rem;
        letter-spacing: 2px;
	}
	.nav-btn{
		color: #8a869e;
		margin: auto 0.4rem;
		display: inline-block;
	}
	.nav-right .nav-btn:first-child:after{
        content: '';
        border-right: 1px solid #ccc;
        height: 45%;
        position: absolute;
        right: 3.3rem;
        transform: translateY(50%);
	}
	.nav-right i{
		font-size: 0.8rem;
		vertical-align: middle;
	}
</style>