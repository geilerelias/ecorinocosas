<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { useNavigationStore } from '@/stores/usePublicNavigationStore';
import { Mail, MapPin, Phone } from 'lucide-vue-next';

import { Link } from '@inertiajs/vue3';

const navigation = useNavigationStore();
const currentYear = new Date().getFullYear();

// Puedes crear un arreglo de redes sociales (opcionalmente configurable en el store)
const socials = [
    {
        icon: ['fab', 'facebook-f'],
        href: 'https://facebook.com',
        name: 'Facebook',
    },
    {
        icon: ['fab', 'linkedin-in'],
        href: 'https://linkedin.com',
        name: 'LinkedIn',
    },
    {
        icon: ['fab', 'instagram'],
        href: 'https://instagram.com',
        name: 'Instagram',
    },
];
</script>

<template>
    <footer
        class="relative overflow-hidden bg-gradient-to-br from-[#073201] via-[#024031] to-[#012208] pt-16 pb-10 text-white"
    >
        <div
            class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-8 md:grid-cols-3 lg:grid-cols-4"
        >
            <!-- Logo + Descripción -->
            <div>
                <!-- Logo -->
                <AppLogoIcon
                    class="h-35 w-auto"
                    :withLetter="true"
                    :white="true"
                />
            </div>

            <!-- Navegación extraída del store -->
            <div>
                <h3
                    class="rounded-2xl text-lg font-semibold text-orinoco-light"
                >
                    Navegación
                </h3>
                <div
                    class="mb-4 flex space-x-2 pb-0.5"
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

                <ul class="grid grid-cols-2 gap-x-6 gap-y-2">
                    <li
                        v-for="link in navigation.links"
                        :key="link.href"
                        class="flex items-center space-x-2"
                    >
                        <component
                            :is="link.icon"
                            class="h-5 w-5 text-orinoco-accent transition-transform duration-300 group-hover:scale-110"
                        />
                        <Link
                            :href="link.href"
                            class="text-gray-300 transition-colors duration-200 hover:text-white"
                        >
                            {{ link.title }}
                        </Link>
                    </li>
                </ul>
            </div>

            <!-- Contacto -->
            <div>
                <h3 class="text-lg font-semibold text-orinoco-light">
                    Contacto
                </h3>
                <div
                    class="mb-4 flex space-x-2 pb-0.5"
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
                <ul class="space-y-2 text-sm text-gray-300">
                    <!-- Dirección (abre Google Maps) -->
                    <li class="group flex items-center space-x-2">
                        <a
                            href="https://www.google.com/maps?q=Villavicencio+Meta,+Colombia"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center space-x-2 text-gray-300 transition-colors duration-300 hover:text-white"
                        >
                            <MapPin
                                class="h-5 w-5 text-orinoco-accent transition-transform duration-300 group-hover:scale-110"
                            />
                            <span>Villavicencio, Meta, Colombia</span>
                        </a>
                    </li>

                    <!-- Teléfono (abre app de llamadas) -->
                    <li class="group flex items-center space-x-2">
                        <a
                            href="tel:+573125039694"
                            class="flex items-center space-x-2 text-gray-300 transition-colors duration-300 hover:text-white"
                        >
                            <Phone
                                class="h-5 w-5 text-orinoco-accent transition-transform duration-300 group-hover:scale-110"
                            />
                            <span>+57 312 5039694</span>
                        </a>
                    </li>

                    <!-- Correo (abre app de correo) -->
                    <li class="group flex items-center space-x-2">
                        <a
                            href="mailto:contacto@ecorinocosas.com"
                            class="flex items-center space-x-2 text-gray-300 transition-colors duration-300 hover:text-white"
                        >
                            <Mail
                                class="h-5 w-5 text-orinoco-accent transition-transform duration-300 group-hover:scale-110"
                            />
                            <span>contacto@ecorinocosas.com</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Redes sociales -->
            <div
                class="flex md:col-span-3 md:justify-start lg:col-span-1 lg:justify-center"
            >
                <div>
                    <h3 class="text-lg font-semibold text-orinoco-light">
                        Síguenos
                    </h3>
                    <div
                        class="mb-4 flex space-x-2 pb-0.5"
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
                    <div class="flex space-x-4">
                        <a
                            v-for="s in socials"
                            :key="s.name"
                            :href="s.href"
                            target="_blank"
                            rel="noopener"
                            class="flex h-10 w-10 transform items-center justify-center rounded-full bg-white/10 transition-transform hover:-translate-y-1 hover:scale-110 hover:bg-white/20"
                            :aria-label="s.name"
                        >
                            <font-awesome-icon
                                :icon="s.icon"
                                class="text-lg text-orinoco-accent transition-transform duration-300 group-hover:scale-110"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Línea inferior -->
        <div
            class="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400"
        >
            © {{ currentYear }} E.C Orinoco S.A.S. — Ingeniería y Energía
            Sostenible.<br />
            <span class="text-xs text-gray-500"
                >Desarrollado con tecnología limpia y eficiencia digital.</span
            >
        </div>
    </footer>
</template>
