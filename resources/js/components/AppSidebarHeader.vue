<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItemType } from '@/types';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { usePage } from '@inertiajs/vue3';
import {
    Bell,
    Search,
    Sun,
    Moon,
    Settings,
    Shield,
    LogOut,
} from 'lucide-vue-next';
import { useInitials } from '@/composables/useInitials';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserMenuContent from '@/components/UserMenuContent.vue';

withDefaults(
    defineProps<{
        breadcrumbs?: BreadcrumbItemType[];
    }>(),
    { breadcrumbs: () => [] },
);

// --- Usuario autenticado ---
const page = usePage();
const user = computed(() => page.props.auth.user);
const { getInitials } = useInitials();
const showAvatar = computed(
    () => user.value?.avatar && user.value.avatar !== '',
);

// --- Estados de UI ---
const showUserDialog = ref(false);
const showNotifications = ref(false);
const showSearch = ref(false);
const darkMode = ref(false);
const search = ref('');

// --- Funciones ---
const toggleTheme = () => {
    darkMode.value = !darkMode.value;
    document.documentElement.classList.toggle('dark', darkMode.value);
};

// Cerrar modales al hacer clic fuera
const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu') && !target.closest('.user-avatar')) {
        showUserDialog.value = false;
    }
    if (
        !target.closest('.notifications-menu') &&
        !target.closest('.notif-icon')
    ) {
        showNotifications.value = false;
    }
};
onMounted(() => document.addEventListener('click', handleClickOutside));
onBeforeUnmount(() =>
    document.removeEventListener('click', handleClickOutside),
);
</script>

<template>
    <header
        class="flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-6 backdrop-blur-md transition-all duration-300 dark:border-gray-800 dark:bg-gray-900/80"
    >
        <!-- Sidebar + Breadcrumbs -->
        <div class="flex items-center gap-4">
            <SidebarTrigger
                class="rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            />
            <template v-if="breadcrumbs.length">
                <Breadcrumbs :breadcrumbs="breadcrumbs" />
            </template>
        </div>

        <!-- Iconos del lado derecho -->
        <div class="ml-auto flex items-center gap-4">
            <!-- Búsqueda -->
            <div class="relative">
                <button
                    class="rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                    @click="showSearch = !showSearch"
                >
                    <Search class="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>

                <transition name="fade">
                    <div
                        v-if="showSearch"
                        class="absolute right-0 mt-2 flex w-64 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-lg dark:border-gray-700 dark:bg-gray-900"
                    >
                        <Search class="h-4 w-4 text-gray-400" />
                        <input
                            v-model="search"
                            type="text"
                            placeholder="Buscar..."
                            class="w-full bg-transparent text-sm text-gray-700 focus:outline-none dark:text-gray-200"
                        />
                    </div>
                </transition>
            </div>

            <!-- Notificaciones -->
            <div class="relative">
                <button
                    class="notif-icon relative rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                    @click.stop="showNotifications = !showNotifications"
                >
                    <Bell class="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span
                        class="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500"
                    ></span>
                </button>

                <transition name="slide-fade">
                    <div
                        v-if="showNotifications"
                        class="notifications-menu absolute right-0 z-50 mt-3 w-80 rounded-xl border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-900"
                    >
                        <h3
                            class="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
                        >
                            Notificaciones
                        </h3>
                        <ul class="space-y-2 text-sm">
                            <li
                                class="cursor-pointer rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                Sistema solar generó 120kWh hoy.
                            </li>
                            <li
                                class="cursor-pointer rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                Nuevo reporte de consumo disponible.
                            </li>
                            <li
                                class="cursor-pointer rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                Actualización programada para esta noche.
                            </li>
                        </ul>
                        <div
                            class="mt-3 cursor-pointer text-center text-xs text-gray-500 hover:underline dark:text-gray-400"
                        >
                            Ver todas las notificaciones
                        </div>
                    </div>
                </transition>
            </div>

            <!-- Cambio de tema -->
            <button
                @click="toggleTheme"
                class="rounded-md p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                :title="darkMode ? 'Modo claro' : 'Modo oscuro'"
            >
                <component
                    :is="darkMode ? Sun : Moon"
                    class="h-5 w-5 text-gray-600 transition-transform dark:text-gray-300"
                />
            </button>

            <DropdownMenu>
                <DropdownMenuTrigger :as-child="true">
                    <Button
                        variant="ghost"
                        size="icon"
                        class="relative size-10 w-auto rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
                    >
                        <Avatar class="size-8 overflow-hidden rounded-full">
                            <AvatarImage
                                v-if="user.avatar"
                                :src="user.avatar"
                                :alt="user.name"
                            />
                            <AvatarFallback
                                class="rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white"
                            >
                                {{ getInitials(user?.name) }}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" class="w-56">
                    <UserMenuContent :user="user" />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active {
    transition: all 0.25s ease-out;
}
.slide-fade-leave-active {
    transition: all 0.15s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
