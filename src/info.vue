<template>
	<div class="info-content">
		<div class="info-head">
		    <img class="info-poster" src="../src/assets/flo.jpg">
			<div class="info-detail">
			    <div class="info-title">
				    <p class="info-name">三生三世十里桃花</p>
					<p style="font-size: 0.45rem;">Once Upon A Time</p>
				</div>
				<div class="info-describe">
					<p>爱情 玄幻</p>
					<p>中国大陆 | 108分钟</p>
					<p>2017-08-03 在中国大陆上映</p>
					<p>
					    <img src="../src/assets/full.png">
					    <img src="../src/assets/full.png">
					    <img src="../src/assets/full.png">
					    <img src="../src/assets/half.png">
					    <img src="../src/assets/null.png">
					    <span>6.9(14168人评)></span>
					</p>
				</div>
			</div>
		</div>
		<div class="info-body">
		    <div  :class="{'info-show':showNo}" @click="showIt()">
		    	<div class="info-sammary">
				<p>天族战神墨渊镇压鬼君擎苍于无妄海，魂飞魄散，仙体冰封于青丘炎华洞内。青丘帝姬白浅同天族太子夜华早有婚约，二人却一直未曾相见。直至东海盛宴，夜华发现白浅竟然同亡妻素素相貌一样，就势住进白浅的青丘，放下太子身段，为求解开白浅与素素之谜。夜华侧妃素锦生妒，暗中协助鬼族王后玄女抢走墨渊仙体。白浅一怒之下血战鬼族大紫明宫，身负重伤，终被夜华救下。白浅跟随夜华来到九重天，通过天族圣器结魄灯恢复记忆，回想起身为素素一世之时所受伤害，不能原谅夜华。陷害白浅的素锦受到责罚，发配至无妄海，由妒生恨，终至疯狂，利用夜华之子小天孙阿离之血释放出被墨渊封印的鬼君擎苍。夜华为维护四海八荒，以元神生祭东皇钟，将擎苍封印。世事轮回，万般纠葛不过一个爱字。命运轮回，夜华与白浅究竟何去何从……</p>
				</div>
				<a v-if="showNo" class="show-btn" href="javascript:;">展开</a>
				<a v-else class="show-btn" href="javascript:;">收起</a>
		    </div>
			<section class="info-people">
				<p class="info-item-title">演职人员</p>
				<scroller lock-y :scrollbar-x=false ref="scroller">
			      <div class="box">
			        <div class="box-item" v-for="one in list">
			            <img :src="one.photo">
			            <p class="text-ellipsis-1">{{one.name}}</p>
			            <p class="text-ellipsis-1" style="color: #999;">{{one.role}}</p>
			        </div>
			      </div>
			    </scroller>
			    <a href="javascript:;" class="info-extend">查看全部15位演职人员</a>
			</section>
			<section>
				<p class="info-item-title">视频和剧照</p>
				<scroller lock-y :scrollbar-x=false ref="scroller">
			        <div class="box1">
				        
				        <div class="box1-item" v-for="pic in showPic">
				            <img class="poster-show" :src="pic.imgUrl">
				        </div>
			        </div>
			    </scroller>
			    <a href="javascript:;" class="info-extend">查看全部198张剧照</a>
			</section>
			<section class="dy-infomation">
				<p class="info-item-title">影片资料</p>
				<div class="info-back">
					<i class="iconfont">&#xe81d;</i>
					<div>
						<p class="second-title">幕后花絮</p>
						<span class="s-detail">该片剧本故事大纲修改了大概十几版</span>
					</div>
				</div>
				<div class="info-back">
					<i class="iconfont">&#xe81c;</i>
					<div>
						<p class="second-title">台词精选</p>
						<span class="s-detail">该片剧本故事大纲修改了大概十几版</span>
					</div>
				</div>
				<div class="info-back">
					<i class="iconfont">&#xe81e;</i>
					<div>
						<p class="second-title">出品发行</p>
						<span class="s-detail">该片剧本故事大纲修改了大概十几版</span>
					</div>
				</div>
			</section>
			<section>
				<p class="info-item-title">票房</p>
				<div class="boxOffice">
					<div class="ranking">
						<p>2</p>
						<p>今日票房排名</p>
					</div>
					<div class="ranking">
						<p>42246</p>
						<p>首周票房(万)</p>
					</div>
					<div class="ranking">
						<p>42968</p>
						<p>累计票房(万)</p>
					</div>
				</div>
			    <a href="javascript:;" class="info-extend">查看票房详情</a>
			</section>
		</div>
	</div>
	
</template>
<script type="text/javascript">
import {Scroller} from 'vux';

	export default{
		components:{
            Scroller
		},
		methods:{
            showIt: function(){
            	if(this.showNo)
            		this.showNo=false;
            	else
            		this.showNo=true;
            },
            dataUpdata: function(self){
            	self.$nextTick(function(){
		            self.$refs.scroller.reset()
		        })
            }
		},
		mounted: function() {
		    var self = this;
		    self.dataUpdata(self);
		  },
		data(){
			return{
				showNo: true,
				list:[
                    {
                    	photo: require("../src/assets/tree.jpg"),
                    	name: "赵小丁",
                    	role: "导演"
                    },
                    {
                    	photo: require("../src/assets/tree.jpg"),
                    	name: "安东尼·拉默里纳拉",
                    	role: "导演"
                    },
                    {
                    	photo: require("../src/assets/tree.jpg"),
                    	name: "刘亦菲",
                    	role: "饰 白浅"
                    },
                    {
                    	photo: require("../src/assets/tree.jpg"),
                    	name: "杨洋",
                    	role: "饰 夜华"
                    },
                    {
                    	photo: require("../src/assets/tree.jpg"),
                    	name: "赵小丁",
                    	role: "导演"
                    },
                    {
                    	photo: require("../src/assets/tree.jpg"),
                    	name: "赵小丁",
                    	role: "导演"
                    }
				],
				showPic:[
				{
					imgUrl:require("../src/assets/tree.jpg")
				},
				{
					imgUrl:require("../src/assets/tree.jpg")
				},
				{
					imgUrl:require("../src/assets/tree.jpg")
				},
				{
					imgUrl:require("../src/assets/tree.jpg")
				},
				{
					imgUrl:require("../src/assets/tree.jpg")
				},
				]

			}
		}
	}
</script>
<style lang="less" scoped>
    .info-content{
    	background-color: #fff;
        position:relative;
        z-index:10;
    }
	.info-head{
		font-size: 0.48rem;
	    color: #fff;
	    background-color: brown;
	    overflow: hidden;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    height: 12.375rem;
	    height: 44vmin;
	    background-size: cover;
	    position: relative;
	    padding-top: 1.4rem;
	}
	.info-poster{
    	-webkit-flex-shrink: 0;
	    position: relative;
	    width: 7.5rem;
	    width: 32vmin;
	    margin-left: 0.6rem;
	    margin-right: 0.6rem;
	    height: 100%;
	}
	.info-detail{
		display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    flex-direction: column; 
	    justify-content: space-around;
	}
	.info-title{
		-webkit-box-flex: 1;
	}
	.info-name{
		font-size: 0.7rem;
		color: #fff;
        font-weight: bold;
        line-height: 1rem;
	}
	.info-describe{
		line-height: 0.8rem;
		margin-bottom: 0.3rem;
	}
	.info-describe img{
		width: 2.5vmin;
	}
	.info-sammary{
        line-height: 1.1rem;
		font-size: 0.58rem;
		padding: 0.3rem 0.6rem;
		padding-top: 0.7rem;
	}
	.info-show .info-sammary{
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp:3;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
	.show-btn{
		color: #0094ed;
		font-size: 0.62rem;
		display: block;
		text-align: center;
		height: 1.8rem;
		margin: 0.85rem auto;
		margin-bottom: 0;
	}
	section:before{
		display: block;
		background-color: #f5f5f5;
		height: 0.6rem;
		content: "";
	}
	.info-people{
        font-size: 0.57rem;
        text-align: center;
        overflow: hidden;
	}
	.dy-infomation{
		height: auto;
		overflow: hidden;
	}
	.info-item-title{
		font-size: 0.57rem;
		font-weight: bold;
	    line-height: 2rem;
	    line-height: 10vmin;
	    padding-top: .5rem;
	    padding-top: 2.5vmin;
	    padding-bottom: .5rem;
	    padding-bottom: 2.5vmin;
	    color: #000;
	    padding-left: 0.6rem;
	    text-align: left;
	}
	.box{
		height: 1rem;
		position: relative;
		width: 92rem;
	}
	.box1{
		width: 180rem;
		position: relative;
	}
	.box-item,
	.box1-item{
		width: 3.6rem;
		display:inline-block;
		margin-left: 0.3rem;
		float: left;
		text-align: center;
	}
	.box1-item{
		height: 5rem;
		width: 9rem;
		margin-left: 0.2rem;
	}
	.box-item:first-child,
	.box1-item:first-child{
		margin-left: 0.6rem;
	}
	.box-item img{
		display: block;
		width: 3.6rem;
		height: 5rem;
	}
	.box-item p{
		margin: 0.21rem auto;
	}
	.text-ellipsis-1{
		overflow: hidden;
		text-overflow: ellipsis;
        white-space: nowrap;
	}
	.info-extend{
		text-align: center;
		font-size: 0.55rem;
		color: #0094ed;
		display: block;
		margin: 0.6rem auto;
	}
	.poster-show{
		height: 5rem;
		width: 9rem;
	}
	.info-back{
		font-size: 0.58rem;
		display: inline-block;
		float: left;
		width: 45%;
		display: flex;
		padding: 0.3rem;
	}
	.info-back i{
		font-size: 0.8rem;
		margin: auto 0.45rem;
	}
	.s-detail{
		color: #928ea5;
		font-size: 0.45rem;
		margin-top: 0.2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp:1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
    .boxOffice{
    	display: flex;
    	text-align: center;
    	font-size: 0.5rem;
    	justify-content: space-around;
    }
    .ranking{
    	flex: none;
    }
    .ranking p:first-child{
    	font-size: 1.3rem;
    }
</style>