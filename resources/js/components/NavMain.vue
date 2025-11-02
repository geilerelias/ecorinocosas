<script setup lang="ts">
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { ChevronDown } from 'lucide-vue-next';
import { urlIsActive } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';

defineProps<{
    items: NavItem[];
}>();

const page = usePage();

// Estado reactivo para manejar múltiples submenús abiertos
const openItems = ref<Record<string, boolean>>({});

const toggle = (name: string) => {
    openItems.value[name] = !openItems.value[name];
};
</script>

<template>
    <SidebarGroup class="px-2 py-0">
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem
                v-for="item in items"
                :key="item.title"
                class="transition-all duration-300"
            >
                <!-- Enlaces sin hijos -->
                <SidebarMenuButton
                    v-if="!item.children"
                    as-child
                    :is-active="urlIsActive(item.href, page.url)"
                    :tooltip="item.title"
                >
                    <Link :href="item.href">
                        <component :is="item.icon" />
                        <span>{{ item.title }}</span>
                    </Link>
                </SidebarMenuButton>

                <!-- Enlaces con submenú -->
                <template v-else>
                    <SidebarMenuButton
                        type="button"
                        class="flex items-center justify-between"
                        @click="toggle(item.title)"
                    >
                        <div class="flex items-center gap-2">
                            <component :is="item.icon" />
                            <span>{{ item.title }}</span>
                        </div>
                        <ChevronDown
                            class="ml-auto h-4 w-4 transition-transform duration-200"
                            :class="{ 'rotate-180': openItems[item.title] }"
                        />
                    </SidebarMenuButton>

                    <!-- Submenú -->
                    <transition name="accordion">
                        <SidebarMenuSub
                            v-if="openItems[item.title]"
                            class="overflow-hidden"
                        >
                            <SidebarMenuSubItem
                                v-for="sub in item.children"
                                :key="sub.title"
                            >
                                <SidebarMenuSubButton as-child>
                                    <Link :href="sub.href">
                                        <component :is="sub.icon" />
                                        <span>{{ sub.title }}</span>
                                    </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </transition>
                </template>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
    transition: all 0.25s ease;
    overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
    opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
    max-height: 500px; /* Ajustable según el tamaño esperado */
    opacity: 1;
}
</style>
