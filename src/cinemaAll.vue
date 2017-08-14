<template>
    <div class="cinema">
		<div class="content">
			<div class="filtrate" id="filtrate">
				<span>已选：{{$route.query.areaChoose}}<span id="dot">、</span>{{$route.query.feaChoose}}</span>
				<span @click="resetChoose">取消筛选</span>
			</div>
			<ul class="cinema-list">
				<li class="cinema-item" v-for="cinema in cinemaList">
					<p><span class="ci-name text-ellipsis-1">{{cinema.name}}</span><span class="ticket-price">{{cinema.price}}</span>元起</p>
					<p class="ci-address text-ellipsis-1">{{cinema.address}}</p>
					<div><span class="ci-feature" v-for="feature in cinema.features">{{feature.name}}</span></div>
					<p class="promotion"><i class="iconfont" style="font-size: 0.8rem;color: #fe7a4c">&#xe625;</i>新人专享</p>
				</li>
			</ul>
		</div>
		<foot></foot>
	</div>
</template>
<script>
    import foot from './components/footer'
	export default {
		components:{
			foot
		},
		mounted:function(){
            var filtrate=document.getElementById("filtrate");
			var dot=document.getElementById('dot');
			if(sessionStorage.show==1){
				if(this.$route.query.area!=0&&this.$route.query.fea!=0){
					dot.style.display="inline";
				}
				else {
					dot.style.display="none";
			    }
				filtrate.style.display="flex";
			}			
		},
		methods:{
			resetChoose: function(){
				var filtrate=document.getElementById("filtrate");
				filtrate.style.display="none";
				sessionStorage.clear();
			}
		},
		data(){
			return{
                cinemaList:[
                    {
                    	name: "星美国际影商城上海松江店",
                    	price: "22.8",
                        address: "松江区环城路555号LOMO玩库3楼",
                        features:[
                            {
                            	name: "退票"
							}
                        ]
                    },
                    {
                    	name: "卢米埃上海大荣影城",
                    	price: "22.8",
                        address: "嘉定区宝安公路100号大融城4楼",
                        features:[
                            {
                            	name: "退票"
                            },
                            {
                            	name: "4D厅"
                            }
                        ]
                    },
                    {
                    	name: "星美国际影商城上海松江店",
                    	price: "22.8",
                        address: "松江区环城路555号LOMO玩库3楼",
                        features:[
                            {
                            	name: "退票"
                            },
                            {
                            	name: "realD"
                            }
                        ]
                    },
                    {
                    	name: "星美国际影商城上海松江店",
                    	price: "22.8",
                        address: "松江区环城路555号LOMO玩库3楼",
                        features:[
                            {
                            	name: "退票"
                            },
                            {
                            	name: "realD"
                            }
                        ]
                    },
                    {
                    	name: "星美国际影商城上海松江店",
                    	price: "22.8",
                        address: "松江区环城路555号LOMO玩库3楼",
                        features:[
                            {
                            	name: "退票"
                            },
                            {
                            	name: "realD"
                            }
                        ]
                    },
                    {
                    	name: "星美国际影商城上海松江店",
                    	price: "22.8",
                        address: "松江区环城路555号LOMO玩库3楼",
                        features:[
                            {
                            	name: "退票"
                            },
                            {
                            	name: "realD"
                            }
                        ]
                    }
                ]
               
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
    .cinema{
    	font-size: 0.55rem;
    	color: #8a869e;
    	padding-bottom: 2rem;
    }
    .text-ellipsis-1{
    	overflow: hidden;
    	text-overflow: ellipsis;
        white-space: nowrap;
       /* -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;*/
    }
	.filtrate{
		display: none;
		justify-content: space-between;
		margin: auto 0.8rem;
		line-height: 1.8rem;
	}
    .cinema-list{
    	border-top: 1px solid #CCC;
    }
    .cinema-item{
    	border-bottom: 1px solid #CCC;
    	padding:0.5rem 0.7rem;
    	font-size: 0.48rem;
    }
    .ci-name{
    	color: #000;
    	font-size: 0.6rem;
    	line-height: 1rem;
    	font-weight: bold;
    	margin-right: 0.3rem;
    }
    .ticket-price{
    	font-size: 0.45rem;
    	color: red;
    }
    .ci-feature{ 
    	color: #7ab5e0;
    	font-size: 0.45rem;
    	line-height: 1rem;
    	border: 1px solid #7ab5e0;
    	border-radius: 40%;
    	padding:0.05rem 0.25rem;
    	margin-right: 0.25rem;
    }
    .promotion{
    	margin: -10px auto;
    }
    .promotion i{
    	margin-right: 0.2rem;
    	vertical-align: sub;
    }
</style>