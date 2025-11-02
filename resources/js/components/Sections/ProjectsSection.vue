<template>
    <section id="proyectos" class="bg-orinoco-light py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Encabezado -->
            <div class="mb-16 text-center">
                <h2 class="text-orinoco-darker mb-4 text-4xl font-bold">
                    Proyectos Destacados
                </h2>
                <p class="text-orinoco-gray text-xl">
                    Casos de éxito que demuestran nuestra experiencia
                </p>
            </div>

            <!-- Grid de proyectos -->
            <div
                v-if="featuredProjects.length"
                class="grid gap-8 md:grid-cols-3"
            >
                <div
                    v-for="project in featuredProjects"
                    :key="project.id"
                    class="overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl"
                >
                    <img
                        :src="project.images[0]"
                        :alt="project.title"
                        class="h-48 w-full object-cover"
                    />
                    <div class="p-6">
                        <span
                            class="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                            :class="badgeClass(project.category)"
                        >
                            {{ project.category }}
                        </span>
                        <h3
                            class="text-orinoco-darker mt-2 mb-3 text-xl font-semibold"
                        >
                            {{ project.title }}
                        </h3>
                        <p class="mb-4 line-clamp-3 text-gray-600">
                            {{ project.description }}
                        </p>
                        <Link
                            :href="`/projects/${project.id}`"
                            class="font-semibold text-orinoco-primary transition hover:text-orinoco-dark"
                        >
                            Ver Detalles →
                        </Link>
                    </div>
                </div>
            </div>

            <div v-else class="text-center text-gray-600">
                No hay proyectos disponibles por ahora.
            </div>

            <!-- Botón -->
            <div class="mt-12 text-center">
                <Link
                    href="/proyectos"
                    class="transform rounded-full bg-orinoco-primary px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-orinoco-dark"
                >
                    Ver Todos los Proyectos
                </Link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/stores/useProjectsStore';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

// Store
const proyectoStore = useProjectsStore();

// Computed: solo los 3 primeros proyectos
const featuredProjects = computed(() => proyectoStore.projects.slice(0, 3));

// Clases dinámicas según categoría
const badgeClass = (category: string) => {
    switch (category) {
        case 'ENERGÍA':
            return 'bg-orinoco-light text-orinoco-dark';
        case 'TELECOMUNICACIONES':
            return 'bg-blue-100 text-blue-800';
        case 'INTEGRADO':
            return 'bg-green-100 text-green-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};
</script>
