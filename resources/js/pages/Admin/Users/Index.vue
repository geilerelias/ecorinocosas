<template>
    <AppLayout>
        <section class="p-5">
            <DataTable
                title="Usuarios"
                :data="users"
                :columns="columns"
                :actions="actions"
                showAddButton
                addButtonText="Nuevo Usuario"
                @add="openCreateModal"
                selectable
            />

            <!-- Modal para crear / editar usuario -->
            <Modal v-if="showModal" @close="closeModal">
                <template #title>
                    {{ selectedUser ? 'Editar usuario' : 'Nuevo usuario' }}
                </template>

                <UserForm
                    :user="selectedUser"
                    :isEdit="!!selectedUser"
                    @saved="onUserSaved"
                />

                <template #footer>
                    <button
                        @click="closeModal"
                        class="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-100"
                    >
                        Cancelar
                    </button>
                </template>
            </Modal>
        </section>
    </AppLayout>
</template>

<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import { useGlobalMessage } from '@/composables/useGlobalMessage';
import AppLayout from '@/layouts/AppLayout.vue';
import Modal from '@/pages/Admin/Users/Modal.vue';
import UserForm from '@/pages/Admin/Users/UserModal.vue';
import { router, usePage } from '@inertiajs/vue3';
import { Pencil, Trash2 } from 'lucide-vue-next';
import { ref } from 'vue';
import { route } from 'ziggy-js';

const { props } = usePage();
const { showGlobalMessage, showConfirmMessage } = useGlobalMessage();

const users = ref(props.users || <any>[]);

const showModal = ref(false);
const selectedUser = ref(<any>null);

const columns = [
    { key: 'name', label: 'Nombre' },
    { key: 'email', label: 'Correo' },
    { key: 'role', label: 'Rol' },
];

const actions = [
    {
        label: 'Editar',
        icon: Pencil,
        color: 'text-blue-600',
        onClick: (user: any) => editUser(user),
    },
    {
        label: 'Eliminar',
        icon: Trash2,
        color: 'text-red-600',
        onClick: (user: any) => deleteUser(user),
    },
];

const openCreateModal = () => {
    selectedUser.value = null;
    showModal.value = true;
};

const editUser = (user: any) => {
    selectedUser.value = user;
    showModal.value = true;
};

const deleteUser = async (user: any) => {
    const confirmed = await showConfirmMessage({
        title: '¿Eliminar usuario?',
        text: `Esta acción eliminará permanentemente a ${user.name}.`,
        confirmButtonText: 'Sí, eliminar',
    });

    if (confirmed) {
        router.delete(route('users.destroy', user.id), {
            onSuccess: () => {
                showGlobalMessage({
                    message: 'Usuario eliminado correctamente.',
                    type: 'success',
                });

                reload();
            },
            onError: () => {
                showGlobalMessage({
                    message: 'Error al eliminar el usuario.',
                    type: 'error',
                });
            },
        });
    }
};

const reload = () => {
    router.reload({ only: ['users'] });
};

const onUserSaved = () => {
    showModal.value = false;
    // Aquí puedes recargar los datos con Inertia.reload() si estás usando backend real
};

const closeModal = () => {
    showModal.value = false;
};
</script>
