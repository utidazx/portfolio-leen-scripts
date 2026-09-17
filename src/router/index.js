import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import PoliticaPrivacidade from '../views/PoliticaPrivacidade.vue'
import TermosDeUso from '../views/TermosDeUso.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/post/:slug", name: "post", component: Post, props: true },
    { path: "/politica-privacidade", name: "politica-privacidade", component: PoliticaPrivacidade },
    { path: "/termos-de-uso", name: "termos-de-uso", component: TermosDeUso },
  ],
});

export default router;
