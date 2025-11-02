<template>
    <section id="nosotros" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Texto descriptivo -->
                <div>
                    <h2
                        class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-orinoco-darker mb-6 leading-tight"
                    >
                        Líderes en Soluciones de<br />
                        <span class="text-orinoco-primary">Energía y Telecomunicaciones</span>
                    </h2>

                    <p class="text-[clamp(1rem,2.5vw,1.125rem)] text-gray-600 mb-8">
                        Con más de 15 años de experiencia, hemos consolidado nuestra posición como referente en el sector eléctrico y de telecomunicaciones, brindando soluciones innovadoras y confiables.
                    </p>

                    <div class="space-y-3 sm:space-y-4">
                        <div
                            v-for="feature in features"
                            :key="feature.id"
                            class="flex items-start sm:items-center"
                        >
                            <i class="fas fa-check-circle text-orinoco-primary text-lg sm:text-xl mr-3 mt-1 sm:mt-0"></i>
                            <span class="text-gray-700 text-[clamp(0.95rem,2vw,1rem)] leading-snug">
                {{ feature.text }}
              </span>
                        </div>
                    </div>
                </div>

                <!-- Estadísticas -->
                <div
                    class="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
                >
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
import { ref, onMounted } from "vue";
import StatCard from "@/Components/UI/StatCard.vue";
import type { Stat, Feature } from "@/Types/global";

const stats = ref<Stat[]>([
    { id: 1, value: "500+", label: "Proyectos Completados", color: "gradient-energy" },
    { id: 2, value: "50K+", label: "Clientes Satisfechos", color: "gradient-telecom" },
    { id: 3, value: "99.9%", label: "Uptime Garantizado", color: "from-orinoco-primary to-orinoco-accent" },
    { id: 4, value: "24/7", label: "Soporte Técnico", color: "from-orinoco-dark to-orinoco-primary" },
]);

const features: Feature[] = [
    { id: 1, text: "Personal técnico certificado y especializado" },
    { id: 2, text: "Cumplimiento de todas las normativas vigentes" },
    { id: 3, text: "Soporte técnico disponible 24/7" },
    { id: 4, text: "Garantía en todos nuestros proyectos" },
];

// Animación de los números
const animateNumbers = (): void => {
    stats.value.forEach((stat, index) => {
        if (/\d/.test(stat.value)) {
            const target = parseInt(stat.value);
            let current = 0;
            const increment = Math.ceil(target / 50);

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.value = target + "+";
                    clearInterval(timer);
                } else {
                    stat.value = current + "+";
                }
            }, 30 + index * 10);
        }
    });
};

onMounted(() => {
    const section = document.querySelector("#nosotros");
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(section);
});
</script>

<style scoped>
.stat-number {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 800;
    line-height: 1;
}
</style>
