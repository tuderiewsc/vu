//import Home from './Pages/home/home.vue';
import Register from './Pages/auth/register.vue';
import Login from './Pages/auth/login.vue';
import Dashboard from './Pages/dashboard/dashboard.vue';
import NotFound from './Pages/404.vue';


/* Lazy loading  */

var Home = resolve => {
	require.ensure(['./Pages/home/home.vue'], () => {
		resolve(require('./Pages/home/home.vue'));
	});
};

/* Lazy loading  */


export const Routes = [
{
	path: '/',
	component: Home,
	name: 'home'
},
{
	path: '/register',
	component: Register
},
{
	path: '/login',
	component: Login
},
{
	path: '/dashboard',
	component: Dashboard,
	name: 'dash'
},
{
	path:'/404',
	component: NotFound
},
{
	path:'*',
	redirect:'/404'
}
];
