import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router