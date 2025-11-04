<template>
    <div class="rounded-xl bg-white p-6 shadow">
        <!-- Header -->
        <h2 class="text-lg font-semibold text-gray-800">{{ title }}</h2>
        <div
            class="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
            <!-- Buscador -->
            <div class="relative">
                <Search class="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
                <input
                    v-model="search"
                    type="text"
                    placeholder="Buscar..."
                    class="rounded-lg border py-2 pr-3 pl-9 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <button
                    v-if="search"
                    @click="search = ''"
                    class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                    <X class="h-4 w-4" />
                </button>
            </div>
            <!-- Botón agregar -->
            <button
                v-if="showAddButton"
                @click="$emit('add')"
                class="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
            >
                <component :is="addButtonIcon" class="h-4 w-4" />
                {{ addButtonText }}
            </button>
        </div>

        <!-- Tabla -->
        <div class="overflow-x-auto rounded-lg border border-gray-200">
            <table class="min-w-full divide-y divide-gray-200 text-sm">
                <thead class="bg-gray-50">
                    <tr>
                        <th v-if="selectable" class="px-4 py-3 text-left">
                            <input
                                type="checkbox"
                                v-model="selectAll"
                                @change="toggleSelectAll"
                                class="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                        </th>
                        <th
                            v-for="col in columns"
                            :key="col.key"
                            @click="toggleSort(col.key)"
                            class="cursor-pointer px-4 py-3 text-left font-semibold tracking-wider text-gray-600 uppercase select-none"
                        >
                            <div class="flex items-center gap-1">
                                {{ col.label }}
                                <ChevronUp
                                    v-if="
                                        sortColumn === col.key &&
                                        sortDirection === 'asc'
                                    "
                                    class="h-4 w-4 text-green-600"
                                />
                                <ChevronDown
                                    v-if="
                                        sortColumn === col.key &&
                                        sortDirection === 'desc'
                                    "
                                    class="h-4 w-4 text-green-600"
                                />
                            </div>
                        </th>
                        <th
                            class="px-4 py-3 text-right font-semibold tracking-wider text-gray-600 uppercase"
                        >
                            Acciones
                        </th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-100">
                    <tr
                        v-for="item in paginatedData"
                        :key="item.id"
                        class="transition hover:bg-gray-50"
                    >
                        <td v-if="selectable" class="px-4 py-2">
                            <input
                                type="checkbox"
                                :value="item.id"
                                v-model="selected"
                                class="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                        </td>

                        <td
                            v-for="col in columns"
                            :key="col.key"
                            class="px-4 py-2 text-gray-700"
                        >
                            {{ item[col.key] }}
                        </td>

                        <td class="space-x-2 px-4 py-2 text-right">
                            <button
                                v-for="action in actions"
                                :key="action.label"
                                @click="action.onClick(item)"
                                :class="[
                                    'inline-flex items-center justify-center rounded p-1 transition hover:bg-gray-100',
                                    action.color,
                                ]"
                            >
                                <component :is="action.icon" class="h-4 w-4" />
                            </button>
                        </td>
                    </tr>

                    <tr v-if="paginatedData.length === 0">
                        <td
                            :colspan="columns.length + (selectable ? 2 : 1)"
                            class="py-4 text-center text-gray-500"
                        >
                            No se encontraron resultados.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Footer -->
        <div
            class="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
            <!-- Selector cantidad por página -->
            <div class="flex items-center gap-2 text-sm text-gray-600">
                <span>Mostrar</span>
                <select
                    v-model.number="itemsPerPage"
                    class="rounded-lg border px-2 py-1 focus:ring-2 focus:ring-green-500"
                >
                    <option v-for="n in [10, 25, 50, 100]" :key="n" :value="n">
                        {{ n }}
                    </option>
                </select>
                <span>elementos</span>
            </div>

            <!-- Botón eliminar múltiple -->
            <button
                v-if="selectable && selected.length > 0"
                @click="$emit('deleteMultiple', selected)"
                class="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
            >
                <Trash2 class="h-4 w-4" />
                Eliminar ({{ selected.length }})
            </button>

            <!-- Paginación -->
            <div class="flex items-center gap-1">
                <button
                    @click="previousPage"
                    :disabled="currentPage === 1"
                    class="rounded border p-2 hover:bg-gray-100 disabled:opacity-50"
                >
                    <ChevronLeft class="h-4 w-4" />
                </button>

                <button
                    v-for="page in totalPages"
                    :key="page"
                    @click="currentPage = page"
                    :class="[
                        'rounded border px-3 py-1 text-sm',
                        currentPage === page
                            ? 'border-green-600 bg-green-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100',
                    ]"
                >
                    {{ page }}
                </button>

                <button
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                    class="rounded border p-2 hover:bg-gray-100 disabled:opacity-50"
                >
                    <ChevronRight class="h-4 w-4" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Search,
    Trash2,
    X,
} from 'lucide-vue-next';
import { computed, ref, watch } from 'vue';

interface Column {
    key: string;
    label: string;
}

interface Action {
    label: string;
    icon: any;
    color?: string;
    onClick: (item: any) => void;
}

const props = defineProps<{
    title: string;
    data: any[];
    columns: Column[];
    actions: Action[];
    selectable?: boolean;
    showAddButton?: boolean;
    addButtonText?: string;
    addButtonIcon?: any;
}>();

const emit = defineEmits<{
    (e: 'add'): void;
    (e: 'update:selected', selected: number[]): void;
    (e: 'deleteMultiple', selected: number[]): void;
}>();

const search = ref('');
const selected = ref<number[]>([]);
const selectAll = ref(false);

const currentPage = ref(1);
const itemsPerPage = ref(10);
const sortColumn = ref<string | null>(null);
const sortDirection = ref<'asc' | 'desc'>('asc');

/* --- Watchers --- */
watch(selected, (val) => emit('update:selected', val));

/* --- Computed --- */
const filteredData = computed(() => {
    if (!search.value) return props.data;
    const term = search.value.toLowerCase();
    return props.data.filter((item) =>
        Object.values(item).some((v) => String(v).toLowerCase().includes(term)),
    );
});

// Ordenamiento
const sortedData = computed(() => {
    if (!sortColumn.value) return filteredData.value;
    return [...filteredData.value].sort((a, b) => {
        const valA = a[sortColumn.value];
        const valB = b[sortColumn.value];
        if (valA == null || valB == null) return 0;

        if (typeof valA === 'number' && typeof valB === 'number') {
            return sortDirection.value === 'asc' ? valA - valB : valB - valA;
        }
        return sortDirection.value === 'asc'
            ? String(valA).localeCompare(String(valB))
            : String(valB).localeCompare(String(valA));
    });
});

// Paginación
const totalPages = computed(() =>
    Math.ceil(sortedData.value.length / itemsPerPage.value),
);
const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return sortedData.value.slice(start, start + itemsPerPage.value);
});

// Resetear página cuando cambie cantidad o filtro
watch([itemsPerPage, sortedData], () => (currentPage.value = 1));

/* --- Métodos --- */
const toggleSort = (column: string) => {
    if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn.value = column;
        sortDirection.value = 'asc';
    }
};

const toggleSelectAll = () => {
    const visibleIds = paginatedData.value.map((i) => i.id);
    if (selectAll.value) {
        selected.value = Array.from(
            new Set([...selected.value, ...visibleIds]),
        );
    } else {
        selected.value = selected.value.filter(
            (id) => !visibleIds.includes(id),
        );
    }
};

const previousPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>
