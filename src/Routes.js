import Home from './Pages/home/home.vue';
import Register from './Pages/auth/register.vue';
import Login from './Pages/auth/login.vue';


/* Lazy loading  */

// var Home = resolve => {
//   require.ensure(['./Pages/home/home.vue'], () => {
//     resolve(require('./Pages/home/home.vue'));
//   });
// };

/* Lazy loading  */


export const Routes = [
{
	path: '/',
	component: Home
},
{
	path: '/register',
	component: Register
},
{
	path: '/login',
	component: Login
}
];
