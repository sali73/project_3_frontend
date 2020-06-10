import About from "../About";
import Contact from "../Contact";
import New from "../New";
import Shop from "../Shop";
import Home from "../Home";

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
    {
        path: '/new',
        component: New,
        name: 'New',
    },
  ]

  export { routes };