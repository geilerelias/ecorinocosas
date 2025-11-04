<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3'
import { ref } from 'vue'
import {
    Pencil,
    Trash2,
    RefreshCcw,
} from 'lucide-vue-next'

import AppLayout from '@/layouts/AppLayout.vue'
import DataTable from '@/components/DataTable.vue'
import { useGlobalMessage } from '@/composables/useGlobalMessage'
import { dashboard } from '@/routes'

// Props de Inertia
const props = defineProps<{ subscribers: Array<any> }>()

// Estado local
const selectedSubscribers = ref<number[]>([])

// Mensajería global
const { showGlobalMessage, showConfirmMessage } = useGlobalMessage()

// 🧩 Columnas de la tabla
const columns = [
    { key: 'id', label: 'ID' },
    { key: 'email', label: 'Correo electrónico' },
    { key: 'created_at', label: 'Fecha de suscripción' },
]

// 🧭 Acciones por fila
const actions = [
    {
        icon: Pencil,
        color: 'text-blue-600 hover:text-blue-800',
        onClick: (subscriber: any) => handleEdit(subscriber),
    },
    {
        icon: Trash2,
        color: 'text-red-600 hover:text-red-800',
        onClick: (subscriber: any) => confirmDelete(subscriber.id),
    },
]

// 🔄 Refrescar lista
const fetchSubscribers = () => {
    router.reload({
        onSuccess: () =>
            showGlobalMessage({
                message: 'Lista actualizada correctamente.',
                type: 'success',
            }),
        onError: () =>
            showGlobalMessage({
                message: 'Error al actualizar lista.',
                type: 'error',
            }),
    })
}

// 🗑️ Eliminar un solo suscriptor
const confirmDelete = async (id: number) => {
    const confirmed = await showConfirmMessage({
        title: '¿Eliminar suscriptor?',
        text: 'Esta acción no se puede deshacer.',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        icon: 'warning',
    })

    if (!confirmed) return

    router.delete(`/admin/subscribers/${id}`, {
        onSuccess: () =>
            showGlobalMessage({
                message: 'Suscriptor eliminado correctamente.',
                type: 'success',
            }),
        onError: () =>
            showGlobalMessage({
                message: 'Error al eliminar el suscriptor.',
                type: 'error',
            }),
    })
}

// 🗑️ Eliminar múltiples suscriptores seleccionados
const confirmBulkDelete = async (selected: number[]) => {
    if (selected.length === 0) {
        showGlobalMessage({
            message: 'No hay suscriptores seleccionados.',
            type: 'warning',
        })
        return
    }

    const confirmed = await showConfirmMessage({
        title: '¿Eliminar seleccionados?',
        text: `Se eliminarán ${selected.length} suscriptores.`,
        confirmButtonText: 'Eliminar todo',
        cancelButtonText: 'Cancelar',
        icon: 'warning',
    })

    if (!confirmed) return

    await Promise.all(
        selected.map((id) =>
            router.delete(`/admin/subscribers/${id}`, { preserveScroll: true }),
        ),
    )

    showGlobalMessage({
        message: 'Suscriptores eliminados correctamente.',
        type: 'success',
    })

    selectedSubscribers.value = []
}

// ✏️ Editar
const handleEdit = (subscriber: any) => {
    showGlobalMessage({
        message: `Editar suscriptor: ${subscriber.email}`,
        type: 'info',
    })
}

// 📍 Migas de navegación
const breadcrumbs = [
    { title: 'Dashboard', href: dashboard().url },
    { title: 'Suscriptores', href: '/admin/subscribers' },
]
</script>

<template>
    <Head title="Suscriptores" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="w-full p-4">
            <DataTable
                title="Suscriptores"
                :data="props.subscribers"
                :columns="columns"
                :actions="actions"
                selectable
                show-add-button
                add-button-text="Actualizar"
                :add-button-icon="RefreshCcw"
                @add="fetchSubscribers"
                @update:selected="(val) => (selectedSubscribers = val)"
                @deleteMultiple="confirmBulkDelete"
            />
        </div>
    </AppLayout>
</template>
