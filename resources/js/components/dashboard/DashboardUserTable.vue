<script setup lang="ts">
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { computed, ref } from 'vue';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar: string;
    status: 'Activo' | 'Inactivo';
}

const users = ref<User[]>([
    {
        id: 1,
        name: 'María González',
        email: 'maria@ecorinoco.com',
        role: 'Administrador',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        status: 'Activo',
    },
    {
        id: 2,
        name: 'Carlos Pérez',
        email: 'carlos@ecorinoco.com',
        role: 'Técnico Solar',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        status: 'Activo',
    },
    {
        id: 3,
        name: 'Lucía Martínez',
        email: 'lucia@ecorinoco.com',
        role: 'Asistente de Energía',
        avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
        status: 'Inactivo',
    },
    {
        id: 4,
        name: 'Javier López',
        email: 'javier@ecorinoco.com',
        role: 'Supervisor de Campo',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
        status: 'Activo',
    },
    {
        id: 5,
        name: 'Ana Rodríguez',
        email: 'ana@ecorinoco.com',
        role: 'Contadora',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
        status: 'Activo',
    },
]);

const search = ref('');
const filteredUsers = computed(() =>
    users.value.filter(
        (u) =>
            u.name.toLowerCase().includes(search.value.toLowerCase()) ||
            u.email.toLowerCase().includes(search.value.toLowerCase()) ||
            u.role.toLowerCase().includes(search.value.toLowerCase()),
    ),
);
</script>

<template>
    <Card class="rounded-2xl  p-6 shadow-lg">
        <CardTitle
            ><div
                class="mb-4 flex flex-col items-center justify-between gap-3 sm:flex-row"
            >
                <h2
                    class="flex items-center gap-2 text-2xl font-bold text-emerald-800"
                >
                    Usuarios del Sistema
                </h2>
                <input
                    type="text"
                    v-model="search"
                    placeholder="Buscar usuario..."
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none sm:w-64"
                />
            </div>
        </CardTitle>
        <!-- Tabla -->
        <CardContent>
            <table class="min-w-full divide-y divide-gray-200 text-sm">
                <thead class="">
                    <tr>
                        <th
                            class="px-6 py-3 text-left font-semibold text-gray-700"
                        >
                            Usuario
                        </th>
                        <th
                            class="px-6 py-3 text-left font-semibold text-gray-700"
                        >
                            Rol
                        </th>
                        <th
                            class="px-6 py-3 text-left font-semibold text-gray-700"
                        >
                            Correo
                        </th>
                        <th
                            class="px-6 py-3 text-center font-semibold text-gray-700"
                        >
                            Estado
                        </th>
                        <th
                            class="px-6 py-3 text-center font-semibold text-gray-700"
                        >
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    <tr
                        v-for="user in filteredUsers"
                        :key="user.id"
                        class="transition hover:bg-gray-50 dark:hover:bg-zinc-800"
                    >
                        <!-- Usuario -->
                        <td class="flex items-center gap-3 px-6 py-4">
                            <img
                                :src="user.avatar"
                                alt="avatar"
                                class="h-10 w-10 rounded-full border-2 border-orinoco-darker object-cover"
                            />
                            <div>
                                <div class="font-medium text-gray-800">
                                    {{ user.name }}
                                </div>
                                <div class="text-xs text-gray-500">
                                    {{ user.email }}
                                </div>
                            </div>
                        </td>

                        <td class="px-6 py-4 text-gray-700">{{ user.role }}</td>
                        <td class="px-6 py-4 text-gray-700">
                            {{ user.email }}
                        </td>

                        <td class="px-6 py-4 text-center">
                            <span
                                :class="[
                                    'rounded-full px-3 py-1 text-xs font-semibold',
                                    user.status === 'Activo'
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : 'bg-red-100 text-red-700',
                                ]"
                            >
                                {{ user.status }}
                            </span>
                        </td>

                        <!-- Acciones -->
                        <td class="px-6 py-4 text-center">
                            <div class="flex justify-center gap-3">
                                <button
                                    class="text-blue-600 transition hover:text-blue-800"
                                    title="Editar"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                </button>
                                <button
                                    class="text-red-600 transition hover:text-red-800"
                                    title="Eliminar"
                                >
                                    <i class="mdi mdi-delete"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CardContent>

        <!-- Footer -->
        <CardFooter
            v-if="filteredUsers.length === 0"
            class="py-6 text-center text-sm text-gray-500"
        >
            No se encontraron usuarios.
        </CardFooter>
    </Card>
</template>

<style scoped>
table {
    border-collapse: separate;
    border-spacing: 0;
}
</style>
