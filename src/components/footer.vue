<template>
	<footer class="footer-content">
		<router-link to="/home" class="footer">
			<i class="iconfont">&#xe628;</i>
			<p>电影</p>
		</router-link>
		<router-link to="/cinema" class="footer">
			<i class="iconfont">&#xe67f;</i>
			<p>影院</p>
		</router-link>
		<router-link to="/mine" class="footer">
			<i class="iconfont">&#xe621;</i>
			<p>我的</p>
		</router-link>
	</footer>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css" lang="less" scoped>
	.footer-content{
		color: #8a869e;
		font-size: 0.46rem;
		height: 1.8rem;
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		z-index: 3;
		padding-top: 0.23rem;
		border-top: 1px solid #CCC;
	}
    .footer{
		color: #8a869e;
    }
	.footer-content i{
		font-size: 0.9rem;
		line-height: 0.9rem;
	}
</style>