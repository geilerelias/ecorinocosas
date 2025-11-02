<script setup lang="ts">
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";
import { useNavigationStore } from "@/stores/usePublicNavigationStore";

const navigation = useNavigationStore();
const currentYear = new Date().getFullYear();

// Puedes crear un arreglo de redes sociales (opcionalmente configurable en el store)
const socials = [
  { icon: ['fab', 'facebook-f'], href: "https://facebook.com", name: "Facebook" },
  { icon: ['fab', 'linkedin-in'], href: "https://linkedin.com", name: "LinkedIn" },
  { icon: ['fab', 'instagram'], href: "https://instagram.com", name: "Instagram" },
];
</script>

<template>
  <footer
    class="relative overflow-hidden bg-gradient-to-br from-[#073201] via-[#024031] to-[#012208] text-white pt-16 pb-10"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

      <!-- Logo + Descripción -->
      <div>
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-[#2F9E44] rounded-lg flex items-center justify-center shadow-lg">
            <font-awesome-icon :icon="['fas', 'bolt']" class="text-white text-2xl" />
          </div>
          <div class="ml-3">
            <h2 class="text-xl font-bold tracking-wide">E.C Orinoco</h2>
            <p class="text-sm text-gray-200">S.A.S</p>
          </div>
        </div>
        <p class="text-sm text-gray-300 leading-relaxed max-w-xs">
          Ingeniería sostenible y soluciones energéticas para un futuro más limpio, eficiente e inteligente.
        </p>
      </div>

      <!-- Navegación extraída del store -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-[#A3E635]">Navegación</h3>
        <ul class="space-y-2">
          <li v-for="link in navigation.links" :key="link.href">
            <Link
              :href="link.href"
              class="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {{ link.title }}
            </Link>
          </li>
        </ul>
      </div>

      <!-- Contacto -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-[#A3E635]">Contacto</h3>
        <ul class="space-y-2 text-gray-300 text-sm">
          <li class="flex items-center space-x-2">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
            <span>Villavicencio Meta, Colombia</span>
          </li>
          <li class="flex items-center space-x-2">
            <font-awesome-icon :icon="['fas', 'phone']" />
            <span>+57 312 5039694</span>
          </li>
          <li class="flex items-center space-x-2">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span>contacto@ecorinocosas.com</span>
          </li>
        </ul>
      </div>

      <!-- Redes sociales -->
      <div class="md:col-span-3 lg:col-span-1 flex md:justify-start lg:justify-center">
        <div>
          <h3 class="text-lg font-semibold mb-4 text-[#A3E635]">Síguenos</h3>
          <div class="flex space-x-4">
            <a
              v-for="s in socials"
              :key="s.name"
              :href="s.href"
              target="_blank"
              rel="noopener"
              class="w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-full transition-transform transform hover:-translate-y-1 hover:scale-110"
              :aria-label="s.name"
            >
              <font-awesome-icon :icon="s.icon" class="text-[#A3E635] text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Línea inferior -->
    <div class="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
      © {{ currentYear }} E.C Orinoco S.A.S. — Ingeniería y Energía Sostenible.<br />
      <span class="text-xs text-gray-500">Desarrollado con tecnología limpia y eficiencia digital.</span>
    </div>


  </footer>
</template>
