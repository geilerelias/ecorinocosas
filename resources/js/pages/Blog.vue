<template>
    <GuestLayout>
        <Hero
            title="Aprende con Nosotros"
            description="Descubre artículos, noticias y consejos sobre energía, innovación y sostenibilidad."
            icon="BookOpen"
            :backgroundImage="BlogBanner"
            :buttons="[
                {
                    label: 'Últimas Publicaciones',
                    section: '#posts',
                    primary: true,
                },
                { label: 'Suscríbete', href: '/contacto' },
            ]"
        />
        <section class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <!-- Enhanced hero section with animated gradient and modern typography -->
            <div
                class="relative overflow-hidden bg-gradient-to-br from-[#2F9E44] via-[#2F9E44] to-[#238b3a] px-6 py-24 text-center text-white"
            >
                <div class="absolute inset-0 opacity-10">
                    <div
                        class="absolute top-0 left-0 h-96 w-96 animate-pulse rounded-full bg-[#A3E635] blur-3xl"
                    ></div>
                    <div
                        class="absolute right-0 bottom-0 h-96 w-96 animate-pulse rounded-full bg-[#A3E635] blur-3xl delay-1000"
                    ></div>
                </div>
                <div class="relative z-10 mx-auto max-w-4xl">
                    <h1
                        class="mb-6 font-['Poppins'] text-5xl leading-tight font-extrabold tracking-tight md:text-6xl"
                    >
                        Centro de Noticias
                        <span class="text-[#A3E635]">E.C Orinoco</span>
                    </h1>
                    <p
                        class="text-xl leading-relaxed font-light text-emerald-50 md:text-2xl"
                    >
                        Innovación, sostenibilidad y liderazgo en energías
                        renovables
                    </p>
                </div>
            </div>

            <!-- Enhanced search and filter section with modern card design -->
            <div class="relative z-20 mx-auto -mt-8 max-w-7xl px-4">
                <div
                    class="rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl md:p-8"
                >
                    <div
                        class="flex flex-col gap-4 lg:flex-row lg:items-center"
                    >
                        <div class="relative flex-1">
                            <svg
                                class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                v-model="search"
                                type="text"
                                placeholder="Buscar por título, contenido o categoría..."
                                class="w-full rounded-xl border-2 border-gray-200 py-3.5 pr-4 pl-12 text-gray-700 placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-[#2F9E44] focus:outline-none"
                            />
                        </div>

                        <div class="flex gap-3">
                            <select
                                v-model="selectedCategory"
                                class="flex-1 cursor-pointer rounded-xl border-2 border-gray-200 bg-white px-4 py-3.5 font-medium text-gray-700 transition-all focus:border-transparent focus:ring-2 focus:ring-[#2F9E44] focus:outline-none lg:w-64"
                            >
                                <option value="Todas">
                                    📚 Todas las categorías
                                </option>
                                <option
                                    v-for="cat in categories"
                                    :key="cat"
                                    :value="cat"
                                >
                                    {{ getCategoryIcon(cat) }} {{ cat }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- Added results counter -->
                    <div class="mt-4 text-sm font-medium text-gray-500">
                        {{ filteredArticles.length }} artículos encontrados
                    </div>
                </div>
            </div>

            <div class="mx-auto max-w-7xl px-4 py-12">
                <!-- Enhanced featured article with overlay gradient and better typography -->
                <div
                    v-if="featuredArticle"
                    class="group relative mb-20 transform cursor-pointer overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                    <div class="relative h-[500px] md:h-[600px]">
                        <img
                            :src="featuredArticle.image"
                            :alt="featuredArticle.title"
                            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
                        ></div>
                    </div>

                    <div class="absolute right-0 bottom-0 left-0 p-8 md:p-12">
                        <div class="max-w-4xl">
                            <div class="mb-4 flex items-center gap-3">
                                <span
                                    class="inline-flex items-center gap-2 rounded-full bg-[#A3E635] px-4 py-2 text-sm font-bold tracking-wider text-gray-900 uppercase"
                                >
                                    {{
                                        getCategoryIcon(
                                            featuredArticle.category,
                                        )
                                    }}
                                    {{ featuredArticle.category }}
                                </span>
                                <span
                                    class="text-sm font-medium text-emerald-200"
                                >
                                    {{ formatDate(featuredArticle.date) }}
                                </span>
                            </div>

                            <h2
                                class="mb-5 font-['Poppins'] text-3xl leading-tight font-bold text-white md:text-5xl"
                            >
                                {{ featuredArticle.title }}
                            </h2>

                            <p
                                class="mb-6 line-clamp-2 text-lg leading-relaxed text-emerald-50 md:text-xl"
                            >
                                {{ featuredArticle.excerpt }}
                            </p>

                            <Link
                                :href="`/blog/${featuredArticle.slug}`"
                                class="inline-flex transform items-center gap-2 rounded-xl bg-[#2F9E44] px-8 py-4 font-bold text-white shadow-lg transition-all hover:translate-x-1 hover:bg-[#238b3a] hover:shadow-xl"
                            >
                                Leer artículo completo
                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <!-- Enhanced section title with decorative element -->
                <div class="mb-10 flex items-center gap-4">
                    <div
                        class="h-1 w-12 rounded-full bg-gradient-to-r from-[#2F9E44] to-[#A3E635]"
                    ></div>
                    <h3
                        class="font-['Poppins'] text-3xl font-bold text-gray-900 md:text-4xl"
                    >
                        Últimas Publicaciones
                    </h3>
                </div>

                <!-- Loading state with modern spinner -->
                <div
                    v-if="blogStore.loading"
                    class="flex flex-col items-center justify-center py-32"
                >
                    <div class="relative">
                        <div
                            class="h-20 w-20 animate-spin rounded-full border-4 border-gray-200"
                        ></div>
                        <div
                            class="absolute top-0 h-20 w-20 animate-spin rounded-full border-t-4 border-[#2F9E44]"
                        ></div>
                    </div>
                    <p class="mt-6 font-medium text-gray-500">
                        Cargando artículos...
                    </p>
                </div>

                <!-- Enhanced grid with better cards, hover effects, and modern design -->
                <div
                    v-else-if="filteredArticles.length"
                    class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <article
                        v-for="article in filteredArticles"
                        :key="article.id"
                        class="group flex transform flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <div class="relative h-56 overflow-hidden">
                            <img
                                :src="article.image"
                                :alt="article.title"
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            ></div>
                        </div>

                        <div class="flex flex-1 flex-col p-6">
                            <div class="mb-3 flex items-center justify-between">
                                <span
                                    class="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-800"
                                >
                                    {{ getCategoryIcon(article.category) }}
                                    {{ article.category }}
                                </span>
                                <span class="text-xs font-medium text-gray-400">
                                    {{ formatDate(article.date) }}
                                </span>
                            </div>

                            <h2
                                class="mb-3 line-clamp-2 font-['Poppins'] text-xl leading-tight font-bold text-gray-900 transition-colors group-hover:text-[#2F9E44]"
                            >
                                {{ article.title }}
                            </h2>

                            <p
                                class="mb-5 line-clamp-3 flex-1 leading-relaxed text-gray-600"
                            >
                                {{ article.excerpt }}
                            </p>

                            <Link
                                :href="`/blog/${article.slug}`"
                                class="group/link inline-flex items-center gap-2 font-bold text-[#2F9E44] transition-all hover:gap-3"
                            >
                                Leer más
                                <svg
                                    class="h-4 w-4 transform transition-transform group-hover/link:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </article>
                </div>

                <!-- Enhanced empty state with illustration -->
                <div v-else class="py-32 text-center">
                    <div class="mx-auto max-w-md">
                        <svg
                            class="mx-auto mb-6 h-32 w-32 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3
                            class="mb-3 font-['Poppins'] text-2xl font-bold text-gray-700"
                        >
                            No se encontraron artículos
                        </h3>
                        <p class="mb-6 text-gray-500">
                            Intenta ajustar los filtros o la búsqueda para
                            encontrar más contenido
                        </p>
                        <button
                            @click="resetFilters"
                            class="inline-flex items-center gap-2 rounded-xl bg-[#2F9E44] px-6 py-3 font-semibold text-white transition-all hover:bg-[#238b3a]"
                        >
                            <svg
                                class="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                            Restablecer filtros
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </GuestLayout>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { useBlogStore } from '@/stores/useBlogStore';
import { Link } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue';
import BlogBanner from '@/../images/hero/blog-banner.jpg'

const blogStore = useBlogStore();
const search = ref('');
const selectedCategory = ref('Todas');

const categories = computed(() => blogStore.categories);

const filteredArticles = computed(
    () =>
        blogStore.articles
            .filter((article) => {
                const matchesCategory =
                    selectedCategory.value === 'Todas' ||
                    article.category === selectedCategory.value;

                const matchesSearch =
                    article.title
                        .toLowerCase()
                        .includes(search.value.toLowerCase()) ||
                    article.excerpt
                        .toLowerCase()
                        .includes(search.value.toLowerCase());

                return matchesCategory && matchesSearch;
            })
            .slice(1), // excluye la destacada
);

const featuredArticle = computed(() => blogStore.articles[0]);

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
        Nacional: '🇨🇴',
        Internacional: '🌍',
        Empresa: '🏢',
        Tecnología: '⚡',
        Innovación: '💡',
        Sostenibilidad: '🌱',
    };
    return icons[category] || '📰';
};

const resetFilters = () => {
    search.value = '';
    selectedCategory.value = 'Todas';
};

onMounted(() => {
    blogStore.fetchArticles();
});
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Added smooth animations */
@keyframes pulse {
    0%,
    100% {
        opacity: 0.1;
    }
    50% {
        opacity: 0.2;
    }
}

.animate-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
    animation-delay: 1s;
}
</style>
