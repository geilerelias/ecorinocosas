<template>
    <section class="py-20 gradient-orinoco text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="mb-8">
                <div
                    class="w-20 h-20 bg-orinoco-accent rounded-full flex items-center justify-center mx-auto mb-4"
                >
                    <font-awesome-icon
                        :icon="['fas', 'envelope']"
                        class="text-orinoco-darker text-3xl"
                    />
                </div>
            </div>

            <h2 class="text-4xl font-bold mb-4">Mantente Conectado</h2>
            <p class="text-xl mb-8 text-green-50">
                Recibe las últimas noticias sobre energía y telecomunicaciones
            </p>

            <form
                @submit.prevent="subscribe"
                class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
                <input
                    v-model="email"
                    type="email"
                    placeholder="Ingresa tu correo"
                    class="flex-1 px-6 py-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-orinoco-accent focus:ring-opacity-50"
                    required
                />
                <button
                    type="submit"
                    :disabled="loading"
                    class="bg-orinoco-accent text-orinoco-darker px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition transform hover:scale-105 disabled:opacity-50"
                >
                    {{ loading ? "Suscribiendo..." : "Suscribirse" }}
                </button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "vue";

const email = ref("");
const loading = ref(false);

const subscribe = async () => {
    if (!email.value) return;

    loading.value = true;
    try {
        const { data } = await axios.post("/newsletter", { email: email.value });

        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: data.message || "¡Suscripción exitosa!",
            showConfirmButton: false,
            timer: 3000,
            background: "#1f2937",
            color: "#fff",
            iconColor: "#facc15",
        });

        email.value = "";
    } catch (error: any) {


        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title:
                error.response?.data?.message ||
                "Error al suscribirse. Por favor intenta nuevamente.",
            showConfirmButton: false,
            timer: 3500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
    } finally {
        loading.value = false;
    }
};
</script>
