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
    <!-- Llamado a la acción -->
    <section
        class=" py-16 text-center"
        data-aos="fade-up"
    >
        <h2 class="mb-4 text-3xl font-bold">
            ¿Listo para impulsar tu proyecto con energía limpia?
        </h2>
        <p class="mb-6 ">
            Nuestro equipo está listo para desarrollar soluciones a tu
            medida.
        </p>
        <Link
            href="/contacto"
            class="rounded-full bg-orinoco-primary px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
            Contáctanos
        </Link>
    </section>
    <footer
        class="relative overflow-hidden bg-gradient-to-br from-[#073201] via-[#024031] to-[#012208]  pb-10 text-white"
    >
        <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                    <g class="wave"  fill="#f8fafc">
                        <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                    </g>
                    <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                        <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
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
