<template>
  <GuestLayout>
    <article v-if="article" class="bg-white min-h-screen">
      <!-- Hero section with image -->
      <div class="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        ></div>

        <!-- Back button -->
        <div class="absolute top-20 left-4 md:left-8 z-10">
          <Link
            href="/blog"
            class="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 font-semibold px-4 py-2.5 rounded-xl transition-all shadow-lg backdrop-blur-sm"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver al blog
          </Link>
        </div>

        <!-- Article metadata overlay -->
        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div class="max-w-4xl mx-auto">
            <div class="flex items-center gap-3 mb-4">
              <span
                class="inline-flex items-center gap-2 bg-[#A3E635] text-gray-900 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider"
              >
                {{ getCategoryIcon(article.category) }} {{ article.category }}
              </span>
              <span class="text-white/90 text-sm font-medium">
                {{ formatDate(article.date) }}
              </span>
              <span class="text-white/90 text-sm font-medium flex items-center gap-1">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ readingTime }} min de lectura
              </span>
            </div>

            <h1
              class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white font-['Poppins'] leading-tight mb-4"
            >
              {{ article.title }}
            </h1>

            <p class="text-lg md:text-xl text-white/90 leading-relaxed">
              {{ article.excerpt }}
            </p>
          </div>
        </div>
      </div>

      <!-- Article content -->
      <div class="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <!-- Share buttons -->
        <div class="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Compartir:
          </div>
          <div class="flex gap-3">
            <button
              @click="shareOnTwitter"
              class="p-2.5 bg-gray-100 hover:bg-[#1DA1F2] hover:text-white rounded-lg transition-all"
              title="Compartir en Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </button>
            <button
              @click="shareOnFacebook"
              class="p-2.5 bg-gray-100 hover:bg-[#1877F2] hover:text-white rounded-lg transition-all"
              title="Compartir en Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </button>
            <button
              @click="shareOnLinkedIn"
              class="p-2.5 bg-gray-100 hover:bg-[#0A66C2] hover:text-white rounded-lg transition-all"
              title="Compartir en LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </button>
            <button
              @click="shareOnWhatsApp"
              class="p-2.5 bg-gray-100 hover:bg-[#25D366] hover:text-white rounded-lg transition-all"
              title="Compartir en WhatsApp"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Article body with rich typography -->
        <div
          class="prose prose-lg max-w-none prose-headings:font-['Poppins'] prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#2F9E44] prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#2F9E44] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-blockquote:border-l-4 prose-blockquote:border-[#2F9E44] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:bg-emerald-50 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-li:text-gray-700 prose-li:mb-2 prose-img:rounded-xl prose-img:shadow-lg"
          v-html="article.content"
        ></div>

        <!-- Tags section -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex flex-wrap gap-2">
            <span class="text-sm font-semibold text-gray-500 mr-2">Etiquetas:</span>
            <span
              v-for="tag in tags"
              :key="tag"
              class="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full transition-colors cursor-pointer"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Related articles -->
      <div v-if="relatedArticles.length" class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center gap-4 mb-10">
            <div
              class="h-1 w-12 bg-gradient-to-r from-[#2F9E44] to-[#A3E635] rounded-full"
            ></div>
            <h2 class="text-3xl font-bold text-gray-900 font-['Poppins']">
              Artículos Relacionados
            </h2>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              v-for="related in relatedArticles"
              :key="related.id"
              :href="`/blog/${related.slug}`"
              class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col transform hover:-translate-y-2"
            >
              <div class="relative overflow-hidden h-48">
                <img
                  :src="related.image"
                  :alt="related.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div class="p-6 flex-1 flex flex-col">
                <span
                  class="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200 mb-3 self-start"
                >
                  {{ getCategoryIcon(related.category) }} {{ related.category }}
                </span>

                <h3
                  class="text-lg font-bold text-gray-900 mb-2 line-clamp-2 font-['Poppins'] leading-tight group-hover:text-[#2F9E44] transition-colors"
                >
                  {{ related.title }}
                </h3>

                <p class="text-gray-600 text-sm line-clamp-2 leading-relaxed flex-1">
                  {{ related.excerpt }}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>

    <div v-else class="text-center py-32 min-h-screen">
      <h1 class="text-3xl font-bold text-gray-700 mb-4">Artículo no encontrado</h1>
      <Link href="/blog" class="text-[#2F9E44] hover:underline">Volver al blog</Link>
    </div>
  </GuestLayout>
</template>

<script setup lang="ts">
import { Link, usePage } from "@inertiajs/vue3";
import GuestLayout from "@/layouts/GuestLayout.vue";
import { computed, onMounted, ref } from "vue";
import type { Article } from '@/stores/useBlogStore'
import { useBlogStore } from "@/stores/useBlogStore";


const blogStore = useBlogStore();

// 1️⃣ Obtener el slug actual desde Inertia (Laravel solo entrega la URL, no datos)
const page = usePage();
console.log(page.url);
const currentSlug = computed(() => page.url.split("/").pop() || "");

// 2️⃣ Buscar el artículo en el store basado en el slug
const article = ref<Article | undefined>(undefined);
const found = ref(null);
// Esperar a que los artículos estén cargados
onMounted(async () => {
  await blogStore.fetchArticles(); // 👈 Asegura que haya artículos
  // No asignamos aquí a 'article' porque se define como computed más abajo;
  // solo comprobamos si existe el artículo y mostramos una advertencia si no.
  article.value = blogStore.articles.find((a) => {
    return a.slug === currentSlug.value;
  });

  if (article.value) {
    console.log('✅ Artículo encontrado:', article.value)
  } else {
    console.warn('❌ Artículo NO encontrado para el slug:', currentSlug.value)
  }
});

// 3️⃣ Manejar si no se encuentra el artículo
if (!found.value) {
  console.warn("Artículo no encontrado en el store para el slug:", currentSlug.value);
}

// 4️⃣ Calcular tiempo de lectura, etiquetas y artículos relacionados
const readingTime = computed(() => {
  if (!article.value?.content) return 0;
  const wordsPerMinute = 200;
  const wordCount = article.value.content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
});

const tags = computed(() => {
  const categoryTags: Record<string, string[]> = {
    Nacional: ["Colombia", "EnergíaRenovable", "Sostenibilidad"],
    Internacional: ["Global", "EnergíaLimpia", "Innovación"],
    Empresa: ["ECOrinoco", "Proyectos", "Sostenibilidad"],
    Tecnología: ["Tech", "Innovación", "IA"],
    Innovación: ["Futuro", "Tecnología", "Desarrollo"],
    Sostenibilidad: ["MedioAmbiente", "Verde", "Futuro"],
  };
  return categoryTags[article.value?.category || ""] || ["Energía", "Renovable"];
});

const relatedArticles = computed(() => {
  if (!article.value) return [];
  return blogStore.articles
    .filter((a) => a.category === article.value?.category && a.id !== article.value?.id)
    .slice(0, 3);
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    Nacional: "🇨🇴",
    Internacional: "🌍",
    Empresa: "🏢",
    Tecnología: "⚡",
    Innovación: "💡",
    Sostenibilidad: "🌱",
  };
  return icons[category] || "📰";
};

// Funciones de compartir
const shareOnTwitter = () => {
  if (!article.value) return;
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(article.value.title);
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
};

const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
};

const shareOnLinkedIn = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
};

const shareOnWhatsApp = () => {
  if (!article.value) return;
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(article.value.title);
  window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
