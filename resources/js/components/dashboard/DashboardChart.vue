<script setup lang="ts">
import { use } from 'echarts/core';
import { nextTick, onMounted, ref } from 'vue';

import { Card } from '@/components/ui/card';
import { BarChart, LineChart, PieChart, RadarChart } from 'echarts/charts';
import {
    GridComponent,
    LegendComponent,
    TitleComponent,
    TooltipComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';

use([
    CanvasRenderer,
    LineChart,
    BarChart,
    PieChart,
    RadarChart,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
]);

// Estado reactivo
const isReady = ref(false);

// Configuración de los gráficos
const lineChart = ref({});
const barChart = ref({});
const pieChart = ref({});
const radarChart = ref({});

// Inicializa después del render
onMounted(async () => {
    await nextTick();
    isReady.value = true;

    lineChart.value = {
        title: { text: 'Generación de Energía', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'kWh',
                type: 'line',
                smooth: true,
                data: [120, 200, 150, 80, 70, 110, 130],
                color: '#169273',
            },
        ],
    };

    barChart.value = {
        title: { text: 'Producción por Panel', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['P1', 'P2', 'P3', 'P4', 'P5'] },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Producción',
                type: 'bar',
                data: [320, 280, 340, 300, 360],
                itemStyle: { color: '#1E88E5' },
            },
        ],
    };

    pieChart.value = {
        title: { text: 'Distribución de Consumo', left: 'center' },
        tooltip: { trigger: 'item' },
        legend: { bottom: 0 },
        series: [
            {
                name: 'Consumo',
                type: 'pie',
                radius: '60%',
                data: [
                    { value: 1048, name: 'Iluminación' },
                    { value: 735, name: 'Equipos' },
                    { value: 580, name: 'Aire Acond.' },
                    { value: 484, name: 'Otros' },
                ],
            },
        ],
    };

    radarChart.value = {
        title: { text: 'Rendimiento por Día', left: 'center' },
        tooltip: {},
        radar: {
            indicator: [
                { name: 'Lun', max: 100 },
                { name: 'Mar', max: 100 },
                { name: 'Mié', max: 100 },
                { name: 'Jue', max: 100 },
                { name: 'Vie', max: 100 },
                { name: 'Sáb', max: 100 },
                { name: 'Dom', max: 100 },
            ],
        },
        series: [
            {
                name: 'Rendimiento',
                type: 'radar',
                data: [
                    {
                        value: [80, 90, 70, 85, 95, 75, 88],
                        name: 'kWh',
                    },
                ],
            },
        ],
    };
});
</script>

<template>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <Card v-if="isReady" class="h-[300px] rounded-xl p-4 shadow-md">
            <v-chart :option="lineChart" autoresize class="h-full w-full" />
        </Card>

        <Card v-if="isReady" class="h-[300px] rounded-xl p-4 shadow-md">
            <v-chart :option="barChart" autoresize class="h-full w-full" />
        </Card>

        <Card v-if="isReady" class="h-[300px] rounded-xl p-4 shadow-md">
            <v-chart :option="pieChart" autoresize class="h-full w-full" />
        </Card>

        <Card v-if="isReady" class="h-[300px] rounded-xl p-4 shadow-md">
            <v-chart :option="radarChart" autoresize class="h-full w-full" />
        </Card>
    </div>
</template>

<style scoped>
.v-chart {
    width: 100%;
    height: 100%;
}
</style>
