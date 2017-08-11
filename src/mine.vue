<template>
	<div class="mine">
		<div class="logo">
			<img src="../src/assets/logo.png">
		</div>
		<form class="login">
		    <div class="user-info">
		    	<input type="text" name="id" placeholder="手机号/邮箱/会员名">
		    	<input type="text" name="password" placeholder="请输入密码">
		    </div>
		    <div class="otherLinks">
		    	<a href="javascript:;">免费注册</a>
		    	<a href="javascript:;">忘记密码</a>
		    </div>
		    <div class="log-btn">
		    	<button type="submit" class="sub-btn sub-in">登录</button>
		    	<button class="sub-btn">短信验证登录</button>
		    </div>
		</form>
	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css" scoped>
    .mine{
    	font-size: 0.6rem;
    	padding: 0 1rem;
    	background-color: #fff;
    	z-index: 8;
    }
    .logo{
    	text-align: center;
    	padding-top: 1.7rem;
    }
    .login{
    	margin-top: 1.3rem;
    }
	input{
		width: 95%;
		color: #333;
		border: 0;
		font-size: 0.68rem;
		padding: 0.4rem 0.3rem;
		margin-top: 1.6rem;
		border-bottom: 2px solid #ff5000; 
	}
	input:first-child{
		margin-top: 0
	}
    input::-moz-placeholder,
    input::-webkit-input-placeholder,
    input:-ms-input-placeholder,
    input:-moz-input-placeholder{
   	    color:#333;
    }
    .otherLinks{
    	display: flex;
    	justify-content: space-between;
    }
    a{  
    	color: #000;
    	margin:0.8rem 0.1rem;
    }
    .log-btn{
    	margin: 0.5rem 0;
        text-align: center;
    }
    .sub-btn{
    	display: block;
    	color: #ff5000;
    	background-color: #fff;
    	width: 13.5rem;
        font-size: 0.65rem;
        line-height: 1.8rem;
        margin-bottom: 1rem;
        border-radius: 80px;
        border: 1px solid #ff5000;
    }
    .sub-in{
        background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
        color: #fff;
        box-shadow: 0 0.08rem 0.16rem #f7c7b1;
    }
</style>