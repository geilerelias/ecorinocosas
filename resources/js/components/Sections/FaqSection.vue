<template>
    <section class="py-20 bg-orinoco-light">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-orinoco-darker mb-4">Preguntas Frecuentes</h2>
                <p class="text-xl text-orinoco-gray">Resuelve tus dudas sobre nuestros servicios</p>
            </div>
            
            <div class="space-y-4">
                <div v-for="faq in faqs" :key="faq.id" class="faq-item bg-white rounded-lg shadow-md">
                    <button @click="toggleFaq(faq.id)" class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition">
                        <span class="font-semibold text-lg text-orinoco-darker">{{ faq.question }}</span>
                        <i :class="['fas fa-chevron-down text-orinoco-primary transition-transform', { 'rotate-180': openFaq === faq.id }]"></i>
                    </button>
                    <Transition name="slide-up">
                        <div v-if="openFaq === faq.id" class="faq-answer px-6 pb-4">
                            <p class="text-gray-600">{{ faq.answer }}</p>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { ref } from 'vue';

interface FAQ {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        id: 1,
        question: '¿Qué tipos de servicios eléctricos ofrecen?',
        answer: 'Ofrecemos una gama completa de servicios eléctricos incluyendo instalación de redes de alta y baja tensión, mantenimiento preventivo y correctivo, sistemas de puesta a tierra, e implementación de subestaciones eléctricas.'
    },
    {
        id: 2,
        question: '¿Cuál es su cobertura en telecomunicaciones?',
        answer: 'Proporcionamos soluciones de telecomunicaciones incluyendo instalación de fibra óptica, redes de datos, sistemas de radiofrecuencia, CCTV, y soluciones de conectividad para empresas y residencias.'
    },
    {
        id: 3,
        question: '¿Ofrecen mantenimiento post-instalación?',
        answer: 'Sí, contamos con planes de mantenimiento 24/7 para todos nuestros proyectos. Nuestro equipo técnico está disponible para soporte preventivo y correctivo garantizando la continuidad operativa.'
    },
    {
        id: 4,
        question: '¿Están certificados por los organismos reguladores?',
        answer: 'Sí, cumplimos con todas las normativas y certificaciones requeridas por el Ministerio de Minas y Energía y la Comisión de Regulación de Comunicaciones. Contamos con personal certificado y equipos homologados.'
    }
];

const openFaq = ref<number | null>(null);

const toggleFaq = (id: number): void => {
    openFaq.value = openFaq.value === id ? null : id;
};
</script>