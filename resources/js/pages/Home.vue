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
import { Network } from 'lucide-vue-next';

import { onMounted, onUnmounted, ref } from 'vue';

const scrolled = ref<boolean>(false);
ref<boolean>(false);
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
        <section
            class="gradient-orinoco relative h-screen overflow-hidden text-white mt-0"
        >
            <!-- Background -->
            <div class="absolute inset-0 mt-0">
                <img
                    :src="HomeBanner"
                    alt="Background"
                    class="h-full w-full object-cover opacity-18"
                />
            </div>

            <!-- Hero Content -->
            <div
                class="justify-center relative mx-auto flex max-w-7xl h-full items-center px-4 py-24 pt-32 sm:px-6 lg:px-8 lg:py-32"
            >
                <div
                    class="grid items-center justify-center gap-12 lg:grid-cols-2 h-full"
                >
                    <div>
                        <!-- Badge -->
                        <div
                            class="mb-3 justify-center text-center md:w-3/5 md:text-left"
                        >
                            <span
                                class="md:text-md text-orinoco-darker inline-block rounded-full bg-orinoco-accent px-4 py-2 text-sm font-semibold"
                            >
                                Energía y Conectividad para el Progreso
                            </span>
                        </div>

                        <!-- Title -->
                        <div
                            class="flex w-full flex-col items-start justify-center text-center md:text-left"
                        >
                            <h1
                                class="mb-3 text-2xl w-full leading-tight font-bold lg:text-5xl"
                            >
                                Soluciones integrales en <br />
                                <span class="text-orinoco-accent"
                                    >Energía y telecomunicaciones</span
                                >
                            </h1>

                            <p class="text-md mb-8 w-full leading-normal">
                                E.C Orinoco S.A.S - Expertos en proyectos
                                eléctricos y de telecomunicaciones con
                                tecnología de vanguardia y soporte 24/7.
                            </p>

                            <!-- CTA Buttons -->
                            <div
                                class="flex w-full flex-wrap content-center justify-center gap-4 md:justify-start"
                            >
                                <button
                                    @click="scrollToSection('services')"
                                    class="transform rounded-full bg-white px-8 py-3 font-semibold text-orinoco-dark transition hover:scale-105 hover:bg-gray-100"
                                >
                                    Servicios
                                </button>
                                <button
                                    @click="scrollToSection('projects')"
                                    class="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-orinoco-dark"
                                >
                                    Proyectos
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Image + Label -->
                    <div class="relative hidden md:block">
                        <img
                            src="@/../images/img-2023-08-01 at 3.37.38 PM.jpeg"
                            alt="Telecom Tower"
                            class="energy-glow md:h-90  h-full w-full rounded-lg object-cover shadow-2xl"
                        />

                        <div
                            class="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-xl"
                        >
                            <div class="flex items-center">
                                <div
                                    class="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-orinoco-primary"
                                >
                                    <Network class="h-5 w-5 text-white" />
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

            <!-- Wave Dentro del Header -->
            <div class="absolute bottom-0 left-0 w-full">
                <svg
                    viewBox="0 0 1428 174"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g stroke="none" fill="none" fill-rule="evenodd">
                        <g
                            transform="translate(-2.000000, 44.000000)"
                            fill="#FFFFFF"
                            fill-opacity="0.10"
                        >
                            <path
                                d="M0,0 C90.7,0.9 147.9,27.1 291.9,59.9 C387.9,81.7 543.6,89.3 759,82.7 C469.3,156.2 216.3,153.6 0,74.9"
                            ></path>
                            <path
                                d="M100,104.7 C277.4,72.2 426.1,52.5 546.2,45.5 C666.2,38.6 810.5,41.7 979,55 C931,56.1 810.3,74.8 616.7,111.2 C423,147.6 250.8,145.4 100,104.7"
                            ></path>
                            <path
                                d="M1046,51.6 C1130.8,29.3 1279,17.6 1439,40.1 L1439,120 C1271.1,77.9 1140.1,55.1 1046,51.6"
                            ></path>
                        </g>
                        <g
                            transform="translate(-4.000000, 76.000000)"
                            fill="#FFFFFF"
                        >
                            <path
                                d="M0.4,34 C57,53.1 98.2,65.8 123.8,71.8 C181.4,85.4 234.2,90.2 272,93.4 C311.3,96.7 396.6,95.7 461,91.6 C486.7,90 518.7,86.3 556.9,80.7 C595.7,74.5 622.3,69.9 636.8,66.9 C663.9,61.3 712.4,49.5 727.6,46.1 C780.4,34.3 818.8,22.5 856.3,15.9 C922.6,4.1 955.6,2.5 1011.1,0.4 C1060.7,1.4 1097.3,3.1 1121.2,5.3 C1161.7,9.2 1208.6,17.8 1235.4,22.3 C1285.8,30.7 1354.3,47.4 1440.8,72.3 L1441.1,104.3 L1.1,104 Z"
                            ></path>
                        </g>
                    </g>
                </svg>
            </div>
        </section>

        <!-- Sections -->

        <ServicesSection id="services" class="bg-white" />
        <VideoSection />
        <StatisticsSection />
        <ProjectsSection id="projects" />
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
