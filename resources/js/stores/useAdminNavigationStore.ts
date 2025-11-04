import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import {
    BarChart3,
    Bell,
    Briefcase,
    Building2,
    FileText,
    FolderKanban,
    LayoutGrid,
    LifeBuoy,
    Package,
    Users,
    Users2,
} from 'lucide-vue-next';
import { defineStore } from 'pinia';

export const useAdminNavigationStore = defineStore('adminNavigation', {
    state: () => ({
        mainNavItems: [
            {
                title: 'Panel principal',
                href: dashboard(),
                icon: LayoutGrid,
            },
            {
                title: 'Gestión empresarial',
                icon: Building2,
                children: [
                    {
                        title: 'Departamentos',
                        href: '/departamentos',
                        icon: FolderKanban,
                    },
                    {
                        title: 'Empleados',
                        href: '/empleados',
                        icon: Users,
                    },
                    {
                        title: 'Proveedores',
                        href: '/proveedores',
                        icon: Briefcase,
                    },
                ],
            },
            {
                title: 'Inventario',
                icon: Package,
                children: [
                    {
                        title: 'Productos',
                        href: '/productos',
                        icon: Package,
                    },
                    {
                        title: 'Categorías',
                        href: '/categorias',
                        icon: FolderKanban,
                    },
                    {
                        title: 'Entradas / Salidas',
                        href: '/movimientos',
                        icon: FileText,
                    },
                ],
            },
            {
                title: 'Reportes',
                icon: BarChart3,
                children: [
                    {
                        title: 'Reportes financieros',
                        href: '/reportes/financieros',
                        icon: BarChart3,
                    },
                    {
                        title: 'Indicadores de desempeño',
                        href: '/reportes/kpis',
                        icon: FileText,
                    },
                ],
            },
            {
                title: 'Notificaciones',
                href: '/notificaciones',
                icon: Bell,
            },
            {
                title: 'Centro de ayuda',
                href: '/ayuda',
                icon: LifeBuoy,
            },

            {
                title: 'Usuarios',
                href: '/admin/users',
                icon: Users,
            },
            {
                title: 'Suscriptores',
                href: '/newsletter',
                icon: Users2,
            },
        ] as NavItem[],
    }),

    getters: {
        getMainNavItems: (state) => state.mainNavItems,
    },
});
