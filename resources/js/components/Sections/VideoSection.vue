<template>
    <section class="bg-orinoco-dark py-16">
        <div class="container mx-auto px-6 text-center">
            <h2 class="mb-6 text-orinoco-light text-3xl font-bold md:text-4xl">
                Nuestra energía en acción
            </h2>
            <p class="mb-10 text-gray-300">
                Así impulsamos un futuro sostenible con innovación y energía limpia.
            </p>

            <div class="relative mx-auto aspect-video max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
                <video
                    autoplay
                    muted
                    loop
                    playsinline
                    preload="metadata"
                    class="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="@/../videos/presentacion-ecorinoco.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
            </div>
        </div>
    </section>
</template>
