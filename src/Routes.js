import NotFound from './Pages/404.vue';
import AddOrder from './Pages/dashboard/orders/addorder.vue';


/* Lazy loading  */

var Home = resolve => {
	require.ensure(['./Pages/home/home.vue'], () => {
		resolve(require('./Pages/home/home.vue'));
	});
};
var Register = resolve => {
	require.ensure(['./Pages/auth/register.vue'], () => {
		resolve(require('./Pages/auth/register.vue'));
	});
};
var Login = resolve => {
	require.ensure(['./Pages/auth/login.vue'], () => {
		resolve(require('./Pages/auth/login.vue'));
	});
};
var Dashboard = resolve => {
	require.ensure(['./Pages/dashboard/dashboard.vue'], () => {
		resolve(require('./Pages/dashboard/dashboard.vue'));
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
	path: '/dashboard/orders/add',
	component: AddOrder,
	name: 'dash_add_order'
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
