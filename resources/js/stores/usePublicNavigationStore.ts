// src/stores/useNavigationStore.ts
import {
    FolderKanban,
    Home,
    Mail,
    Newspaper,
    Settings,
    Shield,
    Users,
} from 'lucide-vue-next';
import { defineStore } from 'pinia';

export const useNavigationStore = defineStore('navigation', {
    state: () => ({
        drawerOpen: false,
        links: [
            { title: 'Inicio', href: '/', name: 'home', icon: Home },
            { title: 'Nosotros', href: '/about', name: 'about', icon: Users },
            {
                title: 'Servicios',
                href: '/services',
                name: 'services',
                icon: Settings,
            },
            {
                title: 'Proyectos',
                href: '/projects',
                name: 'projects',
                icon: FolderKanban,
            },
            { title: 'Blog', href: '/blog', name: 'blog', icon: Newspaper },
            {
                title: 'Contacto',
                href: '/contact',
                name: 'contact',
                icon: Mail,
            },
        ],
        admin: {
            title: 'Admin',
            href: '/dashboard',
            name: 'admin',
            icon: Shield,
        },
    }),

    actions: {
        toggleDrawer() {
            this.drawerOpen = !this.drawerOpen;
        },
        closeDrawer() {
            this.drawerOpen = false;
        },
        openDrawer() {
            this.drawerOpen = true;
        },
    },
});
