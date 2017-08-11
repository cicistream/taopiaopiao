<template>
    <div class="coming-content">
    	<p class="dataLine">{{data}}</p>
		<div class="dy-list-content">
	        <div class="dy-list-item" v-for="movie in cList">
	            <div class="dy-info">
	                <img class="dy-poster" :src="movie.imgUrl">
	                <router-link to="/info" class="movie-detail">
			            <div class="dy-detail">
			                <p class="dy-name">{{movie.name}}</p><span class="iconfont" v-if="movie.d">&#xe63a;</span><span class="iconfont" v-if="movie.max">&#xe617;</span>
			                <p class="dy-comming"><span style="color: #fea54c;">{{movie.expectNum}}人想看 </span></p>
			                <div class="dy-people">
			                  <p style="margin-top: 0.15rem;">导演：{{movie.directors}}</p>
			                  <p>主演：{{movie.actors}}</p>
			                </div>
			            </div>
	                </router-link>
	                <button class="buy-btn">预售</button>
	            </div>
	            <p class="line"></p>
	        </div>
	    </div>
    </div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				data: "2017-08-11 周五",
				cList:[
                {
	              imgUrl: require("../src/assets/tree.jpg"),
	              name: "鲛珠传",
	              d: true,
	              max: false,
	              score: "评价人数不足",
	              expectNum: 106227,
	              directors: "赵小丁 安东尼 拉默里纳拉",
	              actors: "刘亦菲 杨洋 罗晋 严屹宽"
	            },
	            {
	              imgUrl: require("../src/assets/flo.jpg"),
	              name: "鲛珠传",
	              state: 0,
	              d: true,
	              max: false,
	              score: "评价人数不足",
	              expectNum: 106227,
	              directors: "赵小丁 安东尼 拉默里纳拉",
	              actors: "刘亦菲 杨洋 罗晋 严屹宽"
	            },
	            {
	              imgUrl: require("../src/assets/tree.jpg"),
	              name: "鲛珠传",
	              d: true,
	              max: false,
	              score: "评价人数不足",
	              expectNum: 106227,
	              directors: "赵小丁 安东尼 拉默里纳拉",
	              actors: "刘亦菲 杨洋 罗晋 严屹宽"
	            },
	            {
	              imgUrl: require("../src/assets/tree.jpg"),
	              name: "鲛珠传",
	              d: true,
	              max: false,
	              score: "评价人数不足",
	              expectNum: 106227,
	              directors: "赵小丁 安东尼 拉默里纳拉",
	              actors: "刘亦菲 杨洋 罗晋 严屹宽"
	            },
	            {
	              imgUrl: require("../src/assets/tree.jpg"),
	              name: "鲛珠传",
	              d: true,
	              max: false,
	              score: "评价人数不足",
	              expectNum: 106227,
	              directors: "赵小丁 安东尼 拉默里纳拉",
	              actors: "刘亦菲 杨洋 罗晋 严屹宽"
	            }
				]
			}
		}
	}
</script>
<style lang="less" scoped>
	.dataLine{
        font-size: 0.5rem;
        background-color: #f5f5f5;
        height: 1.5rem;
        line-height: 1.5rem;
        padding-left: 0.8rem;
	}
    .coming-content .buy-btn{
	    border: 1px solid #37b7ff;
    	color: #37b7ff!important;
    	margin-left: 2.5rem;
    }
    .line{
        height: 1px;
        background-color: #CCC;
        margin-left: 0.55rem;
    }
</style>