// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var h1style = require('./main.css');

Vue.config.productionTip = false;
Vue.config.debug = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods:{
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
  },
  render:h=>h(App)
}).$mount('#app')

