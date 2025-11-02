<script setup lang="ts">
import ContactBanner from '@/../images/hero/contact-banner.jpg';
import Hero from '@/components/Hero.vue';
import Button from '@/Components/UI/Button.vue';
import { useGlobalMessage } from '@/composables/useGlobalMessage';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { useAppStore } from '@/stores/useAppStore';
import { useForm } from '@inertiajs/vue3';
import { storeToRefs } from 'pinia';

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const form = useForm<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const { showGlobalMessage } = useGlobalMessage(); // ✅ agregado
const appStore = storeToRefs(useAppStore(), { scroll: true });

const socials = [
    {
        icon: ['fab', 'facebook-f'],
        href: 'https://facebook.com',
        name: 'Facebook',
    },
    {
        icon: ['fab', 'linkedin-in'],
        href: 'https://linkedin.com',
        name: 'LinkedIn',
    },
    {
        icon: ['fab', 'instagram'],
        href: 'https://instagram.com',
        name: 'Instagram',
    },
];

const submit = (): void => {
    form.post('/contacto', {
        onSuccess: (): void => {
            showGlobalMessage(
                '¡Mensaje enviado correctamente! Te contactaremos pronto.',
                'success',
            );
            form.reset();
        },
        onError: (): void => {
            showGlobalMessage(
                'Error al enviar el mensaje. Inténtalo de nuevo.',
                'error',
            );
        },
    });
};

const scrollToForm = () => {
    const formElement = document.querySelector('form');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>
>

<template>

    <GuestLayout class="bg-white">
        <!-- Hero -->
        <Hero
            title="Conectemos Contigo"
            description="Queremos escucharte. Escríbenos para recibir asesoría o más información sobre nuestros servicios."
            icon="Mail"
            :backgroundImage="ContactBanner"
            :buttons="[
                { label: 'Enviar Mensaje', section: '#form', primary: true },
                { label: 'Ver Ubicación', section: '#maps' },
            ]"
        />

        <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div class="grid gap-12 lg:grid-cols-2">
                <!-- FORMULARIO DE CONTACTO -->
                <div data-aos="fade-right">
                    <h3 class="mb-6 text-2xl font-semibold">
                        Envíanos un Mensaje
                    </h3>

                    <form id="form" @submit.prevent="submit" class="space-y-5">
                        <!-- Nombre y Apellido -->
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Nombre"
                                v-model="form.name"
                                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 transition-all focus:border-[#024031] focus:ring-2 focus:ring-[#024031] focus:outline-none"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Apellido"
                                v-model="form.lastname"
                                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 transition-all focus:border-[#024031] focus:ring-2 focus:ring-[#024031] focus:outline-none"
                            />
                        </div>

                        <!-- Email y Teléfono -->
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                v-model="form.email"
                                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 transition-all focus:border-[#024031] focus:ring-2 focus:ring-[#024031] focus:outline-none"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Teléfono o WhatsApp"
                                v-model="form.phone"
                                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 transition-all focus:border-[#024031] focus:ring-2 focus:ring-[#024031] focus:outline-none"
                            />
                        </div>

                        <!-- Asunto -->
                        <input
                            type="text"
                            placeholder="Asunto o motivo del contacto"
                            v-model="form.subject"
                            class="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 transition-all focus:border-[#024031] focus:ring-2 focus:ring-[#024031] focus:outline-none"
                        />

                        <!-- Mensaje -->
                        <textarea
                            placeholder="Escribe tu mensaje aquí..."
                            v-model="form.message"
                            rows="5"
                            class="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 transition-all focus:border-[#024031] focus:ring-2 focus:ring-[#024031] focus:outline-none"
                            required
                        ></textarea>

                        <!-- Términos -->
                        <label class="flex items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                v-model="form.terms"
                                class="mr-2"
                                required
                            />
                            Acepto los
                            <a
                                href="#"
                                class="ml-1 font-semibold text-[#024031] hover:underline"
                            >
                                Términos y Condiciones </a
                            >.
                        </label>

                        <!-- Botón -->
                        <button
                            type="submit"
                            class="w-full transform rounded-xl bg-[#7bc043] py-3 font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-[#69a936]"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>

                <!-- INFORMACIÓN DE CONTACTO -->
                <div data-aos="fade-left" class="space-y-10">
                    <h3 class="mb-6 text-2xl font-semibold">
                        Información de Contacto
                    </h3>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div
                                class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orinoco-primary"
                            >
                                <font-awesome-icon
                                    icon="fa-phone"
                                    class="text-xl text-white"
                                />
                            </div>
                            <div>
                                <p class="text-sm text-gray-600">Teléfono</p>
                                <p class="text-xl font-bold text-orinoco-dark">
                                    +57 312 5039694
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div
                                class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orinoco-primary"
                            >
                                <font-awesome-icon
                                    icon="fa-envelope"
                                    class="text-xl text-white"
                                />
                            </div>
                            <div>
                                <p class="text-sm text-gray-600">Email</p>
                                <p class="text-xl font-bold text-orinoco-dark">
                                    contacto@ecorinocosas.com
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div
                                class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orinoco-primary"
                            >
                                <font-awesome-icon
                                    icon="fa-map-marker-alt"
                                    class="text-xl text-white"
                                />
                            </div>
                            <div>
                                <p class="text-sm text-gray-600">Dirección</p>
                                <p class="text-xl font-bold text-orinoco-dark">
                                    Villavicencio Meta
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- HORARIOS -->
                    <div class="border-t border-gray-200 pt-6">
                        <h4
                            class="mb-3 text-lg font-semibold text-orinoco-dark"
                        >
                            Horario de Atención
                        </h4>
                        <p class="text-gray-700">
                            Lunes a Viernes: 8:00 AM - 6:00 PM
                        </p>
                        <p class="text-gray-700">Sábados: 9:00 AM - 1:00 PM</p>
                        <p class="mt-2 text-sm text-gray-500">
                            Domingos y festivos cerrado
                        </p>
                    </div>

                    <!-- REDES SOCIALES -->
                    <div class="border-t border-gray-200 pt-6">
                        <h4
                            class="mb-4 text-lg font-semibold text-orinoco-dark"
                        >
                            Síguenos
                        </h4>

                        <div class="flex space-x-4">
                            <a
                                v-for="s in socials"
                                :key="s.name"
                                href="#"
                                class="text-orinoco-primary transition hover:text-orinoco-dark"
                            >
                                <font-awesome-icon
                                    :icon="s.icon"
                                    class="text-2xl"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MAPA -->
            <div id="maps" class="mt-20" data-aos="fade-up">
                <iframe
                    class="h-96 w-full rounded-2xl shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63671.73546085913!2d-73.68700035863989!3d4.124839311802991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2ddfba283211%3A0x537e40041d7b20c2!2sVillavicencio%2C%20Meta!5e0!3m2!1ses-419!2sco!4v1762085982654!5m2!1ses-419!2sco"
                    :allowfullscreen="true"
                    loading="lazy"
                ></iframe>
            </div>

            <!-- SECCIÓN FINAL -->
            <div class="mt-20 text-center" data-aos="fade-up">
                <h4 class="mb-3 text-2xl font-bold text-orinoco-dark">
                    ¿Tienes un proyecto en mente?
                </h4>
                <p class="mb-6 text-gray-700">
                    Nuestro equipo de expertos en energía y telecomunicaciones
                    está listo para ayudarte a hacerlo realidad.
                </p>
                <Button @click="scrollToForm" class="px-8 py-3"
                    >Contáctanos Ahora</Button
                >
            </div>
        </div>

        <!-- SECCIÓN DE OFICINAS -->
        <section class="mt-20 bg-orinoco-primary py-16 text-white">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid gap-16 md:grid-cols-2">
                    <!-- Oficina Principal -->
                    <div
                        class="flex flex-col items-start md:flex-row md:justify-between"
                    >
                        <div>
                            <h3 class="mb-2 text-2xl font-bold">
                                Oficina Principal Bogotá
                            </h3>
                            <p class="text-gray-100">
                                Calle 123 #45-67<br />
                                Bogotá, Colombia<br />
                                Código Postal 110231
                            </p>
                        </div>
                        <div class="mt-4 text-gray-100 md:mt-0">
                            <p>
                                <span class="font-semibold text-white"
                                    >Email:</span
                                >
                                contacto@ecorinoco.com
                            </p>
                            <p>
                                <span class="font-semibold text-white"
                                    >Teléfono:</span
                                >
                                +57 (1) 456 7890
                            </p>
                        </div>
                    </div>

                    <!-- Oficina Regional -->
                    <div
                        class="flex flex-col items-start md:flex-row md:justify-between"
                    >
                        <div>
                            <h3 class="mb-2 text-2xl font-bold">
                                Oficina Regional Meta
                            </h3>
                            <p class="text-gray-100">
                                Carrera 18 #10-25<br />
                                Villavicencio, Meta<br />
                                Código Postal 500001
                            </p>
                        </div>
                        <div class="mt-4 text-gray-100 md:mt-0">
                            <p>
                                <span class="font-semibold text-white"
                                    >Email:</span
                                >
                                regional@ecorinoco.com
                            </p>
                            <p>
                                <span class="font-semibold text-white"
                                    >Teléfono:</span
                                >
                                +57 320 456 7890
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </GuestLayout>
</template>
