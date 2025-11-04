<script setup lang="ts">
import InputError from '@/components/InputError.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Form } from '@inertiajs/vue3'
import { LoaderCircle } from 'lucide-vue-next'
import { useGlobalMessage } from '@/composables/useGlobalMessage'
import { ref, watch, defineProps, defineEmits } from 'vue'

// Props y eventos
const emit = defineEmits(['saved'])
const { showGlobalMessage } = useGlobalMessage()

const props = defineProps({
    user: { type: Object, default: null },
    isEdit: { type: Boolean, default: false },
})

// Estado reactivo
const formData = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
})

// Prellenar datos si estamos editando
watch(
    () => props.user,
    (user) => {
        if (user) {
            formData.value.name = user.name
            formData.value.email = user.email
        } else {
            formData.value = {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        }
    },
    { immediate: true }
)

// Manejar envío
const handleSubmit = async (form: any) => {
    try {
        if (props.isEdit) {
            // Actualizar usuario
            form.put(route('admin.users.update', props.user.id), {
                onSuccess: () => {
                    showGlobalMessage('Usuario actualizado correctamente.', 'success')
                    emit('saved')
                },
                onError: () => showGlobalMessage('Error al actualizar el usuario.', 'error'),
            })
        } else {
            // Crear usuario nuevo
            form.post(route('register'), {
                onSuccess: () => {
                    showGlobalMessage('Usuario creado correctamente.', 'success')
                    emit('saved')
                },
                onError: () => showGlobalMessage('Error al crear el usuario.', 'error'),
                onFinish: () => {
                    form.reset('password', 'password_confirmation')
                },
            })
        }
    } catch (err) {
        console.error(err)
        showGlobalMessage('Error inesperado en el formulario.', 'error')
    }
}
</script>

<template>
    <Form
        :data="formData"
        @submit="handleSubmit"
        v-slot="{ errors, processing }"
        class="flex flex-col gap-6"
    >
        <div class="grid gap-6">
            <div class="grid gap-2">
                <Label for="name">Nombre completo</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autocomplete="name"
                    v-model="formData.name"
                />
                <InputError :message="errors.name" />
            </div>

            <div class="grid gap-2">
                <Label for="email">Correo electrónico</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autocomplete="email"
                    v-model="formData.email"
                />
                <InputError :message="errors.email" />
            </div>

            <!-- Solo se muestran las contraseñas al crear -->
            <div v-if="!props.isEdit" class="grid gap-2">
                <Label for="password">Contraseña</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autocomplete="new-password"
                    v-model="formData.password"
                />
                <InputError :message="errors.password" />
            </div>

            <div v-if="!props.isEdit" class="grid gap-2">
                <Label for="password_confirmation">Confirmar contraseña</Label>
                <Input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    required
                    autocomplete="new-password"
                    v-model="formData.password_confirmation"
                />
                <InputError :message="errors.password_confirmation" />
            </div>

            <Button type="submit" class="w-full" :disabled="processing">
                <LoaderCircle v-if="processing" class="h-4 w-4 animate-spin mr-2" />
                {{ props.isEdit ? 'Actualizar usuario' : 'Crear usuario' }}
            </Button>
        </div>
    </Form>
</template>
