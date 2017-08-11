<template>
	<div class="search">
		<div class="searchFor">
			<div class="search-area">
			    <i class="iconfont" style="font-size: 0.6rem;">&#xe660;</i>
				<input type="text" name="search" placeholder="影院名称或地址">
			</div>
			<router-link class="router-cancel" to="/cinema/cinemaAll">取消</router-link>	
		</div>
	</div>
</template>
<style type="text/css">
	.search{
		position: relative;
		height: 28.4rem;
		background-color: #fff;
		margin-top: -1.82rem;
		z-index: 8;
	}
	.searchFor{
		font-size: 0.6rem;
		display: flex;
		line-height: 1rem;
		border: 1px solid #ccc;
	}
	.search-area{
		font-size: 0.6rem;
		flex: auto;
		padding:0.1rem 0.2rem;
		margin: 0.3rem;
		border: 1px solid #ccc;
		border-radius: 15px;
	}
	input{
		border: 0;
		font-size: 0.5rem;
	}
    .router-cancel{
    	color: #108ee9;
    	flex:0 0 2rem;
    	text-align: center;
    	padding-top: 0.4rem;
    	padding-right: 0.2rem;
    }
</style>