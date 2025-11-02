<template>

  <section class="py-20 gradient-orinoco text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="mb-8">
        <div
          class="w-20 h-20 bg-orinoco-accent rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <i class="fas fa-envelope text-orinoco-darker text-3xl"></i>
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
           v-model="form.email"
          type="email"
          color="white"
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
      <transition name="fade">
        <div v-if="message" class="mt-4 p-3 bg-white bg-opacity-20 rounded-lg">
          {{ message }}
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";
import Button from "@/Components/UI/Button.vue";

const message = ref<string>("");

interface NewsletterForm {
  email: string;
}

const form = useForm<NewsletterForm>({
  email: "",
});

const submit = (): void => {
  form.post("/newsletter", {
    onSuccess: (): void => {
      message.value = "¡Suscripción exitosa!";
      form.reset();
      setTimeout(() => {
        message.value = "";
      }, 5000);
    },
  });
};

const email = ref<string>("");
const loading = ref<boolean>(false);

const subscribe = async (): Promise<void> => {
  loading.value = true;
  try {
    const response = await fetch("/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data?.message || "Error");

    message.value = data?.message || "¡Suscripción exitosa!";
    email.value = "";
    setTimeout(() => {
      message.value = "";
    }, 3000);
  } catch (error) {
    message.value = "Error al suscribirse. Por favor intenta nuevamente.";
  } finally {
    loading.value = false;
  }
};
</script>
