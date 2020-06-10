import About from "../About";
import Contact from "../Contact";
import New from "../New";
// import Edit from "../Edit";
import Shop from "../Shop";

const routes = [
    {
        path:'/contact-us',
        component: Contact,
        name: 'Contact',
    },
    {
        path:'/about',
        component: About,
        name: 'About',
    },
    {
        path: '/new',
        component: New,
        name: 'New',
    },
    // {
    //     path: '/edit/:slug',
    //     component: Edit,
    //     name: 'Edit',
    // },
    {
        path: '/shop',
        component: Shop,
        name: 'Shop',
    }
  ]

  export { routes };