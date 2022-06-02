import { createWebHistory, createRouter } from "vue-router";
import Exo2 from '@/components/exos/Exo2.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'exo2', component:Exo2}
    ]
})

export default router;