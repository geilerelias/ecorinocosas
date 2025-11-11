<script setup lang="ts">
import ContactBanner from '@/../images/hero/contact-banner.jpg';
import Hero from '@/components/Hero.vue';
import FormContactSection from '@/components/Sections/FormContactSection.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import Button from '@/components/ui/Button.vue';

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

const scrollToForm = () => {
    const formElement = document.querySelector('form');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>
>

<template>
    <GuestLayout >
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
                    <FormContactSection id="form" />
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
                        <h4 class="mb-3 text-lg font-semibold text-orinoco-dark">
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
                        <h4 class="mb-4 text-lg font-semibold text-orinoco-dark">
                            Síguenos
                        </h4>

                        <div class="flex space-x-4">
                            <a
                                v-for="s in socials"
                                :key="s.name"
                                :href="s.href"
                                target="_blank"
                                rel="noopener"
                                class="flex h-10 w-10 transform items-center justify-center rounded-full bg-primary/10 transition-transform hover:-translate-y-1 hover:scale-110 hover:bg-orinoco-dark/20"
                                :aria-label="s.name"
                            >
                                <font-awesome-icon
                                    :icon="s.icon"
                                    class="text-2xl text-orinoco-primary transition-transform duration-300 group-hover:scale-110"
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
                    Nuestro equipo de expertos en energía y telecomunicaciones está
                    listo para ayudarte a hacerlo realidad.
                </p>
                <Button @click="scrollToForm" class="px-8 py-3"
                >Contáctanos Ahora</Button
                >
            </div>
        </div>

        <!-- SECCIÓN OFICINA REGIONAL META -->
        <section class="mt-20 bg-orinoco-primary py-20 text-white">
            <div class="mx-auto max-w-4xl px-6 text-center">
                <!-- Título -->
                <h2 class="text-3xl font-bold tracking-tight">Oficina Regional Meta</h2>
                <p class="mt-3 text-gray-100">
                    Comunícate con nosotros o visítanos en nuestra sede principal del Meta.
                </p>

                <!-- Tarjeta de contacto -->
                <div
                    class="mt-10 rounded-2xl bg-white/10 p-8 text-left backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/15"
                >
                    <!-- Dirección -->
                    <div class="flex items-start gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-orinoco-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                            />
                        </svg>
                        <p class="text-gray-100 leading-relaxed">
                            Villavicencio, Meta, Colombia<br />
                            Código Postal 500001
                        </p>
                    </div>

                    <!-- Correo -->
                    <div class="mt-5 flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-orinoco-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M21.75 5.75l-9.75 6.5-9.75-6.5M2.25 5.75h19.5v12.5a1.25 1.25 0 01-1.25 1.25H3.5a1.25 1.25 0 01-1.25-1.25V5.75z"
                            />
                        </svg>
                        <a
                            href="mailto:contacto@ecorinocosas.com"
                            class="text-gray-100 hover:text-white transition-colors"
                        >
                            contacto@ecorinocosas.com
                        </a>
                    </div>

                    <!-- Teléfono -->
                    <div class="mt-5 flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-orinoco-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M2.25 6.75A3 3 0 015.25 3.75h2.25a.75.75 0 01.75.75v3.25a.75.75 0 01-.75.75H6a.75.75 0 00-.75.75v2a11.25 11.25 0 0011.25 11.25h2a.75.75 0 00.75-.75v-1.5a.75.75 0 01.75-.75h3.25a.75.75 0 01.75.75v2.25a3 3 0 01-3 3H18A15.75 15.75 0 012.25 6.75z"
                            />
                        </svg>
                        <a
                            href="tel:+573125039694"
                            class="text-gray-100 hover:text-white transition-colors"
                        >
                            +57 312 5039694
                        </a>
                    </div>

                    <!-- Horario -->
                    <div class="mt-5 flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-orinoco-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p class="text-gray-100">
                            Lunes a Viernes: 8:00 a.m. - 5:00 p.m.<br />
                            Sábados: 8:00 a.m. - 12:00 p.m.
                        </p>
                    </div>

                    <!-- Botón WhatsApp -->
                    <div class="mt-8 text-center">
                        <a
                            href="https://wa.me/573125039694?text=Hola%20Eco%20Orinoco%2C%20quisiera%20más%20información%20por%20favor."
                            target="_blank"
                            class="inline-flex items-center gap-2 rounded-full bg-[#00db40] px-6 py-3 font-semibold text-black shadow-md transition-all duration-300 hover:bg-green-600 hover:scale-[1.03]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.297-.496.099-.198.05-.372-.025-.52-.075-.149-.67-1.611-.917-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.084 4.487.711.306 1.265.489 1.697.626.713.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                                />
                            </svg>
                            Enviar mensaje por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </GuestLayout>
</template>
