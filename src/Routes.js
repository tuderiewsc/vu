import NotFound from './Pages/404.vue';


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
var AddOrder = resolve => {
	require.ensure(['./Pages/dashboard/components/orders/addorder.vue'], () => {
		resolve(require('./Pages/dashboard/components/orders/addorder.vue'));
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
	component: Login,
	// meta: {
	// 	title:'Login',
	// 	description:'صفحه ورود'
	// }
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
