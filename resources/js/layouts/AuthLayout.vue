<script setup lang="ts">
import AuthLayout from '@/layouts/auth/AuthSplitLayout.vue';

defineProps<{
    title?: string;
    description?: string;
    subtitle?: string;
    linkText?: string;
    linkRoute?: string;
}>();
</script>

<template>
    <AuthLayout
        :title="title"
        :description="description"
        :subtitle="subtitle"
        :linkText="linkText"
        :linkRoute="linkRoute"
    >
        <slot />
    </AuthLayout>
</template>
