<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
    /** Nombre de la empresa */
    company?: string;
    /** Año del copyright */
    year?: number;
    /** Versión del sistema */
    version?: string;
}

const props = withDefaults(defineProps<Props>(), {
    company: 'E.C Orinoco S.A.S.',
    year: new Date().getFullYear(),
    version: 'v1.0.0',
});

// Fecha/hora de actualización
const lastUpdated = ref('');

onMounted(() => {
    const now = new Date();
    lastUpdated.value = now.toLocaleString('es-CO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
});
</script>

<template>
    <footer
        class="border-t bg-white dark:bg-neutral-900 text-sm text-gray-600 dark:text-gray-400 px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2"
    >
        <!-- 📘 Información principal -->
        <div class="flex flex-col sm:flex-row items-center gap-2">
            <span>© {{ year }} {{ company }}.</span>
            <span class="hidden sm:inline-block">|</span>
            <span>Todos los derechos reservados.</span>
        </div>

        <!-- ⚙️ Información técnica -->
        <div class="flex flex-col sm:flex-row items-center gap-2">
            <span class="text-orinoco-primary font-medium">{{ version }}</span>
            <span class="hidden sm:inline-block text-gray-400">|</span>
            <span>Última actualización: {{ lastUpdated }}</span>
        </div>
    </footer>
</template>

<style scoped>
footer {
    font-family: 'Inter', sans-serif;
}
</style>
