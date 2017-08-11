<template>
	<header>
	    <div class="city brand">
	        <div class="city-name">无锡</div>
	        <a href="javascript:;"></a>
	    </div>
	    <span class="tab-wrapper">
	        <p class="tab" id="show"><router-link class="a" to="show">正在热映</router-link></p>
	        <p class="tab" id="coming"><router-link class="a" to="coming">即将上映<span></span></router-link></p>
	    </span>
    </header>
</template>
<script type="text/javascript">
	
</script>
<style lang="less" scoped>
    .tab-wrapper{
    	margin-left: 2rem;
    }
    .tab{
        font-size: 0.55rem;
        height: 1.4rem;
        line-height: 1.4rem;
        display: inline-block;
    	padding: 0 0.5rem;
    	text-align: center;
    	position: relative;
    }
    .a{
    	color: #928ea5;
    }
    #coming span{
    	transform: translateX(-3.4rem);
    }
    #coming .router-link-active span{
    	transform: translateX(0);
    }
    #coming span{
	    content: '';
	    display: block;
	    height: 6px;
	    background-color: #ff4d64;
	    position: absolute;
	    bottom: 1px;
	    left: 0;
	    right: 0;
	    width: 90%;
	    margin: 0 auto;
        transition: transform 0.7s;
    }
</style>