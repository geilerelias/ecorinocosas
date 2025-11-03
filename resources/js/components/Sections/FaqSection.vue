<template>
    <section class="bg-orinoco-light py-20">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div class="mb-16 text-center">
                <h2 class="text-orinoco-darker mb-4 text-4xl font-bold">
                    Preguntas Frecuentes
                </h2>
                <p class="text-orinoco-gray text-xl">
                    Resuelve tus dudas sobre nuestros servicios
                </p>
            </div>

            <div class="space-y-4">
                <div
                    v-for="faq in faqs"
                    :key="faq.id"
                    class="faq-item rounded-lg bg-white shadow-md"
                >
                    <button
                        @click="toggleFaq(faq.id)"
                        class="faq-question flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-gray-50"
                        type="button"
                    >
                        <span class="text-orinoco-darker text-lg font-semibold">
                            {{ faq.question }}
                        </span>

                        <!-- Cambia entre dos íconos -->
                        <font-awesome-icon
                            :icon="openFaq === faq.id ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']"
                            class="text-orinoco-primary transition-transform duration-200 ease-in-out"
                        />
                    </button>

                    <Transition name="slide-up">
                        <div
                            v-show="openFaq === faq.id"
                            class="faq-answer px-6 pb-4"
                        >
                            <p class="text-gray-600">{{ faq.answer }}</p>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown, faChevronUp)

interface FAQ {
    id: number
    question: string
    answer: string
}

const faqs: FAQ[] = [
    {
        id: 1,
        question: '¿Qué tipos de servicios eléctricos ofrecen?',
        answer:
            'Ofrecemos una gama completa de servicios eléctricos incluyendo instalación de redes de alta y baja tensión, mantenimiento preventivo y correctivo, sistemas de puesta a tierra, e implementación de subestaciones eléctricas.',
    },
    {
        id: 2,
        question: '¿Cuál es su cobertura en telecomunicaciones?',
        answer:
            'Proporcionamos soluciones de telecomunicaciones incluyendo instalación de fibra óptica, redes de datos, sistemas de radiofrecuencia, CCTV, y soluciones de conectividad para empresas y residencias.',
    },
    {
        id: 3,
        question: '¿Ofrecen mantenimiento post-instalación?',
        answer:
            'Sí, contamos con planes de mantenimiento 24/7 para todos nuestros proyectos. Nuestro equipo técnico está disponible para soporte preventivo y correctivo garantizando la continuidad operativa.',
    },
    {
        id: 4,
        question: '¿Están certificados por los organismos reguladores?',
        answer:
            'Sí, cumplimos con todas las normativas y certificaciones requeridas por el Ministerio de Minas y Energía y la Comisión de Regulación de Comunicaciones. Contamos con personal certificado y equipos homologados.',
    },
]

const openFaq = ref<number | null>(null)

const toggleFaq = (id: number) => {
    openFaq.value = openFaq.value === id ? null : id
}
</script>

<style scoped>
.slide-up-enter-from,
.slide-up-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-6px);
}
.slide-up-enter-to,
.slide-up-leave-from {
    max-height: 600px;
    opacity: 1;
    transform: translateY(0);
}
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
}
</style>
