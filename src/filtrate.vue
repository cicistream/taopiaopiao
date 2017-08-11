<template>
	<div>
		<div class="filtrate-detail">
			<div class="area">
			    <p><span class="f-title">区域</span><span :class="{'active':choosen1}">{{areaChoose}}</span></p>
				<ul class="f-choose">
					<li class="area-item1" v-for="(area,index) in address" @click="chooseArea(address,index)">{{area}}</li>
				</ul>
			</div>
			<div class="area">
				<p><span class="f-title">特色</span><span :class="{'active':choosen2}">{{featureChoose}}</span></p>
				<ul class="f-choose">
					<li class="area-item2" v-for="(feature,index) in features" @click="chooseFeature(features,index)">{{feature}}</li>
				</ul>
			</div>
			<div class="filtrate-btn">
			    <div class="line"></div>
		    	<router-link to="/cinema/cinemaAll" class="back"><p>取消筛选</p></router-link>
			    <router-link to="/cinema/cinemaAll" class="ok" @click.native=chooseIt><p>确定</p></router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		mounted:function(){
			this.areaChoose=sessionStorage.area;
			this.featureChoose=sessionStorage.fea;
			this.choosen1=sessionStorage.choose1;
			this.choosen2=sessionStorage.choose2;
			var area=document.getElementsByClassName("area-item1");
			var fea=document.getElementsByClassName("area-item2");
            if(sessionStorage.choose1){
            	area[sessionStorage.areaIndex].style.color="#ff4d64";
            	area[sessionStorage.areaIndex].style.borderColor="#ff4d64";
            }
            if(sessionStorage.choose2){
            	fea[sessionStorage.areaIndex].style.color="#ff4d64";
            	fea[sessionStorage.areaIndex].style.borderColor="#ff4d64";
            }
		},
		methods:{
			chooseIt:function(){
				sessionStorage.choose=true;
				sessionStorage.choose1=true;
				sessionStorage.choose2=true;
			},
			addClass: function(item,className){      
				if(!element.className){ 
					element.className=value; 
			    } 
				else{ 
					newClassName=element.className; 
					newClassName+=""; 
					newClassName+=value; 
					element.className=newClassName; 
				} 
			},
			hasClass: function(obj, cls) {  
			    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
			}, 
            chooseArea: function(address,index){
            	var area=document.getElementsByClassName("area-item1");
            	for (var i = area.length - 1; i >= 0; i--) {
            		area[i].style.color="#908ca3";
            		area[i].style.borderColor="#ccc";
            	}
                this.areaChoose=address[index];
                this.choosen1=true;
                sessionStorage.setItem("area",this.areaChoose);
                sessionStorage.setItem("areaIndex",index);
            	console.log(sessionStorage.area);
            	// addClass(area[index],"active");
                area[index].style.color="#ff4d64";
                area[index].style.borderColor="#ff4d64";
            },
            chooseFeature: function(features,index){
            	var fea=document.getElementsByClassName("area-item2");
            	for (var i = fea.length - 1; i >= 0; i--) {
            		fea[i].style.Color="active";
            		fea[i].style.borderColor="#ccc";
            	}
                this.featureChoose=features[index];
                this.choosen2=true;
                sessionStorage.setItem("fea",this.featureChoose);
                sessionStorage.setItem("feaIndex",index);
            	console.log(sessionStorage.fea);
                // addClass(fea[index],"active");
                fea[index].style.color="#ff4d64";
                fea[index].style.borderColor="#ff4d64";
            }
		},
		data(){
			return{
				choosen1: false,
				choosen2: false,
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
		color: #ff4d64;
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