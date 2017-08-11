<template>
	<div class="slider-container" id="home">
      <swiper height="6.5rem" :list="homeSlider" loop auto class="slider-area"></swiper>
      <div class="dy-list-content">
          <div class="dy-list-item" v-for="dy in dyList">
              <div class="dy-info">
                <img class="dy-poster" :src="dy.imgUrl">
                <router-link to="/info" class="dy-detail">
	                <div class="dy-detail">
		                <p class="dy-name">{{dy.name}}</p><span class="iconfont" v-if="dy.d">&#xe63a;</span><span class="iconfont" v-if="dy.max">&#xe617;</span>
		                <p class="dy-evaluate" v-if="dy.state==1"><img v-if="dy.score>0" v-for="(item,index) in 5" :src="starState(dy.score,index)"><span style="font-size: 0.45rem;margin-left: 0.2rem;">{{dy.score}}</span></p>
		                <p class="dy-comming" v-if="dy.state==0"><span style="color: #fea54c;">{{dy.expectNum}}人想看 </span>| {{dy.showTime}}上映</p>
		                <div class="dy-people">
		                    <p style="margin-top: 0.15rem;">导演：{{dy.directors}}</p>
		                    <p>主演：{{dy.actors}}</p>
		                </div>
	                </div>
                </router-link>
                <button class="buy-btn">购票</button>
            </div>
            <div class="dy-promotion">
                <p><span style="color: #fea54c">新人专享 ：</span> 新人首张特惠，名额有限抢完即止</p>
            </div>
            <p class="line"></p>
         </div>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
import { Swiper,SwiperItem } from 'vux';
const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg'
  }]
  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img
  }))
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    homeSlider_onIndexChange (index) {
      this.homeSlider_index = index
    },
    starState(score,index){
      let state=index*2+1;
      var hollow=require("../src/assets/null.png");
      var half=require("../src/assets/half.png");
      var full=require("../src/assets/full.png");
      if(Math.round(score)<state)
      {
        return hollow;
      }
      else if(Math.round(score)>state)
      {
        return full;
      }
      else return half;
    }
  },
  data(){
    return{
        demo01_list: baseList,
        homeSlider: urlList,
        homeSlider_index: 0,
        dyList:[
            {
              imgUrl: require("../src/assets/tree.jpg"),
              name: "三生三世十里桃花",
              state: 1,
              d: true,
              max: true,
              score: "6.9",
              directors: "赵小丁 安东尼·拉默里纳拉",
              actors: "刘亦菲 杨洋 罗晋 严屹宽"
            },
            {
              imgUrl: require("../src/assets/flo.jpg"),
              name: "战狼2",
              state: 1,
              d: true,
              max: false,
              score: "9.6",
              directors: "吴京",
              actors: "吴京 弗兰克·格里洛"
            },
            {
              imgUrl: require("../src/assets/tree.jpg"),
              name: "建国大业",
              state: 1,
              d: false,
              max: true,
              score: "8.7",
              directors: "刘伟强",
              actors: "刘烨 朱亚文 黄志忠 王景春"
            },
            {
              imgUrl: require("../src/assets/tree.jpg"),
              name: "鲛珠传",
              state: 0,
              d: true,
              max: false,
              score: "评价人数不足",
              expectNum: 106227,
              showTime: "08-11 下周五",
              directors: "赵小丁 安东尼 拉默里纳拉",
              actors: "刘亦菲 杨洋 罗晋 严屹宽"
            }
        ]
    }
  }
}
</script>
<style type="text/css">
	.slider-container{
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 11rem;
        height: 40vmin;
    }
    .dy-list-content{
        padding-bottom: 2rem;
    }
    .slider-area,
    .slider-item,
    .slider-img{
        height: 100% !important;
        width: 100%;
    }
    #home .content{
        padding-bottom: 2rem;
    }
    .dy-promotion{
        min-height: 10vmin;
        margin-left: 3.4rem;
        line-height: 10vmin;
        border-top: 1px solid #CCC;
        overflow: hidden;
    }
    .line{
        height: 1px;
        background-color: #CCC;
        margin-left: 0.55rem;
    }
    #home .vux-icon-dot{
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 999px;
    }
    #home .vux-icon-dot.active{
      background-color: #ff5733;
    }
    #home .slider-area{
      text-align: center;
    }
    #home .vux-slider > .vux-indicator, .vux-slider .vux-indicator-right{
      display: flex;
      justify-content: center;
      position: relative;
      right: 0;
      top: -1.45rem;
    }
</style>