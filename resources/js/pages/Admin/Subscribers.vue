<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold mb-6">Suscriptores del Newsletter</h1>

        <table class="min-w-full bg-white shadow rounded-lg">
            <thead>
            <tr class="bg-gray-100 border-b">
                <th class="text-left px-6 py-3 text-gray-600 font-semibold">ID</th>
                <th class="text-left px-6 py-3 text-gray-600 font-semibold">Email</th>
                <th class="text-left px-6 py-3 text-gray-600 font-semibold">Fecha</th>
                <th class="text-right px-6 py-3 text-gray-600 font-semibold">Acciones</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="sub in subscribers"
                :key="sub.id"
                class="border-b hover:bg-gray-50 transition"
            >
                <td class="px-6 py-3">{{ sub.id }}</td>
                <td class="px-6 py-3">{{ sub.email }}</td>
                <td class="px-6 py-3">{{ new Date(sub.created_at).toLocaleString() }}</td>
                <td class="px-6 py-3 text-right">
                    <button
                        @click="confirmDelete(sub.id)"
                        class="text-red-500 hover:text-red-700 transition"
                    >
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import { router } from '@inertiajs/vue3'
defineProps<{ subscribers: Array<any> }>()

const confirmDelete = (id: number) => {
    Swal.fire({
        title: '¿Eliminar suscriptor?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#e3342f',
    }).then(result => {
        if (result.isConfirmed) {
            router.delete(`/admin/subscribers/${id}`, {
                onSuccess: () => {
                    Swal.fire('Eliminado', 'El suscriptor fue eliminado correctamente.', 'success')
                },
            })
        }
    })
}
</script>
