<script setup lang="ts">
import SolarTech from '@/../images/hero/solar-tech.jpg';
import ServicesBanner from '@/../images/hero/services-banner.jpg'
import Hero from '@/components/Hero.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { useServicesStore } from '@/stores/useServicesStore';
import { Head } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

const store = useServicesStore();

onMounted(() => {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
    });

    // Efecto parallax para el header
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.parallax-hero') as HTMLElement;
        if (hero) {
            const offset = window.scrollY * 0.4;
            hero.style.backgroundPositionY = `${offset}px`;
        }
    });
});
</script>

<template>
    <GuestLayout>
        <Head title="Servicios - E.C Orinoco S.A.S" />
        <Hero
            title="Soluciones Energéticas Integrales"
            description="Desde diseño hasta implementación, ofrecemos soluciones eficientes y responsables con el medio ambiente."
            icon="Wrench"
            :backgroundImage="ServicesBanner"
            :buttons="[
                {
                    label: 'Servicios',
                    section: '#services',
                    primary: true,
                },
                { label: 'Asesoría', href: '/contact' },
            ]"
        />

        <!-- ⚙️ SECCIÓN DE SERVICIOS -->
        <section
            id="services"
            class="relative overflow-hidden bg-orinoco-light py-24"
        >
            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center" data-aos="fade-up">
                    <h2 class="mb-4 text-4xl font-bold text-orinoco-dark">
                        Nuestros Servicios
                    </h2>
                    <p class="text-orinoco-gray text-lg">
                        Ofrecemos soluciones integrales en energía renovable,
                        ingeniería, automatización y eficiencia energética.
                    </p>
                </div>

                <div
                    v-for="(category, cIndex) in store.services"
                    :key="cIndex"
                    class="mb-20"
                >
                    <div
                        class="mb-12 text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3
                            class="mb-3 text-3xl font-semibold text-orinoco-primary"
                        >
                            {{ category.clasificacion }}
                        </h3>
                        <p class="text-orinoco-gray mx-auto max-w-3xl">
                            {{
                                category.descripcion ||
                                'Servicios especializados orientados a la sostenibilidad y la innovación.'
                            }}
                        </p>
                    </div>

                    <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        <div
                            v-for="(servicio, index) in category.servicios"
                            :key="index"
                            class="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            :data-aos="
                                index % 2 === 0 ? 'fade-up' : 'fade-down'
                            "
                        >
                            <div class="relative h-56 overflow-hidden">
                                <img
                                    :src="
                                        servicio.photos?.[0]?.source ||
                                        '/images/placeholders/renewable.jpg'
                                    "
                                    :alt="servicio.title"
                                    class="h-full w-full transform object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div class="p-6">
                                <h3
                                    class="mb-3 text-xl font-semibold text-orinoco-dark transition group-hover:text-orinoco-primary"
                                >
                                    {{ servicio.title }}
                                </h3>
                                <p
                                    class="mb-4 text-sm leading-relaxed text-gray-600"
                                >
                                    {{
                                        servicio.description
                                            .replace(/<[^>]+>/g, '')
                                            .slice(0, 180) + '...'
                                    }}
                                </p>
                                <a
                                    href="#"
                                    class="flex items-center gap-1 text-sm font-semibold text-orinoco-primary hover:underline"
                                >
                                    Ver Detalles
                                    <font-awesome-icon
                                        :icon="['fas', 'arrow-right']"
                                        class="mt-[2px] text-xs"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 💡 CTA FINAL -->
        <section
            class="relative overflow-hidden bg-gradient-to-r from-lime-500 via-green-700 to-green-900 py-28 text-center text-white"
        >
            <div class="absolute inset-0">
                <img
                    :src="SolarTech"
                    alt="Energía Sostenible"
                    class="h-full w-full object-cover opacity-20"
                />
            </div>
            <div
                class="relative z-10 mx-auto max-w-3xl px-6"
                data-aos="fade-up"
            >
                <h2
                    class="mb-6 text-3xl leading-snug font-extrabold md:text-4xl"
                >
                    “La energía del futuro se construye con tecnología y
                    compromiso.”
                </h2>
                <p class="mb-8 text-lg opacity-90">
                    En E.C Orinoco S.A.S brindamos soluciones energéticas que
                    integran eficiencia, sostenibilidad e innovación.
                </p>
                <a
                    href="/contact"
                    class="rounded-full bg-white px-6 py-3 font-semibold text-orinoco-dark shadow-md transition hover:bg-lime-200"
                >
                    Solicita una Asesoría
                </a>
            </div>
        </section>

        <!-- 🌱 SECCIÓN DE CONTACTO / CONSULTA DE PROYECTOS -->
        <section class="bg-orinoco-dark py-24 text-white">
            <div
                class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8"
            >
                <!-- 🟢 Columna Izquierda -->
                <div>
                    <h2 class="mb-6 flex items-center gap-2 text-3xl font-bold">
                        <span class="h-3 w-3 rounded-full bg-lime-500"></span>
                        Podemos ayudar
                    </h2>
                    <p class="mb-10 text-lg leading-relaxed text-gray-300">
                        Hablemos sobre cómo podemos construir tus sueños y
                        transformar tus ideas en realidad con
                        <span class="font-semibold text-white"
                            >E.C Orinoco S.A.S</span
                        >.
                    </p>

                    <div class="space-y-6 text-gray-300">
                        <div>
                            <h4 class="mb-1 font-semibold text-white">
                                Teléfono
                            </h4>
                            <p class="flex items-center gap-2">
                                <i class="fa-solid fa-phone text-lime-400"></i>
                                <i
                                    class="fa-brands fa-whatsapp text-lime-400"
                                ></i>
                                +57 312 5039694
                            </p>
                        </div>

                        <div>
                            <h4 class="mb-1 font-semibold text-white">Email</h4>
                            <p class="flex items-center gap-2">
                                <i
                                    class="fa-solid fa-envelope text-lime-400"
                                ></i>
                                contacto@ecorinocosas.com
                            </p>
                        </div>

                        <div>
                            <h4 class="mb-1 font-semibold text-white">
                                Localización
                            </h4>
                            <p class="flex items-center gap-2">
                                <i
                                    class="fa-solid fa-location-dot text-lime-400"
                                ></i>
                                Villavicencio Meta, Colombia
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 📋 Columna Derecha: Formulario -->
                <div class="rounded-2xl bg-white p-10 text-gray-800 shadow-xl">
                    <h3 class="mb-6 text-2xl font-semibold">
                        Iniciar el proyecto
                    </h3>

                    <form class="space-y-6">
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Nombres"
                                class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            <input
                                type="text"
                                placeholder="Apellidos"
                                class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                            />
                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <input
                                type="email"
                                placeholder="Email"
                                class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            <input
                                type="text"
                                placeholder="País o región"
                                class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                            />
                        </div>

                        <textarea
                            placeholder="Cuéntanos sobre el proyecto"
                            class="h-32 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
                        ></textarea>

                        <div
                            class="flex items-center gap-2 text-sm text-gray-600"
                        >
                            <input
                                type="checkbox"
                                id="terms"
                                class="rounded border-gray-400 text-lime-500 focus:ring-lime-500"
                            />
                            <label for="terms">
                                Acepto los
                                <a
                                    href="#"
                                    class="font-medium text-lime-600 hover:underline"
                                    >Términos y Condiciones</a
                                >.
                            </label>
                        </div>

                        <button
                            type="submit"
                            class="w-full rounded-lg bg-lime-600 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-lime-700"
                        >
                            Enviar Consulta
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </GuestLayout>
</template>

<style scoped>
.parallax-hero {
    background-image: url('@/../images/hero/services-banner.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
