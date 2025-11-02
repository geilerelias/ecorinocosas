<script setup lang="ts">
import { onMounted, computed } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { home } from '@/routes';
import { Link, usePage } from '@inertiajs/vue3';

onMounted(() => {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-quart',
    });
});

// Props en inglés (con valores por defecto del login)
interface Props {
    title?: string;
    description?: string;
    subtitle?: string;
    linkText?: string;
    linkRoute?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Ingresar',
    subtitle: '¿No tienes cuenta?',
    linkText: 'Regístrate',
    linkRoute: '/register',
});

// Detecta la ruta actual para adaptar dinámicamente los textos
const page = usePage();
const currentRoute = page?.component?.toLowerCase() || '';

const dynamicContent = computed(() => {
    if (currentRoute.includes('register')) {
        return {
            title: 'Crear cuenta',
            subtitle: '¿Ya tienes una cuenta?',
            linkText: 'Inicia sesión',
            linkRoute: '/login',
        };
    }

    if (currentRoute.includes('reset')) {
        return {
            title: 'Restablecer contraseña',
            subtitle: '¿Recordaste tu contraseña?',
            linkText: 'Inicia sesión',
            linkRoute: '/login',
        };
    }

    // Por defecto (login)
    return {
        title: props.title,
        subtitle: props.subtitle,
        linkText: props.linkText,
        linkRoute: props.linkRoute,
    };
});
</script>

<template>
    <div class="grid min-h-screen bg-white lg:grid-cols-2 dark:bg-gray-950">
        <!-- Right panel (form) — appears first on mobile -->
        <div
            class="order-1 flex flex-col items-center justify-center bg-gray-50 p-6 sm:p-10 lg:p-16 dark:bg-gray-900 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
        >
            <div class="w-full max-w-sm">
                <!-- Header -->
                <div
                    class="mb-6 flex flex-col items-center"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    <AppLogoIcon class="mb-3 w-28 sm:w-36 md:w-44 h-auto" :withLetter="false" />

                    <!-- Dynamic title -->
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                        {{ dynamicContent.title }}
                    </h2>

                    <!-- Dynamic subtitle and link -->
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ dynamicContent.subtitle }}
                        <Link
                            :href="dynamicContent.linkRoute"
                            class="font-medium text-emerald-600 hover:underline"
                        >
                            {{ dynamicContent.linkText }}
                        </Link>
                    </p>

                    <!-- Descripción (opcional) -->
                    <p v-if="description" class="mt-1 text-sm text-gray-500 dark:text-gray-400 text-center">
                        {{ description }}
                    </p>
                </div>

                <!-- Form content -->
                <slot />

                <!-- Footer -->
                <p
                    class="mt-6 text-center text-xs sm:text-sm text-gray-500"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    © {{ new Date().getFullYear() }} E.C. Orinoco S.A.S. — Todos los derechos reservados.
                </p>
            </div>
        </div>

        <!-- Left panel (hero) -->
        <div
            class="order-2 relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 px-6 py-10 sm:px-10 sm:py-12 text-white lg:order-1"
        >
            <!-- Background image -->
            <img
                src="@/../images/hero/rio-acuarela.jpg"
                alt="Energía solar"
                class="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div class="absolute inset-0 bg-emerald-950/50"></div>

            <!-- Content -->
            <div class="relative z-10 space-y-6">
                <!-- Logo -->
                <div class="flex items-center justify-start space-x-3" data-aos="fade-down">
                    <AppLogoIcon
                        :white="true"
                        class="mb-3 w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 h-auto"
                    />
                </div>

                <!-- Subtitle -->
                <h2
                    class="max-w-xl text-xl sm:text-2xl md:text-3xl leading-snug font-semibold"
                    data-aos="fade-right"
                    data-aos-delay="150"
                >
                    Expertos en energía solar, soluciones innovadoras y sostenibles.
                </h2>

                <!-- Description -->
                <p
                    class="max-w-lg text-sm sm:text-base leading-relaxed text-emerald-100"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Diseñamos, implementamos y gestionamos soluciones de energía renovable
                    personalizadas para empresas y hogares, optimizando el rendimiento
                    energético y reduciendo la huella ambiental.
                </p>

                <!-- Call-to-action button -->
                <div data-aos="zoom-in" data-aos-delay="450">
                    <Link
                        :href="home()"
                        class="inline-block rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                    >
                        Saber más
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
