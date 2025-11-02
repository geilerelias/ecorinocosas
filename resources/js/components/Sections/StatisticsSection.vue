<template>
    <section id="nosotros" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold text-orinoco-darker mb-6">
                        Líderes en Soluciones de<br/>
                        <span class="text-orinoco-primary">Energía y Telecomunicaciones</span>
                    </h2>
                    <p class="text-lg text-gray-600 mb-8">
                        Con más de 15 años de experiencia, hemos consolidado nuestra posición como referente en el sector eléctrico y de telecomunicaciones, brindando soluciones innovadoras y confiables.
                    </p>
                    <div class="space-y-4">
                        <div v-for="feature in features" :key="feature.id" class="flex items-center">
                            <i class="fas fa-check-circle text-orinoco-primary text-xl mr-3"></i>
                            <span class="text-gray-700">{{ feature.text }}</span>
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-6">
                    <StatCard 
                        v-for="stat in stats" 
                        :key="stat.id"
                        :value="stat.value"
                        :label="stat.label"
                        :color="stat.color"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { ref, onMounted } from 'vue';
import type { Stat, Feature } from '@/Types/global';
import StatCard from '@/Components/UI/StatCard.vue';

const stats = ref<Stat[]>([
    { id: 1, value: '500+', label: 'Proyectos Completados', color: 'gradient-energy' },
    { id: 2, value: '50K+', label: 'Clientes Satisfechos', color: 'gradient-telecom' },
    { id: 3, value: '99.9%', label: 'Uptime Garantizado', color: 'from-orinoco-primary to-orinoco-accent' },
    { id: 4, value: '24/7', label: 'Soporte Técnico', color: 'from-orinoco-dark to-orinoco-primary' }
]);

const features: Feature[] = [
    { id: 1, text: 'Personal técnico certificado y especializado' },
    { id: 2, text: 'Cumplimiento de todas las normativas vigentes' },
    { id: 3, text: 'Soporte técnico disponible 24/7' },
    { id: 4, text: 'Garantía en todos nuestros proyectos' }
];

const animateNumbers = (): void => {
    stats.value.forEach((stat, index) => {
        setTimeout(() => {
            const target = stat.value;
            let current = 0;
            const increment = parseInt(target) / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= parseInt(target)) {
                    stat.value = target;
                    clearInterval(timer);
                } else {
                    stat.value = Math.floor(current) + '+';
                }
            }, 30);
        }, index * 200);
    });
};

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('#nosotros');
    if (statsSection) {
        observer.observe(statsSection);
    }
});
</script>

<style scoped>
.stat-number {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1;
}
</style>