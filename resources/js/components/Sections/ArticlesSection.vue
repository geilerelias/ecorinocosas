<template>
    <section id="blog" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-orinoco-darker mb-4">
                    Artículos y Noticias
                </h2>
                <p class="text-xl text-orinoco-gray">
                    Mantente informado sobre el sector energético y de telecomunicaciones
                </p>
            </div>

            <div v-if="blogStore.loading" class="text-center text-gray-500">
                Cargando artículos...
            </div>

            <div v-else class="grid md:grid-cols-3 gap-8">
                <article
                    v-for="article in articles"
                    :key="article.id"
                    class="group"
                >
                    <img
                        :src="article.image"
                        :alt="article.title"
                        class="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition"
                    />
                    <span class="text-orinoco-primary text-sm font-semibold">
                        {{ article.category }}
                    </span>
                    <h3
                        class="text-xl font-semibold mt-2 mb-3 text-orinoco-darker group-hover:text-orinoco-primary transition"
                    >
                        {{ article.title }}
                    </h3>
                    <p class="text-gray-600 mb-4">
                        {{ article.excerpt }}
                    </p>
                    <div class="flex items-center text-sm text-gray-500">
                        <i class="far fa-calendar mr-2"></i>
                        <span>{{ new Date(article.date).toLocaleDateString() }}</span>
                    </div>
                </article>
            </div>

            <div class="text-center mt-12">
                <Link
                    href="/blog"
                    class="border-2 border-orinoco-primary text-orinoco-primary px-8 py-3 rounded-full font-semibold hover:bg-orinoco-primary hover:text-white transition"
                >
                    Ver Todas las Noticias
                </Link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { Link } from '@inertiajs/vue3'
import { useBlogStore } from '@/stores/useBlogStore'
import type { Article } from '@/Types/global'

const blogStore = useBlogStore()

// Computed reactivo al getter del store
const articles = computed<Article[]>(() => blogStore.randomArticles)

onMounted(async () => {
    await blogStore.fetchArticles()
})
</script>
