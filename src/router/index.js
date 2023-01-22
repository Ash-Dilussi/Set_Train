import { createRouter, createWebHistory } from "vue-router";
import StartView from '../views/Getstart.vue';
import Menuv from "../views/Menuv.vue";
import SearchTrain from "../views/SearchTrain.vue";
import Book from "../views/BookTrain.vue";
import Team from '../views/Team.vue';
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Start',
       component:StartView
    },
    {
        path: '/menu',
        name: 'Menu',
       component:Menuv
    },
    {
        path: '/search-train',
        name: 'Search',
       component:SearchTrain
    },
    {
        path: '/book-ticket',
        name: 'Book',
       component:Book
    },
    {
        path: '/team',
        name: 'Team',
       component:Team
    },
  ],
});

export default router;
