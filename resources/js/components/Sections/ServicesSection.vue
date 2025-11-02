<template>
    <section id="servicios" class="py-20 bg-orinoco-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-orinoco-darker mb-4">Nuestros Servicios</h2>
                <p class="text-xl text-orinoco-gray max-w-3xl mx-auto">
                    Ofrecemos soluciones integrales en energía eléctrica y telecomunicaciones con la más alta tecnología y estándares de calidad.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="service in randomServices" :key="service.id" class="bg-white p-8 rounded-xl hover-lift shadow-lg">

                    <div class="flex justify-left mb-3">
                        <div class="relative h-18 w-18 rounded-full overflow-hidden border-2 border-orinoco-primary shadow-md group">
                            <img
                                :src="service.photos?.[0]?.source || '/images/placeholders/renewable.jpg'"
                                :alt="service.title"
                                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>



                    <h3 class="text-2xl font-semibold mb-4 text-orinoco-darker">{{ service.title }}</h3>
                    <p class="text-gray-600 mb-4">{{ service.description }}</p>
                    <Link href="/servicios" class="text-orinoco-primary font-semibold hover:text-orinoco-dark transition">Conocer Más →</Link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'
import { useServicesStore } from '@/Stores/useServicesStore'

// Tipos de datos
interface ServiceItem {
    title: string
    description: string
    photos: { source: string }[]
    layout: number[]
    height: string[]
}

interface ServiceGroup {
    clasificacion: string
    icono: string
    servicios: ServiceItem[]
}

const store = useServicesStore()

// 🔹 Combinar todos los servicios en una sola lista con su ícono y categoría
const allServices = computed(() =>
    store.services.flatMap((group: ServiceGroup) =>
        group.servicios.map(service => ({
            ...service,
            icono: group.icono,
            clasificacion: group.clasificacion,
        }))
    )
)

// 🔹 Seleccionar 3 servicios aleatorios
const randomServices = computed(() =>
    [...allServices.value].sort(() => 0.5 - Math.random()).slice(0, 3)
)

</script>
