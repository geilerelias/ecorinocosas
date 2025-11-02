<template>
    <button 
        :type="type"
        :disabled="loading || disabled"
        :class="buttonClasses"
        @click="handleClick"
    >
        <LoadingSpinner v-if="loading" class="mr-2" />
        <i v-if="icon && !loading" :class="icon" class="mr-2"></i>
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';

// Props con tipos
interface Props {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    icon?: string;
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false
});

// Emits con tipos
interface Emits {
  (e: 'click', event: MouseEvent): void;
}

const emit = defineEmits<Emits>();

// Computadas con tipos
const buttonClasses = computed<string[]>(() => {
    const base = 'inline-flex items-center justify-center font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants: Record<string, string> = {
        primary: 'bg-orinoco-primary text-white hover:bg-orinoco-dark focus:ring-orinoco-primary',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-600',
        outline: 'border border-orinoco-primary text-orinoco-primary hover:bg-orinoco-primary hover:text-white focus:ring-orinoco-primary',
        ghost: 'text-orinoco-primary hover:bg-orinoco-light focus:ring-orinoco-primary'
    };
    
    const sizes: Record<string, string> = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };
    
    return [
        base,
        variants[props.variant],
        sizes[props.size],
        {
            'opacity-50 cursor-not-allowed': props.disabled || props.loading
        }
    ];
});

// Métodos con tipos
const handleClick = (event: MouseEvent): void => {
    emit('click', event);
};
</script>