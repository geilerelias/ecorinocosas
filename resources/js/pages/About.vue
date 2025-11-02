<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import Hero from '@/components/Hero.vue';
import  AboutBanner from "@/../images/hero/about-banner.jpg"

import TeamSection from '@/components/Sections/TeamSection.vue';
import { Head } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';



onMounted(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-cubic' });
});


const timeline = [
    {
        year: '2010',
        title: 'Fundación',
        desc: 'Inicio de operaciones y primeros proyectos eléctricos industriales.',
    },
    {
        year: '2014',
        title: 'Expansión Regional',
        desc: 'Apertura de nuevas sedes y fortalecimiento de nuestro equipo técnico.',
    },
    {
        year: '2018',
        title: 'Energía Solar',
        desc: 'Implementación de proyectos solares fotovoltaicos en zonas rurales y urbanas.',
    },
    {
        year: '2022',
        title: 'Innovación y Digitalización',
        desc: 'Incorporación de tecnologías inteligentes en la gestión energética.',
    },
    {
        year: '2025',
        title: 'Liderazgo Sustentable',
        desc: 'Consolidación como empresa líder en ingeniería sostenible en Latinoamérica.',
    },
]
</script>

<template>
    <GuestLayout>
        <Head title="Nosotros - E.C Orinoco S.A.S" />

        <!-- Hero -->
        <Hero
            title="Conoce a E.C Orinoco S.A.S."
            description="Somos un equipo de ingenieros comprometidos con el desarrollo sostenible y la innovación energética."
            icon="Users"
            :backgroundImage="AboutBanner"
            :buttons="[
                {
                    label: 'Nuestra Historia',
                    section: '#history',
                    primary: true,
                },
                { label: 'Equipo', section: '#team' },
            ]"
        />

        <!-- 🏢 QUIÉNES SOMOS -->
        <section
            class="relative overflow-hidden bg-white py-24 text-orinoco-dark"
        >
            <div class="relative mx-auto max-w-7xl px-6">
                <div class="grid items-center gap-14 md:grid-cols-2">
                    <div data-aos="fade-right">
                        <h2 class="mb-6 text-4xl font-bold">¿Quiénes Somos?</h2>
                        <p class="mb-4 leading-relaxed text-gray-700">
                            En <strong>E.C Orinoco S.A.S</strong> somos un
                            equipo de ingenieros y profesionales apasionados por
                            transformar la energía en bienestar, tecnología y
                            desarrollo sostenible.
                        </p>
                        <p class="leading-relaxed text-gray-700">
                            Nuestro compromiso es diseñar, implementar y
                            mantener soluciones energéticas eficientes, limpias
                            y duraderas, que fortalezcan el crecimiento
                            industrial y social de Colombia y Latinoamérica.
                        </p>
                    </div>
                    <img
                        src="https://picsum.photos/700/500?random=11"
                        alt="Equipo de trabajo"
                        class="rounded-2xl shadow-xl"
                        data-aos="fade-left"
                    />
                </div>
            </div>
        </section>

        <!-- 💚 POR QUÉ NOSOTROS -->
        <section class="relative overflow-hidden bg-orinoco-light py-24">
            <div class="relative mx-auto max-w-7xl px-6 text-center">
                <h2
                    class="mb-12 text-4xl font-bold text-orinoco-dark"
                    data-aos="fade-up"
                >
                    ¿Por Qué Elegirnos?
                </h2>

                <div class="grid gap-10 md:grid-cols-3">
                    <div
                        v-for="(item, i) in [
                            {
                                icon: 'fas fa-solar-panel',
                                title: 'Experiencia y Calidad',
                                desc: 'Más de 10 años ejecutando proyectos energéticos con los más altos estándares técnicos y de seguridad.',
                            },
                            {
                                icon: 'fas fa-globe-americas',
                                title: 'Sostenibilidad Real',
                                desc: 'Comprometidos con la reducción del impacto ambiental y el cumplimiento de los ODS.',
                            },
                            {
                                icon: 'fas fa-users',
                                title: 'Equipo Multidisciplinario',
                                desc: 'Contamos con especialistas en ingeniería eléctrica, civil, ambiental y automatización.',
                            },
                        ]"
                        :key="i"
                        class="rounded-2xl bg-white p-10 shadow-lg transition hover:-translate-y-2"
                        data-aos="fade-up"
                    >
                        <font-awesome-icon
                            :icon="item.icon.split(' ')"
                            class="mb-4 text-4xl text-orinoco-primary"
                        />
                        <h3 class="mb-3 text-2xl font-semibold">
                            {{ item.title }}
                        </h3>
                        <p class="leading-relaxed text-gray-600">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🌿 MISIÓN Y VISIÓN -->
        <section
            class="relative bg-gradient-to-r from-green-700 to-lime-600 py-24 text-white"
        >
            <div
                class="mx-auto grid max-w-7xl items-start gap-10 px-6 md:grid-cols-3 lg:px-8"
            >
                <!-- Columna de introducción -->
                <div class="md:col-span-1">
                    <h2 class="mb-6 text-4xl leading-tight font-bold">
                        Misión y Visión <br />
                        <span class="text-lime-200">Empresarial</span>
                    </h2>
                    <p class="text-base leading-relaxed opacity-90">
                        Apuntamos a liderar en soluciones energéticas
                        sostenibles y tecnológicas que impulsen el rendimiento y
                        el desarrollo empresarial. Nuestra visión es ser
                        referentes en innovación, excelencia e impacto ambiental
                        positivo, contribuyendo al progreso sostenible de las
                        comunidades que servimos.
                    </p>
                </div>

                <!-- Tarjeta de Misión -->
                <div
                    class="rounded-2xl bg-white p-8 text-gray-800 shadow-xl transition duration-500 hover:shadow-2xl"
                >
                    <h3
                        class="mb-4 flex items-center gap-2 text-2xl font-bold text-orinoco-dark"
                    >
                        <font-awesome-icon
                            :icon="['fas', 'bullseye']"
                            class="text-lime-600"
                        />
                        Misión
                    </h3>
                    <p class="leading-relaxed text-gray-700">
                        Somos una empresa especializada en ingeniería y
                        soluciones energéticas sostenibles, comprometida con
                        brindar servicios de alta calidad, eficiencia y
                        responsabilidad ambiental. Aprovechamos la tecnología,
                        la innovación y la experiencia para ofrecer proyectos
                        que superen las expectativas de nuestros clientes y
                        aporten valor a su entorno.
                    </p>
                </div>

                <!-- Tarjeta de Visión -->
                <div
                    class="rounded-2xl bg-white p-8 text-gray-800 shadow-xl transition duration-500 hover:shadow-2xl"
                >
                    <h3
                        class="mb-4 flex items-center gap-2 text-2xl font-bold text-orinoco-dark"
                    >
                        <font-awesome-icon
                            :icon="['fas', 'eye']"
                            class="text-lime-600"
                        />
                        Visión
                    </h3>
                    <p class="leading-relaxed text-gray-700">
                        Ser reconocidos como una empresa líder en el sector de
                        la energía renovable e ingeniería sostenible,
                        destacándonos por la excelencia operativa, la innovación
                        continua y el compromiso con el desarrollo ambiental y
                        social. Buscamos ser un referente en Colombia y América
                        Latina en la transición hacia un futuro energético
                        responsable.
                    </p>
                </div>
            </div>
        </section>

         <!-- 🤝 CERTIFICACIONES Y ALIANZAS -->
        <section class="bg-white py-24 text-center">
            <div class="mx-auto max-w-6xl px-6" data-aos="fade-up">
                <h2 class="mb-12 text-4xl font-bold text-orinoco-dark">
                    Certificaciones y Alianzas
                </h2>
                <p class="mx-auto mb-10 max-w-2xl text-gray-600">
                    Contamos con certificaciones nacionales e internacionales
                    que garantizan la calidad, seguridad y sostenibilidad de
                    nuestros proyectos.
                </p>
                <div class="grid grid-cols-2 gap-10 md:grid-cols-4">
                    <img
                        v-for="n in 4"
                        :key="n"
                        :src="`https://picsum.photos/200/100?random=${n + 30}`"
                        class="mx-auto grayscale transition hover:grayscale-0"
                        alt="Certificación"
                    />
                </div>
            </div>
        </section>

        <TeamSection class="bg-orinoco-light"></TeamSection>

        <!-- 🏗️ HISTORIA -->
        <section
            class="relative overflow-hidden bg-white py-24 text-orinoco-dark"
        >
            <div class="relative mx-auto max-w-6xl px-6" data-aos="fade-up">
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-4xl font-bold">Nuestra Historia</h2>
                    <p class="mx-auto max-w-3xl text-lg text-gray-600">
                        Desde nuestros inicios, hemos trabajado para impulsar el
                        desarrollo sostenible, ofreciendo soluciones energéticas
                        que respetan el medio ambiente y generan progreso.
                    </p>
                </div>

                <div class="grid items-center gap-12 md:grid-cols-2">
                    <img
                        src="https://picsum.photos/600/400?random=10"
                        alt="Historia"
                        class="rounded-2xl shadow-lg"
                        data-aos="fade-right"
                    />
                    <div data-aos="fade-left">
                        <p class="mb-4 leading-relaxed text-gray-700">
                            Fundada en 2010, E.C Orinoco S.A.S nació con la
                            visión de ser un referente en energías renovables y
                            soluciones eléctricas sostenibles.
                        </p>
                        <p class="leading-relaxed text-gray-700">
                            A lo largo de los años, hemos consolidado proyectos
                            de gran impacto, desde sistemas fotovoltaicos hasta
                            soluciones de automatización y eficiencia
                            energética, siempre con un compromiso social y
                            ambiental.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🕓 LÍNEA DE TIEMPO CON AÑO CENTRAL -->
        <section class="relative bg-orinoco-light dark:bg-orinoco-dark py-24 overflow-hidden">
            <div class="mx-auto max-w-6xl px-6">
                <!-- Encabezado -->
                <div class="mb-20 text-center" data-aos="fade-up">
                    <h2 class="mb-4 text-4xl md:text-5xl font-extrabold text-orinoco-dark dark:text-white">
                        Nuestra Evolución
                    </h2>
                    <p class="text-orinoco-gray dark:text-gray-300 text-lg max-w-2xl mx-auto">
                        Un recorrido de crecimiento, innovación y compromiso con la sostenibilidad energética.
                    </p>
                </div>

                <!-- Línea central -->
                <div class="relative before:absolute before:top-0 before:left-1/2 before:h-full before:w-1 before:-translate-x-1/2 before:bg-gradient-to-b before:from-orinoco-primary/40 before:to-orinoco-primary/10">

                    <!-- Elementos del timeline -->
                    <div
                        v-for="(item, index) in timeline"
                        :key="index"
                        class="relative mb-24 flex flex-col md:flex-row md:items-center"
                        :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
                        data-aos="fade-up"
                    >
                        <!-- Círculo con año -->
                        <div
                            class="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-orinoco-primary to-orinoco-primary/80 text-white font-bold shadow-lg ring-4 ring-white dark:ring-orinoco-darker text-lg"
                        >
                            {{ item.year }}
                        </div>

                        <!-- Contenido -->
                        <div
                            class="md:w-1/2 mt-10 md:mt-0 md:px-10"
                            :class="index % 2 === 0 ? 'md:text-right md:pl-0 md:pr-10' : 'md:text-left md:pl-10 md:pr-0'"
                        >
                            <div
                                class="bg-white dark:bg-orinoco-darker p-6 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <h3 class="text-xl font-semibold text-orinoco-dark dark:text-white">
                                    {{ item.title }}
                                </h3>
                                <p class="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {{ item.desc }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fondo decorativo -->
            <div class="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_center,theme(colors.orinoco.primary/25),transparent_70%)]"></div>
        </section>

        <!-- 💎 VALORES -->
        <section class="bg-white py-24">
            <div class="mx-auto max-w-7xl px-6 text-center" data-aos="fade-up">
                <h2 class="mb-12 text-4xl font-bold text-orinoco-dark">
                    Nuestros Valores
                </h2>
                <div class="grid gap-10 md:grid-cols-3">
                    <div
                        v-for="(valor, i) in [
                            {
                                icon: 'fas fa-leaf',
                                title: 'Sostenibilidad',
                                desc: 'Promovemos soluciones que respetan y protegen el entorno natural.',
                            },
                            {
                                icon: 'fas fa-lightbulb',
                                title: 'Innovación',
                                desc: 'Adoptamos tecnologías de vanguardia para maximizar la eficiencia.',
                            },
                            {
                                icon: 'fas fa-handshake',
                                title: 'Compromiso',
                                desc: 'Cumplimos con excelencia, transparencia y responsabilidad social.',
                            },
                        ]"
                        :key="i"
                        class="rounded-2xl bg-orinoco-light p-8 shadow-lg transition hover:-translate-y-2"
                    >
                        <font-awesome-icon
                            :icon="valor.icon.split(' ')"
                            class="mb-4 text-4xl text-orinoco-primary"
                        />
                        <h3 class="mb-2 text-2xl font-semibold">
                            {{ valor.title }}
                        </h3>
                        <p class="text-gray-600">{{ valor.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🌱 BUSINESS CULTURE SECTION -->
        <section class="bg-orinoco-light py-24">
            <div
                class="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 lg:px-8"
            >
                <!-- Imagen con etiqueta de experiencia -->
                <div class="relative">
                    <img
                        src="https://picsum.photos/600/500?random=80"
                        alt="Cultura Empresarial"
                        class="w-full rounded-2xl object-cover shadow-2xl"
                    />
                    <div
                        class="absolute -top-6 -left-6 rounded-xl bg-lime-600 px-6 py-4 text-white shadow-lg"
                    >
                        <p class="text-4xl leading-none font-bold">15+</p>
                        <p
                            class="text-sm font-semibold tracking-wide uppercase"
                        >
                            Años de Experiencia
                        </p>
                    </div>
                </div>

                <!-- Contenido de texto -->
                <div>
                    <h2 class="mb-6 text-4xl font-bold text-orinoco-dark">
                        Nuestra Cultura Empresarial
                    </h2>
                    <p class="mb-8 text-lg leading-relaxed text-gray-700">
                        En <strong>E.C Orinoco S.A.S</strong> creemos que la
                        ingeniería sostenible es el motor que transforma
                        comunidades. Nuestro equipo multidisciplinario combina
                        innovación, compromiso ambiental y excelencia técnica
                        para entregar soluciones que generan valor y confianza.
                    </p>

                    <div class="grid gap-5 sm:grid-cols-2">
                        <div class="flex items-start gap-3">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 text-white"
                            >
                                <font-awesome-icon
                                    :icon="['fas', 'check']"
                                    class="text-sm"
                                />
                            </div>
                            <p class="text-sm text-gray-700">
                                Innovación constante en soluciones energéticas.
                            </p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 text-white"
                            >
                                <font-awesome-icon
                                    :icon="['fas', 'check']"
                                    class="text-sm"
                                />
                            </div>
                            <p class="text-sm text-gray-700">
                                Compromiso con la sostenibilidad y el medio
                                ambiente.
                            </p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 text-white"
                            >
                                <font-awesome-icon
                                    :icon="['fas', 'check']"
                                    class="text-sm"
                                />
                            </div>
                            <p class="text-sm text-gray-700">
                                Excelencia en la gestión de proyectos
                                industriales.
                            </p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 text-white"
                            >
                                <font-awesome-icon
                                    :icon="['fas', 'check']"
                                    class="text-sm"
                                />
                            </div>
                            <p class="text-sm text-gray-700">
                                Equipo altamente capacitado y orientado al
                                cliente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🌍 CTA FINAL -->
        <section
            class="relative overflow-hidden bg-gradient-to-r from-lime-500 via-green-700 to-green-900 py-28 text-center text-white"
        >
            <div class="absolute inset-0">
                <img
                    src="https://picsum.photos/1600/800?random=50"
                    alt="Futuro Verde"
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
                    “Trabajamos cada día por un mundo más limpio, eficiente y
                    sostenible.”
                </h2>
                <p class="mb-8 text-lg opacity-90">
                    En E.C Orinoco S.A.S, la energía del cambio está en nuestras
                    manos.
                </p>
                <a
                    href="/contact"
                    class="rounded-full bg-white px-6 py-3 font-semibold text-orinoco-dark shadow-md transition hover:bg-lime-200"
                >
                    Contáctanos
                </a>
            </div>
        </section>

        <!-- 💬 CONTACT CTA -->
        <section
            class="relative mx-6 my-12 mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-lime-600 to-green-500 py-24 text-white shadow-2xl md:mx-12"
        >
            <div
                class="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl"
            ></div>
            <div
                class="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            ></div>

            <div
                class="relative mx-auto grid max-w-7xl items-center gap-10 px-8 md:grid-cols-2"
            >
                <!-- Text content -->
                <div>
                    <h2 class="mb-4 text-4xl font-bold">
                        ¿Tienes alguna pregunta?
                    </h2>
                    <p class="mb-8 text-lg leading-relaxed text-white/90">
                        Nuestro equipo está listo para ayudarte. Contáctanos
                        para obtener asesoría profesional en soluciones
                        energéticas sostenibles, proyectos industriales y
                        servicios de ingeniería de alto nivel.
                    </p>

                    <div
                        class="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8"
                    >
                        <div>
                            <p
                                class="text-sm font-semibold tracking-wide text-white/70 uppercase"
                            >
                                Teléfono
                            </p>
                            <a
                                href="tel:+573125039694"
                                class="text-2xl font-bold transition hover:text-lime-300"
                            >
                                +57 312 5039694
                            </a>
                        </div>

                        <div>
                            <p
                                class="text-sm font-semibold tracking-wide text-white/70 uppercase"
                            >
                                Correo Electrónico
                            </p>
                            <a
                                href="mailto:contacto@ecorinocosas.com"
                                class="text-2xl font-bold transition hover:text-lime-300"
                            >
                                contacto@ecorinocosas.com
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Office Cards -->
                <div class="grid gap-6 sm:grid-cols-2">
                    <div
                        class="transform overflow-hidden rounded-2xl bg-white text-orinoco-dark shadow-lg transition hover:-translate-y-2"
                    >
                        <img
                            src="https://picsum.photos/400/300?random=51"
                            alt="Oficina principal"
                            class="h-40 w-full object-cover"
                        />
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">
                                Oficina Principal
                            </h3>
                            <p class="text-sm text-gray-600">
                               Villavicencio Meta.
                            </p>
                        </div>
                    </div>

                    <div
                        class="transform overflow-hidden rounded-2xl bg-white text-orinoco-dark shadow-lg transition hover:-translate-y-2"
                    >
                        <img
                            src="https://picsum.photos/400/300?random=52"
                            alt="Ubicación"
                            class="h-40 w-full object-cover"
                        />
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">
                                Ubicación Estratégica
                            </h3>
                            <p class="text-sm text-gray-600">
                                Operaciones a nivel nacional e internacional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </GuestLayout>
</template>

<style scoped>
/* Animación de entrada suave */
section {
    animation: fadeIn 0.8s ease-in-out;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.parallax-hero {
    background-image: url('https://picsum.photos/1920/1080?random=1');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
}
.bg-orinoco-light {
    background-color: #f8faf8;
}
.text-orinoco-dark {
    color: #0d3b1d;
}
.text-orinoco-gray {
    color: #6b7280;
}
.bg-orinoco-primary {
    background-color: #1b5e20;
}
</style>
