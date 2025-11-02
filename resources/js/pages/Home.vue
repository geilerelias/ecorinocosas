<script setup lang="ts">
import HomeBanner from '@/../images/hero/rio-orinoco.jpg';
import ArticlesSection from '@/components/Sections/ArticlesSection.vue';
import FaqSection from '@/components/Sections/FaqSection.vue';
import NewsletterSection from '@/components/Sections/NewsletterSection.vue';
import ProjectsSection from '@/components/Sections/ProjectsSection.vue';
import ServicesSection from '@/components/Sections/ServicesSection.vue';
import StatisticsSection from '@/components/Sections/StatisticsSection.vue';
import VideoSection from '@/components/Sections/VideoSection.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const scrolled = ref<boolean>(false);
const mobileMenuOpen = ref<boolean>(false);

const toggleMobileMenu = (): void => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleScroll = (): void => {
    scrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <GuestLayout>
        <!-- Hero Section con navegación integrada -->
        <section class="gradient-orinoco relative text-white">
            <!-- Background -->
            <div class="absolute inset-0">
                <img
                    :src="HomeBanner"
                    alt="Background"
                    class="h-full w-full object-cover opacity-18"
                />
            </div>

            <!-- Hero Content -->
            <div
                class="relative mx-auto max-w-7xl px-4 py-24 pt-32 sm:px-6 lg:px-8 lg:py-32"
            >
                <div class="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <div class="mb-6">
                            <span
                                class="text-orinoco-darker inline-block rounded-full bg-orinoco-accent px-4 py-2 text-sm font-semibold"
                            >
                                Energía y Conectividad para el Progreso
                            </span>
                        </div>
                        <h1
                            class="mb-6 text-2xl leading-tight font-bold lg:text-5xl"
                        >
                            SOLUCIONES INTEGRALES EN<br />
                            <span class="text-orinoco-accent"
                                >ENERGÍA Y TELECOMUNICACIONES</span
                            >
                        </h1>
                        <p class="mb-8 text-xl text-green-50">
                            E.C Orinoco S.A.S - Expertos en proyectos eléctricos
                            y de telecomunicaciones con tecnología de vanguardia
                            y soporte 24/7.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <button
                                @click="scrollToSection('services')"
                                class="transform rounded-full bg-white px-8 py-3 font-semibold text-orinoco-dark transition hover:scale-105 hover:bg-gray-100"
                            >
                                Nuestros Servicios
                            </button>
                            <button
                                @click="scrollToSection('projects')"
                                class="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-orinoco-dark"
                            >
                                Ver Proyectos
                            </button>
                        </div>
                    </div>
                    <div class="relative">
                        <img
                            src="@/../images/img-2023-08-01 at 3.37.38 PM.jpeg"
                            alt="Telecom Tower"
                            class="rounded-lg shadow-2xl"
                        />
                        <div
                            class="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-xl"
                        >
                            <div class="flex items-center">
                                <div
                                    class="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-orinoco-primary"
                                >
                                    <font-awesome-icon
                                        icon="fa-network-wired"
                                        class="text-xl text-white"
                                    />
                                </div>
                                <div>
                                    <p class="text-sm text-gray-600">
                                        Confiabilidad
                                    </p>
                                    <p
                                        class="text-xl font-bold text-orinoco-dark"
                                    >
                                        100% Garantizada
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Sections -->
        <ServicesSection />
        <VideoSection />
        <StatisticsSection />
        <ProjectsSection />
        <ArticlesSection />
        <FaqSection />
        <NewsletterSection />
    </GuestLayout>
</template>

<style scoped>
.energy-glow {
    box-shadow: 0 0 20px rgba(139, 195, 74, 0.3);
}
</style>
