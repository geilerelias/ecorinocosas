<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Battery, DollarSign, Leaf } from 'lucide-vue-next';
</script>

<template>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <Sun class="h-5 w-5 text-emerald-600" />
                    Energía generada
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p class="text-2xl font-bold">1,245 kWh</p>
                <p class="text-sm text-gray-500">Este mes</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <Battery class="h-5 w-5 text-emerald-600" />
                    Capacidad actual
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p class="text-2xl font-bold">87%</p>
                <p class="text-sm text-gray-500">Banco de baterías</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <DollarSign class="h-5 w-5 text-emerald-600" />
                    Ahorro estimado
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p class="text-2xl font-bold">$4.560.000</p>
                <p class="text-sm text-gray-500">COP este mes</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <Leaf class="h-5 w-5 text-emerald-600" />
                    CO₂ evitado
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p class="text-2xl font-bold">2,3 t</p>
                <p class="text-sm text-gray-500">Impacto ambiental positivo</p>
            </CardContent>
        </Card>
    </div>
</template>
