import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate';
import VueResource from 'vue-resource';
import VueCookie from 'vue-cookie';


import {store} from './Store/Store';
import {Routes} from './Routes';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VueCookie);

Vue.http.options.root = "http://localhost:8000/api/";
// Vue.http.interceptors.push((request, next) => {
// 	request.headers.set('Authorization', 'Bearer ' + Vue.cookie.get('UserToken'));
// 	next();
// });


export const router = new VueRouter({
	routes: Routes,
	mode: 'history',
	scrollBehavior() {
		return {
			x: 0,
			y: 0
		};
	}
});

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
