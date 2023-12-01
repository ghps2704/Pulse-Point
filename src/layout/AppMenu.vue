<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Tabs',
        items: [
            { label: 'Médicos', icon: 'pi pi-fw pi-home', to: '/med' },
            { label: 'Farmacêutico', icon: 'pi pi-fw pi-home', to: '/farm' },
            { label: 'Administração', icon: 'pi pi-fw pi-home', to: '/adm' },
            { label: 'Paciente', icon: 'pi pi-fw pi-home', to: '/pacientes' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
