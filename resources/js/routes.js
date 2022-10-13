
import { createRouter, createWebHistory } from "vue-router";

const Home = ()=> import ('./components/Home.vue');
const Contact = ()=> import ('./components/Contact.vue');

//importamos los componentes para el blog
const Create = ()=> import ('./components/blogs/Create.vue');
const Show = ()=> import ('./components/blogs/Show.vue');
const Edit = ()=> import ('./components/blogs/Edit.vue');

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'contact',
        path:'/contact',
        component:Contact
    },
    {
        name:'createBlogs',
        path:'/create',
        component:Create
    },
    {
        name:'showBlogs',
        path:'/blogs',
        component:Show
    },
    {
        name:'editBlog',
        path:'/edit/:id',
        component:Edit
    },
]})

export default router;
