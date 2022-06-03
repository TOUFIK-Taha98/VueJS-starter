import { createWebHistory, createRouter } from "vue-router";
import Exo1 from '@/components/exos/Exo1.vue'
import Exo2 from '@/components/exos/Exo2.vue'
import Exo3 from '@/components/exos/Exo3.vue'
import DemoJWT from '@/components/exos/DemoJWT.vue'
import DemoVFor from '@/components/exos/DemoVFor.vue'
import Connexion from '@/components/exos/Connexion.vue'
import Deconnexion from '@/components/exos/Deconnexion.vue'
import Accueil from '@/components/exos/Accueil.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'accueil', component:Accueil},
        {path: '/exo1', name:'exo1', component:Exo1},
        {path: '/exo2', name:'exo2', component:Exo2},
        {path: '/exo3', name:'exo3', component:Exo3},
        {path: '/demojwt', name:'demojwt', component:DemoJWT},
        {path: '/demovfor', name:'demovfor', component:DemoVFor},
        {path: '/connexion', name:'connexion', component:Connexion},
    ]
})

export default router;