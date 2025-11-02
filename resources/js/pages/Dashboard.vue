<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import PlaceholderPattern from '../components/PlaceholderPattern.vue';
import DashboardStats from '@/components/dashboard/DashboardStats.vue';
import DashboardChart from '@/components/dashboard/DashboardChart.vue';
import DashboardTable from '@/components/dashboard/DashboardTable.vue';
import DashboardUserTable from '@/components/dashboard/DashboardUserTable.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">

        <div
            class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
        >


            <!-- Estadísticas principales -->
            <DashboardStats />

            <!-- Gráfico de rendimiento -->
            <DashboardChart />

            <DashboardUserTable/>

            <!-- Registros recientes -->
            <DashboardTable />
        </div>

    </AppLayout>
</template>
