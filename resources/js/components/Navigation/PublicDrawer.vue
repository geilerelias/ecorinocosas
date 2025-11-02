<template>
  <transition name="slide-fade">
    <div v-if="drawerOpen" class="fixed inset-0 z-50 flex">
      <!-- Fondo semitransparente -->
      <div
        class="absolute inset-0 bg-black/40 backdrop-blur-sm"
        @click="closeDrawer"
      ></div>

      <!-- Drawer principal -->
      <div
        class="relative ml-auto w-72 sm:w-80 h-full bg-white overflow-hidden shadow-2xl flex flex-col"
        @click.stop
      >
        <!-- Imagen de encabezado -->
        <div class="relative h-44 w-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/8853500/pexels-photo-8853500.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Energía sostenible"
            class="object-cover w-full h-full"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#011C32]/90 via-[#024031]/70 to-transparent"
          ></div>

          <div class="absolute bottom-3 left-4 text-white">
            <div class="flex items-center space-x-2">
              <div
                class="w-8 h-8 bg-[#2F9E44] rounded-lg flex items-center justify-center shadow-md"
              >
                <font-awesome-icon
                  :icon="['fas', 'bolt']"
                  class="text-white text-sm"
                />
              </div>
              <span class="font-semibold tracking-wide text-lg"
                >E.C Orinoco</span
              >
            </div>
            <p class="text-xs text-gray-200 mt-1">
              Energía & Ingeniería Sostenible
            </p>
          </div>
        </div>

        <!-- Contenido del menú -->
        <nav
          class="flex-1 overflow-y-auto px-5 py-6 bg-gradient-to-b from-white via-[#F9FAFB] to-[#F0FDF4]"
        >
          <h2
            class="text-sm font-semibold text-[#024031] mb-4 uppercase tracking-wide"
          >
            Navegación
          </h2>

          <ul class="space-y-2">
            <li v-for="link in navigation.links" :key="link.href">
              <Link
                :href="link.href"
                @click="closeDrawer"
                :class="[
                  'group flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium transition-all duration-200 relative',
                  isActive(link.href)
                    ? 'text-[#2F9E44] bg-[#2F9E44]/10 border-l-4 border-[#2F9E44]'
                    : 'text-gray-700 hover:bg-[#2F9E44]/10 hover:text-[#2F9E44]'
                ]"
              >
                <span>{{ link.title }}</span>
                <font-awesome-icon
                  :icon="['fas', 'angle-right']"
                  class="text-gray-400 group-hover:text-[#2F9E44] transition-transform duration-200 group-hover:translate-x-1"
                />


              </Link>
            </li>
          </ul>

          <div class="mt-8">
            <Link
              :href="navigation.admin.href"
              @click="closeDrawer"
              class="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-md bg-[#2F9E44] text-white font-medium hover:bg-[#024031] transition-colors duration-200"
            >
              <font-awesome-icon
                :icon="['fas', 'user-shield']"
                class="mr-2 text-sm"
              />
              {{ navigation.admin.title }}
            </Link>
          </div>
        </nav>

        <!-- Pie del drawer -->
        <div
          class="bg-[#011C32] text-gray-200 py-4 px-5 text-xs flex items-center justify-between"
        >
          <span>© {{ currentYear }} E.C Orinoco S.A.S.</span>
          <div class="flex space-x-3">
            <a
              v-for="icon in socials"
              :key="icon.name"
              :href="icon.href"
              target="_blank"
              rel="noopener"
              class="hover:text-[#A3E635] transition"
            >
              <font-awesome-icon :icon="icon.icon" class="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { useNavigationStore } from "@/stores/usePublicNavigationStore";

const navigation = useNavigationStore();
const page = usePage();

const drawerOpen = computed(() => navigation.drawerOpen);
const closeDrawer = () => navigation.closeDrawer();
const currentYear = new Date().getFullYear();

// Detectar enlace activo
const isActive = (href: string) => page.url === href;

const socials = [
  { name: "Facebook", href: "https://facebook.com", icon: ["fab", "facebook-f"] },
  { name: "LinkedIn", href: "https://linkedin.com", icon: ["fab", "linkedin-in"] },
  { name: "Instagram", href: "https://instagram.com", icon: ["fab", "instagram"] },
];
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.35s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
