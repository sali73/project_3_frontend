import About from "../About";
import Contact from "../Contact";
import Shop from "../Shop";
import Home from "../Home";
<<<<<<< HEAD

=======
import Login from "../Login";
import Register from '../Register';
import Cart from '../Cart';
>>>>>>> 5e63301362d1f7ded02fe8a6d9b425c6a08119e7
const routes = [
    {
        path: '/home',
        component: Home,
        name: 'Home',
    },
    {
        path: '/shop',
        component: Shop,
        name: 'Shop',
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    },
    {
        path: '/contact-us',
        component: Contact,
        name: 'Contact',
    },
<<<<<<< HEAD
=======
    {
        path: '/new',
        component: New,
        name: 'New',
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
    },
    {
        path: '/signup',
        component: Register,
        name: 'Sign Up',
    },
    {
        path: '/signup',
        component: Cart,
        name: 'Cart',
    },
>>>>>>> 5e63301362d1f7ded02fe8a6d9b425c6a08119e7
  ]

  export { routes };