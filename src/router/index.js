import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/med',
                    name: 'Médicos',
                    component: () => import('@/views/pages/Med.vue')
                },
                {
                    path: '/farm',
                    name: 'Farmacêuticos',
                    component: () => import('@/views/pages/Farm.vue')
                },
                {
                    path: '/adm',
                    name: 'Administrador',
                    component: () => import('@/views/pages/Adm.vue')
                },
                {
                    path: '/pacientes',
                    name: 'Pacientes',
                    component: () => import('@/views/pages/paciente.vue')
                },
            ]
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/views/pages/auth/Register.vue')
        },
        
    ]
});

export default router;
