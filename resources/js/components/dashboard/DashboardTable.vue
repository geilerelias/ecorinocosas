<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const registros = [
    { id: 1, fecha: '2025-10-28', evento: 'Mantenimiento programado', estado: 'Completado' },
    { id: 2, fecha: '2025-10-27', evento: 'Actualización de firmware', estado: 'En progreso' },
    { id: 3, fecha: '2025-10-25', evento: 'Monitoreo remoto', estado: 'Activo' },
];
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>Registros recientes</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="overflow-x-auto">
                <table class="min-w-full text-sm text-gray-700 dark:text-gray-200">
                    <thead class="bg-emerald-600 text-white">
                    <tr>
                        <th class="px-4 py-2 text-left">Fecha</th>
                        <th class="px-4 py-2 text-left">Evento</th>
                        <th class="px-4 py-2 text-left">Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="registro in registros"
                        :key="registro.id"
                        class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                        <td class="px-4 py-2">{{ registro.fecha }}</td>
                        <td class="px-4 py-2">{{ registro.evento }}</td>
                        <td class="px-4 py-2">
                                <span
                                    :class="{
                                        'text-green-600 font-semibold': registro.estado === 'Completado' || registro.estado === 'Activo',
                                        'text-yellow-600 font-semibold': registro.estado === 'En progreso',
                                    }"
                                >
                                    {{ registro.estado }}
                                </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </CardContent>
    </Card>
</template>
