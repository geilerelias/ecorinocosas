<template>
    <div v-if="project" class="bg-white min-h-screen">
        <!-- Hero Section -->
        <div class="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <img
                :src="project.images[0]"
                :alt="project.title"
                class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            <!-- Back Button -->
            <div class="absolute top-20 left-4 md:left-8 z-10">
                <Link
                    href="/projects"
                    class="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 font-semibold px-4 py-2.5 rounded-xl transition-all shadow-lg backdrop-blur-sm"
                >
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Volver a proyectos
                </Link>
            </div>

            <!-- Title and Metadata -->
            <div class="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <div class="max-w-5xl mx-auto text-white">
                    <div class="flex items-center gap-3 mb-4 text-sm text-white/80">
            <span
                class="inline-flex items-center gap-2 bg-green-400/80 text-gray-900 font-semibold px-3 py-1 rounded-full"
            >
              {{ project.category }}
            </span>
                        <span>{{ project.location }}</span>
                        <span>• {{ project.year }}</span>
                    </div>

                    <h1
                        class="text-3xl md:text-5xl font-extrabold font-['Poppins'] leading-tight mb-3"
                    >
                        {{ project.title }}
                    </h1>

                    <p
                        class="text-lg md:text-xl text-white/90 font-light leading-relaxed"
                    >
                        {{ project.subtitle || project.description }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-6xl mx-auto px-4 py-16 space-y-16">
            <!-- Description with side image -->
            <div
                class="flex flex-col md:flex-row gap-8 items-start"
            >
                <!-- Secondary image -->
                <div v-if="project.images[1]" class="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        :src="project.images[1]"
                        alt="Imagen del proyecto"
                        class="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                </div>

                <!-- Rich description -->
                <div
                    class="prose prose-lg max-w-none prose-headings:text-green-700 prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline text-gray-700 leading-relaxed md:w-1/2"
                    v-html="project.details"
                ></div>
            </div>

            <!-- Technologies -->
            <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4">
                    Tecnologías empleadas
                </h2>
                <div class="flex flex-wrap gap-2">
          <span
              v-for="tech in project.technologies"
              :key="tech"
              class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
          >
            {{ tech }}
          </span>
                </div>
            </div>

            <!-- Impact -->
            <div class="bg-gray-50 p-8 rounded-2xl shadow-inner border border-gray-100">
                <h2 class="text-xl font-bold text-gray-800 mb-3">Impacto del Proyecto</h2>
                <p class="text-gray-700 leading-relaxed">
                    {{ project.impact }}
                </p>
            </div>
        </div>
    </div>

    <div v-else class="text-center py-32 min-h-screen">
        <h1 class="text-3xl font-bold text-gray-700 mb-4">Proyecto no encontrado</h1>
        <Link href="/projects" class="text-green-600 hover:underline">Volver a proyectos</Link>
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { useProjectsStore } from '@/stores/useProjectsStore';
import { computed } from 'vue';

const props = defineProps({ id: Number });
const store = useProjectsStore();

const project = computed(() =>
    store.projects.find((p) => p.id === props.id)
);
</script>
