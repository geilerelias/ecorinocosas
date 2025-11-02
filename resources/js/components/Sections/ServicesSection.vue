<template>
    <section id="categorias-servicios" class="py-20 bg-orinoco-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-orinoco-darker mb-4">Áreas de Servicio</h2>
                <p class="text-lg text-orinoco-gray max-w-2xl mx-auto">
                    Descubre nuestras principales líneas de trabajo y especialización.
                </p>
            </div>

            <!-- Categorías -->
            <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(group, index) in store.services"
                    :key="index"
                    class="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
                >
                    <!-- Collage de imágenes -->
                    <div class="grid grid-cols-3 grid-rows-2 gap-1 h-48 sm:h-56 md:h-64 overflow-hidden">
                        <img
                            v-for="(photo, pIndex) in collageImages(group)"
                            :key="pIndex"
                            :src="photo"
                            class="object-cover w-full h-full"
                            :class="{
                'col-span-2 row-span-2': pIndex === 0, // imagen principal más grande
              }"
                            alt="imagen de servicio"
                        />
                    </div>

                    <!-- Capa oscura -->
                    <div class="absolute inset-0 bg-orinoco-dark/60"></div>

                    <!-- Texto -->
                    <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                        <i :class="['mdi', group.icono, 'text-4xl mb-3 text-lime-300']"></i>
                        <h3 class="text-2xl font-semibold mb-2">{{ group.clasificacion }}</h3>
                        <Link
                            href="/services"
                            class="mt-2 inline-block bg-lime-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-lime-600 transition"
                        >
                            Ver servicios →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'
import { useServicesStore } from '@/Stores/useServicesStore'

const store = useServicesStore()

// Selecciona hasta 5 imágenes por categoría para el collage
const collageImages = (group: any) => {
    const allPhotos = group.servicios.flatMap((s: any) =>
        s.photos?.map((p: any) => p.source)
    )
    // Mezclar y tomar máximo 5
    return [...new Set(allPhotos)].sort(() => 0.5 - Math.random()).slice(0, 5)
}
</script>

<style scoped>
/* Animación sutil al pasar el cursor */
div:hover img {
    transform: scale(1.05);
    transition: transform 0.6s ease;
}
</style>
