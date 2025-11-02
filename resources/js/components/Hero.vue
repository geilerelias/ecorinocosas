<script setup lang="ts">
import type { FunctionalComponent } from 'vue';
import { computed, defineAsyncComponent } from 'vue';

interface HeroButton {
    label: string;
    href?: string;
    section?: string;
    primary?: boolean;
}

interface Props {
    title?: string;
    description?: string;
    icon?: string | FunctionalComponent; // puede ser nombre o componente
    backgroundImage?: string;
    backgroundFit?: 'cover' | 'contain'; // 👈 NUEVO: modo de ajuste
    overlayClass?: string;
    parallax?: boolean;
    buttons?: HeroButton[];
}

const props = withDefaults(defineProps<Props>(), {
    overlayClass:
        'absolute inset-0 bg-gradient-to-b from-orinoco-dark/50 via-orinoco-primary/60 to-orinoco-dark/70',
    parallax: true,
    backgroundFit: 'cover', // 👈 valor por defecto
    buttons: () => [],
});

// 🔹 Resolver ícono automáticamente si se pasa por nombre
const ResolvedIcon = computed(() => {
    if (!props.icon) return null;
    if (typeof props.icon !== 'string') return props.icon;

    try {
        return defineAsyncComponent(() =>
            import('lucide-vue-next').then((icons) => icons[props.icon]),
        );
    } catch (e) {
        console.warn(`⚠️ Icono '${props.icon}' no encontrado en lucide-vue-next`);
        return null;
    }
});

// 🔹 Resolver correctamente la ruta de la imagen (Vite-safe)
const resolvedImage = computed(() => {
    if (!props.backgroundImage) return null;

    // Si la imagen está en /public/images/
    if (props.backgroundImage.startsWith('/')) {
        return props.backgroundImage;
    }

    // Si la imagen viene con alias @/...
    try {
        return new URL(props.backgroundImage, import.meta.url).href;
    } catch {
        console.warn('⚠️ No se pudo resolver la imagen:', props.backgroundImage);
        return props.backgroundImage;
    }
});

// 🔹 Estilo dinámico del section con parallax y ajuste configurable
const sectionStyle = computed(() => ({
    backgroundImage: resolvedImage.value
        ? `url(${resolvedImage.value})`
        : 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
    backgroundSize: props.backgroundFit, // 👈 cover o contain
    backgroundPosition: 'center',
    backgroundAttachment: props.parallax ? 'fixed' : 'scroll',
    backgroundRepeat: 'no-repeat',
}));

// 🔹 Scroll suave hacia secciones
const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// 🔹 Clases de los botones
const buttonClass = (primary?: boolean) => [
    'px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:-translate-y-0.5 hover:scale-105',
    primary
        ? 'bg-orinoco-accent text-orinoco-dark hover:brightness-90'
        : 'border-2 border-white text-white hover:bg-white hover:text-orinoco-dark',
];
</script>

<template>
    <section
        class="parallax-hero relative flex h-[70vh] items-center justify-center overflow-hidden"
        :style="sectionStyle"
    >
        <!-- Capa superpuesta -->
        <div class="absolute inset-0" :class="overlayClass"></div>

        <!-- Contenido -->
        <div
            class="relative z-10 max-w-3xl px-6 text-center text-white"
            data-aos="fade-up"
        >
            <!-- Icono -->
            <div v-if="ResolvedIcon" class="mb-6 flex justify-center">
                <div
                    class="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
                >
                    <component
                        :is="ResolvedIcon"
                        class="h-10 w-10 text-orinoco-accent"
                    />
                </div>
            </div>

            <!-- Título -->
            <h1
                v-if="title"
                class="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl"
            >
                {{ title }}
            </h1>

            <!-- Descripción -->
            <p
                v-if="description"
                class="text-lg font-light text-gray-200 md:text-xl"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {{ description }}
            </p>

            <!-- Botones -->
            <div
                v-if="buttons && buttons.length"
                class="mt-10 flex flex-wrap justify-center gap-4"
                data-aos="zoom-in"
            >
                <template v-for="(btn, i) in buttons" :key="i">
                    <a
                        v-if="btn.href"
                        :href="btn.href"
                        :class="buttonClass(btn.primary)"
                    >
                        {{ btn.label }}
                    </a>

                    <button
                        v-else-if="btn.section"
                        @click="scrollToSection(btn.section)"
                        :class="buttonClass(btn.primary)"
                    >
                        {{ btn.label }}
                    </button>
                </template>
            </div>
        </div>
    </section>
</template>


