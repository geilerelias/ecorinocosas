<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Link } from '@inertiajs/vue3';

import { useProjectsStore } from '@/stores/useProjectsStore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { computed, onMounted, ref } from 'vue';
import Hero from '@/components/Hero.vue';
import  ProyectsBanner from "@/../images/hero/projects-banner.jpg"
// Store de proyectos
const store = useProjectsStore();

// Estado local
const selectedCategory = ref<string>('Todos');
const searchTerm = ref<string>('');


// Inicializa AOS (animaciones de scroll)
onMounted(() => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });
});

// Categorías únicas (extraídas del store)
const categories = computed(() => [
    'Todos',
    ...new Set(store.projects.map((p) => p.category)),
]);

// Filtrado dinámico (por categoría + búsqueda)
const filteredProjects = computed(() => {
    return store.projects.filter((p) => {
        const matchesCategory =
            selectedCategory.value === 'Todos' ||
            p.category === selectedCategory.value;
        const matchesSearch =
            p.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            p.description
                .toLowerCase()
                .includes(searchTerm.value.toLowerCase());
        return matchesCategory && matchesSearch;
    });
});

// Acción (por si deseas aplicar un botón "Buscar" manual)
function filtrarProyectos() {
    // No es necesario si el filtrado es reactivo,
    // pero lo puedes usar si prefieres buscar al presionar el botón.
    console.log('Filtrando proyectos:', {
        categoria: selectedCategory.value,
        termino: searchTerm.value,
    });
}
</script>

<template>
    <GuestLayout>
        <div class="min-h-screen bg-gray-50">
            <!-- Hero -->
            <Hero
                title="Proyectos que Transforman"
                description="Cada instalación es una oportunidad para innovar, crecer y cuidar nuestro planeta."
                icon="Building2"
                :backgroundImage="ProyectsBanner"
                :buttons="[
                    {
                        label: 'Portafolio',
                        section: '#portfolio',
                        primary: true,
                    },
                    { label: 'Blog', href: '/blog' },
                ]"
            />
            <!-- Filtro tipo buscador -->
            <div class="border-t border-gray-200 bg-gray-50 py-10">
                <div
                    class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl bg-white px-6 py-6 shadow-md md:flex-row"
                    data-aos="fade-up"
                >
                    <!-- Campo de búsqueda -->
                    <div class="w-full flex-1">
                        <label
                            for="search"
                            class="mb-1 block text-sm font-semibold text-gray-700"
                        >
                            Buscar proyecto
                        </label>
                        <input
                            id="search"
                            v-model="searchTerm"
                            type="text"
                            placeholder="Ejemplo: energía solar, iluminación, instalación..."
                            class="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        />
                    </div>

                    <!-- Selector de categoría -->
                    <div class="w-full flex-1">
                        <label
                            for="category"
                            class="mb-1 block text-sm font-semibold text-gray-700"
                        >
                            Categoría
                        </label>
                        <select
                            id="category"
                            v-model="selectedCategory"
                            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        >
                            <option value="">Todas las categorías</option>
                            <option
                                v-for="category in categories"
                                :key="category"
                                :value="category"
                            >
                                {{ category }}
                            </option>
                        </select>
                    </div>

                    <!-- Botón de acción -->
                    <div class="pt-2 md:pt-0">
                        <button
                            @click="filtrarProyectos"
                            class="w-full rounded-lg bg-green-700 px-6 py-2.5 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-800 md:w-auto"
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            </div>

            <!-- Sección de proyectos -->
            <section id="portfolio" class="py-20">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        class="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
                        data-aos="fade-up"
                    >
                        <div
                            v-for="project in filteredProjects"
                            :key="project.id"
                            class="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                            data-aos="zoom-in"
                        >
                            <div class="relative overflow-hidden">
                                <img
                                    :src="project.images[0]"
                                    :alt="project.title"
                                    class="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                ></div>
                                <div
                                    class="absolute bottom-3 left-4 rounded-full bg-orinoco-primary/80 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md"
                                >
                                    {{ project.category }}
                                </div>
                            </div>

                            <div class="p-6">
                                <h3
                                    class="mb-2 text-xl font-bold text-orinoco-dark"
                                >
                                    {{ project.title }}
                                </h3>
                                <p
                                    class="mb-4 line-clamp-3 text-sm text-gray-600"
                                >
                                    {{ project.description }}
                                </p>

                                <div class="mb-3 text-sm text-gray-500">
                                    <font-awesome-icon
                                        :icon="['fas', 'map-marker-alt']"
                                        class="mr-2 text-orinoco-primary"
                                    />
                                    {{ project.location }}
                                </div>

                                <div class="flex items-center justify-between">
                                    <span
                                        class="text-xs font-semibold tracking-widest text-gray-400 uppercase"
                                    >
                                        {{ project.year }}
                                    </span>
                                    <a
                                        href="#"
                                        class="text-sm font-semibold text-orinoco-primary hover:underline"
                                    >
                                        Ver Detalles →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mensaje si no hay proyectos -->
                    <div
                        v-if="filteredProjects.length === 0"
                        class="mt-20 text-center text-gray-500"
                        data-aos="fade-up"
                    >
                        <p>
                            No hay proyectos disponibles en esta categoría por
                            ahora.
                        </p>
                    </div>
                </div>
            </section>


            <!-- 🌱 SECCIÓN DE CONTACTO / CONSULTA DE PROYECTOS -->
            <section class="bg-orinoco-dark py-24 text-white">
                <div
                    class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8"
                >
                    <!-- 🟢 Columna Izquierda -->
                    <div>
                        <h2 class="mb-6 flex items-center gap-2 text-3xl font-bold">
                            <span class="h-3 w-3 rounded-full bg-lime-500"></span>
                            Podemos ayudar
                        </h2>
                        <p class="mb-10 text-lg leading-relaxed text-gray-300">
                            Hablemos sobre cómo podemos construir tus sueños y
                            transformar tus ideas en realidad con
                            <span class="font-semibold text-white"
                            >E.C Orinoco S.A.S</span
                            >.
                        </p>

                        <div class="space-y-6 text-gray-300">
                            <div>
                                <h4 class="mb-1 font-semibold text-white">
                                    Teléfono
                                </h4>
                                <p class="flex items-center gap-2">
                                    <i class="fa-solid fa-phone text-lime-400"></i>
                                    <i
                                        class="fa-brands fa-whatsapp text-lime-400"
                                    ></i>
                                    +57 312 5039694
                                </p>
                            </div>

                            <div>
                                <h4 class="mb-1 font-semibold text-white">Email</h4>
                                <p class="flex items-center gap-2">
                                    <i
                                        class="fa-solid fa-envelope text-lime-400"
                                    ></i>
                                    contacto@ecorinocosas.com
                                </p>
                            </div>

                            <div>
                                <h4 class="mb-1 font-semibold text-white">
                                    Localización
                                </h4>
                                <p class="flex items-center gap-2">
                                    <i
                                        class="fa-solid fa-location-dot text-lime-400"
                                    ></i>
                                    Villavicencio Meta, Colombia
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- 📋 Columna Derecha: Formulario -->
                    <div class="rounded-2xl bg-white p-10 text-gray-800 shadow-xl">
                        <h3 class="mb-6 text-2xl font-semibold">
                            Iniciar el proyecto
                        </h3>

                        <form class="space-y-6">
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Nombres"
                                    class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Apellidos"
                                    class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                                />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                                />
                                <input
                                    type="text"
                                    placeholder="País o región"
                                    class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                                />
                            </div>

                            <textarea
                                placeholder="Cuéntanos sobre el proyecto"
                                class="h-32 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                            ></textarea>

                            <div
                                class="flex items-center gap-2 text-sm text-gray-600"
                            >
                                <input
                                    type="checkbox"
                                    id="terms"
                                    class="rounded border-gray-400 text-lime-500 focus:ring-lime-500"
                                />
                                <label for="terms">
                                    Acepto los
                                    <a
                                        href="#"
                                        class="font-medium text-lime-600 hover:underline"
                                    >Términos y Condiciones</a
                                    >.
                                </label>
                            </div>

                            <button
                                type="submit"
                                class="w-full rounded-lg bg-lime-600 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-lime-700"
                            >
                                Enviar Consulta
                            </button>
                        </form>
                    </div>
                </div>
            </section>



        </div>
    </GuestLayout>
</template>

<style scoped>
.parallax-hero {
    background-image: url('https://picsum.photos/1920/1080?random=1');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
