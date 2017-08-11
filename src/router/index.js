import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import info from '@/info'
import cinema from '@/cinema'
import show from '@/show'
import coming from '@/coming'
import cinemaAll from '@/cinemaAll'
import filtrate from '@/filtrate'
import mine from '@/mine'
import search from '@/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	component: home,
    	children: [ 
	　　　{ 
	　　　　path: '/', 
			redirect: { name: 'show' },
	 　　　 component: show
	　　 },]
    	// redirect: { name: 'home' }
    },
    {
    	path:'/home',
    	name: 'home',
    	component: home,
    	redirect: { name: 'show' },
    	children:[
	        {
	        	path: 'show',
	        	name: 'show',
	        	component: show
	        },
	        {
		    	path: 'coming',
		    	name: 'coming',
		    	component: coming
	    	}
    	]
    },
    {
    	path: '/info',
    	name: 'info',
    	component: info
    },
    {
    	path: '/cinema',
    	name: 'cinema',
    	component: cinema,
    	redirect: { name: 'cinemaAll' },
    	children:[
    	    {
            	path: 'cinemaAll',
            	name: 'cinemaAll',
            	component: cinemaAll
            },
            {
            	path: 'filtrate',
            	name: 'filtrate',
            	component: filtrate
            },
            {
            	path: 'search',
            	name: 'search',
            	component: search
            }
    	]
    },
    {
    	path: '/mine',
    	name: 'mine',
    	component: mine
    }
  ]
})
