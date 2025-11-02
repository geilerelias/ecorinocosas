<template>
    <section id="proyectos" class="py-20 bg-orinoco-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Encabezado -->
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-orinoco-darker mb-4">
                    Proyectos Destacados
                </h2>
                <p class="text-xl text-orinoco-gray">
                    Casos de éxito que demuestran nuestra experiencia
                </p>
            </div>

            <!-- Grid de proyectos -->
            <div v-if="featuredProjects.length" class="grid md:grid-cols-3 gap-8">
                <div
                    v-for="project in featuredProjects"
                    :key="project.id"
                    class="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl"
                >
                    <img
                        :src="project.images[0]"
                        :alt="project.title"
                        class="w-full h-48 object-cover"
                    />
                    <div class="p-6">
            <span
                class="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                :class="badgeClass(project.category)"
            >
              {{ project.category }}
            </span>
                        <h3 class="text-xl font-semibold mt-2 mb-3 text-orinoco-darker">
                            {{ project.title }}
                        </h3>
                        <p class="text-gray-600 mb-4 line-clamp-3">
                            {{ project.description }}
                        </p>
                        <Link
                            :href="`/projects/${project.id}`"
                            class="text-orinoco-primary font-semibold hover:text-orinoco-dark transition"
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
            <div class="text-center mt-12">
                <Link
                    href="/proyectos"
                    class="bg-orinoco-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-orinoco-dark transition transform hover:scale-105"
                >
                    Ver Todos los Proyectos
                </Link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'
import { useProjectsStore } from '@/stores/useProjectsStore'

// Store
const proyectoStore = useProjectsStore()

// Computed: solo los 3 primeros proyectos
const featuredProjects = computed(() => proyectoStore.projects.slice(0, 3))

// Clases dinámicas según categoría
const badgeClass = (category: string) => {
    switch (category) {
        case 'ENERGÍA':
            return 'bg-orinoco-light text-orinoco-dark'
        case 'TELECOMUNICACIONES':
            return 'bg-blue-100 text-blue-800'
        case 'INTEGRADO':
            return 'bg-green-100 text-green-800'
        default:
            return 'bg-gray-100 text-gray-800'
    }
}
</script>
