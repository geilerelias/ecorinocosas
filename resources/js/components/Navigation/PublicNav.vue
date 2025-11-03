<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { useNavigationStore } from '@/stores/usePublicNavigationStore';
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps({ scrolled: Boolean });
const navigation = useNavigationStore();
const page = usePage();

// Detecta si la ruta actual coincide con el link
const isActive = (href: string) => page.url === href;

// Detecta si estás en la página principal
const isHome = computed(() => page.url === '/');

// Breadcrumb dinámico basado en la URL
const breadcrumb = computed(() => {
    const parts = page.url.split('/').filter(Boolean);
    if (parts.length === 0) return [{ name: 'Inicio', href: '/' }];

    const crumbs = [{ name: 'Inicio', href: '/' }];
    let path = '';

    parts.forEach((part) => {
        path += `/${part}`;
        crumbs.push({
            name: part
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (l) => l.toUpperCase()), // capitaliza
            href: path,
        });
    });

    return crumbs;
});

// Clases base del enlace
const navLinkClass = computed(() => {
    const isScrolledOrNotHome = props.scrolled || !isHome.value;
    return isScrolledOrNotHome
        ? 'relative text-gray-700 hover:text-orinoco-primary px-3 py-2 text-sm font-medium transition'
        : 'relative text-white hover:text-green-200 px-3 py-2 text-sm font-medium transition';
});
</script>

<template>
    <nav
        :class="[
            'fixed top-0 z-50 w-full backdrop-blur-sm transition-all duration-300',
            scrolled || !isHome ? 'bg-white/95 shadow-lg' : 'bg-transparent',
        ]"
    >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <!-- Logo -->
                <AppLogoIcon class="h-15 w-auto" :withLetter="true" :white="!scrolled && isHome" />

                <!-- Desktop Navigation -->
                <div class="hidden items-center space-x-4 md:flex">
                    <template v-for="link in navigation.links" :key="link.href">
                        <Link
                            :href="link.href"
                            :class="[navLinkClass, 'px-2 py-1 text-sm']"
                        >
                            {{ link.title }}

                            <!-- Subrayado triple si está activo -->
                            <div
                                v-if="isActive(link.href)"
                                class="absolute right-0 -bottom-[2px] left-0 flex justify-center gap-[2px]"
                            >
                                <span
                                    class="block h-[2px] w-4 rounded bg-orinoco-primary"
                                ></span>
                                <span
                                    class="block h-[2px] w-4 rounded bg-orinoco-blue"
                                ></span>
                                <span
                                    class="block h-[2px] w-4 rounded bg-orinoco-accent"
                                ></span>
                            </div>
                        </Link>
                    </template>

                    <Link
                        :href="navigation.admin.href"
                        class="flex items-center rounded-md bg-orinoco-primary px-3 py-1.5 text-sm text-white transition hover:bg-orinoco-dark"
                    >
                        <font-awesome-icon
                            :icon="['fas', 'user-shield']"
                            class="mr-1 text-sm"
                        />
                        {{ navigation.admin.title }}
                    </Link>
                </div>

                <!-- Mobile -->
                <div class="flex flex-col items-end space-y-1 md:hidden">
                    <!-- Mobile Menu Button -->
                    <button
                        @click="navigation.toggleDrawer"
                        :class="
                            scrolled || !isHome ? 'text-gray-700' : 'text-white'
                        "
                        class="p-2"
                    >
                        <font-awesome-icon
                            :icon="['fas', 'bars']"
                            class="text-xl"
                        />
                    </button>
                    <!-- Breadcrumb (solo móvil) -->
                    <div
                        v-if="breadcrumb.length > 1"
                        class="mb-1 flex items-center space-x-1 text-[11px] text-gray-300 dark:text-gray-100"
                        :class="
                            scrolled || !isHome
                                ? 'text-orinoco-dark'
                                : 'text-gray-200'
                        "
                    >
                        <template
                            v-for="(crumb, i) in breadcrumb"
                            :key="crumb.href"
                        >
                            <span v-if="i > 0" class="text-xs opacity-70"
                                >›</span
                            >
                            <Link
                                v-if="i < breadcrumb.length - 1"
                                :href="crumb.href"
                                class="transition hover:underline"
                            >
                                {{ crumb.name }}
                            </Link>
                            <span
                                v-else
                                class="font-semibold"
                                :class="
                                    scrolled || !isHome
                                        ? 'text-orinoco-primary'
                                        : 'text-lime-300'
                                "
                            >
                                {{ crumb.name }}
                            </span>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>
