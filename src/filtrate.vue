<template>
	<div>
		<div class="filtrate-detail">
			<div class="area">
			    <p><span class="f-title">区域</span><span :class="{'active':area}">{{areaChoose}}</span></p>
				<ul class="f-choose">
					<li class="area-item1" v-for="(area,index) in address" @click="chooseArea(address,index)">{{area}}</li>
				</ul>
			</div>
			<div class="area">
				<p><span class="f-title">特色</span><span :class="{'active':fea}">{{featureChoose}}</span></p>
				<ul class="f-choose">
					<li class="area-item2" v-for="(feature,index) in features" @click="chooseFeature(features,index)">{{feature}}</li>
				</ul>
			</div>
			<div class="filtrate-btn">
			    <div class="line"></div>
		    	<span class="back" @click=cancelIt><p>取消筛选</p></span>
			    <span class="ok" @click=chooseIt><p>确定</p></span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		mounted:function(){
            if(sessionStorage.area>0){ 
            	this.areaChoose=this.address[sessionStorage.area];
                this.area=true;
                var area =document.getElementsByClassName("area-item1");
                this.addClass(area[sessionStorage.area],"active"); 
             }
            if(sessionStorage.fea>0){
            	this.fea=true;
                this.featureChoose=this.features[sessionStorage.fea];
                var fea =document.getElementsByClassName("area-item2");
                this.addClass(fea[sessionStorage.fea],"active"); 
            }
		},
		methods:{
			addClass: function(element,value){      
				if(!element.className){ 
					element.className=value; 
			    } 
				else{ 
					var newClassName=element.className; 
					newClassName+=" "; 
					newClassName+=value; 
					newClassName+=" "; 
					element.className=newClassName; 
				} 
			},
			// removeClass: function(obj, cls) {  
			//     if (this.hasClass(obj, cls)) {  
			//         var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
			//         var ci='';  
			//         obj.className = obj.className.replace(reg,ci);  
			//     }  
			// },  
			// hasClass: function(obj, cls) {  
			//     return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
			// },
			// toggleClass: function(obj,cls){  
			//     if(this.hasClass(obj,cls)){  
			//         this.removeClass(obj, cls);  
			//     }else{  
			//         this.addClass(obj, cls);  
			//     }  
			// },  
			cancelIt:function(){
				sessionStorage.clear();
				sessionStorage.show=0;
				this.$router.push('cinemaAll');
			}, 
			chooseIt:function(){
                if(!this.area) {this.areaChoose='';sessionStorage.area=-1;}
                if(!this.fea)  {this.featureChoose='';sessionStorage.fea=-1;}
				if(sessionStorage.area<0&&sessionStorage.fea<0)
                {sessionStorage.show=0;}
            	this.$router.push({name:'cinemaAll',query: {areaChoose: this.areaChoose,feaChoose: this.featureChoose,area: this.area,fea: this.fea}});
 			},
            chooseArea: function(address,index){
            	sessionStorage.show=1;
            	this.area=true;
            	var area=document.getElementsByClassName("area-item1");
            	for (var i = area.length - 1; i >= 0; i--) {
            		area[i].className="area-item1";
            	}
                this.areaChoose=address[index];
                sessionStorage.area=index;
            	this.addClass(area[index],"active");
            },
            chooseFeature: function(features,index){
            	sessionStorage.show=1;
            	this.fea=true;
            	var fea=document.getElementsByClassName("area-item2");
            	for (var i = fea.length - 1; i >= 0; i--) {
					fea[i].className="area-item2";
            	}
                this.featureChoose=features[index];
                sessionStorage.fea=index;
                this.addClass(fea[index],"active");
            }
		},
		data(){
			return{
				area:false,
				fea: false,
				areaChoose: "不限",
				featureChoose: "不限",
				address:[
                    "北塘区","滨湖区","崇安区","惠山区","江阴市","南长区","市区","新区","锡山区","宜兴市"
                ],
                features:[
                    "退票","改签","观影小食","IMAX厅","巨幕厅","realD厅","4K厅","4DX厅","4D厅","双机3D","杜比厅"
                ]
			}
		}
	}
</script>
<style type="text/css">
	.active{
		color: #ff4d64 !important;
		border-color: #ff4d64 !important;
	}
	.filtrate-detail{
    	background-color: #fff;
    	font-size: 0.5rem;
    	padding:0.6rem;
    	position: absolute;
    	top: 1.9rem;
    	z-index: 5;
    }
    .f-title{
    	color: #000;
    	font-weight: bold;
    	margin-right: 0.3rem;
    }
    .f-choose{
    	list-style: none;
    	text-align: center;
    	line-height: 1.4rem;
    	margin-bottom: 0.6rem;
    	overflow: auto;
    }
    .area-item1,
    .area-item2{
        border: 1px solid #CCC;
        width: 3.5rem; 
        margin-top: 0.3rem;
        margin-right: 0.2rem;
        float: left;
    }
    .area-item1:nth-child(4n),
    .area-item2:nth-child(4n){
    	margin-right: 0;
    }
	.filtrate-btn{
    	position: fixed;
    	bottom: 0;
    	font-size: 0.6rem;
    	text-align: center;
    	margin: 0.6rem auto;
    	/*overflow: auto;*/
    }
    .line{
    	height: 2px;
    	background-color: #ccc;
    	margin-top: -0.6rem;
    }
    .filtrate-btn .back,
    .filtrate-btn .ok{
    	color: #8a869e;
    	display: inline-block;
    	width: 6rem;
    	float: left;
        padding: 0.4rem;
    	border: 2px solid #908ca3;
    	border-radius: 0.2rem;
    }
    .filtrate-btn .ok{
    	display: inline-block;
	    background-color: #ff4d64;
	    border: 1px solid #ff4d64;
	    color: #fff;
	    margin-left: 1rem;
    }
</style>