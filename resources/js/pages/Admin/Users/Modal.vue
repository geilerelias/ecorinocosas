<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineEmits } from 'vue'

const emit = defineEmits(['close'])

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') emit('close')
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
})

const modalRef = ref<HTMLElement | null>(null)

const closeOnBackdrop = (event: MouseEvent) => {
    if (event.target === modalRef.value) emit('close')
}
</script>

<template>
    <teleport to="body">
        <div
            ref="modalRef"
            @click="closeOnBackdrop"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
            <transition
                enter-active-class="transition ease-out duration-300"
                enter-from-class="opacity-0 translate-y-6 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition ease-in duration-200"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 translate-y-6 scale-95"
            >
                <div
                    class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
                    role="dialog"
                    aria-modal="true"
                >
                    <!-- Header -->
                    <div class="flex justify-between items-center mb-4 border-b pb-3">
                        <h3 class="text-lg font-semibold text-gray-800">
                            <slot name="title">Título</slot>
                        </h3>
                        <button
                            @click="emit('close')"
                            class="rounded-full p-2 hover:bg-gray-100 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <!-- Content -->
                    <div class="max-h-[70vh] overflow-y-auto pr-1">
                        <slot />
                    </div>

                    <!-- Footer -->
                    <div v-if="$slots.footer" class="mt-6 pt-4 border-t flex justify-end space-x-3">
                        <slot name="footer" />
                    </div>
                </div>
            </transition>
        </div>
    </teleport>
</template>
