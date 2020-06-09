import About from "../About";
import Contact from "../Contact";
import New from "../New";
import Edit from "../Edit";

const routes = [
    {
        path:"/contact-us",
        component: Contact,
        name: "Contact",
    },
    {
        path:"/about",
        component: About,
        name: "About",
    },
    {
        path: "/new",
        component: New,
        name: "New",
    },
    {
        path: "/edit",
        component: Edit,
        name: "Edit",
    },
  ]

  export { routes };