import { createRouter, createWebHistory} from 'vue-router';


import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import ProjectsView from '@/views/ProjectsView.vue';

const routes = [
    { 'path' : '/', redirect : '/about'},
    { 'path' : '/about', component : AboutView},
    { 'path' : '/experience', component : ExperienceView},
    { 'path' : '/projects', component : ProjectsView},
    { 'path' : '/contact', component : ContactView}
]

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;