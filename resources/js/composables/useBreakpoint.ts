import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export function useBreakpoint() {
    const breakpoint = ref<Breakpoint>('xs');

    // 📱 Breakpoints según TailwindCSS
    const queries: Record<Breakpoint, string> = {
        xs: '(max-width: 639.98px)',
        sm: '(min-width: 640px) and (max-width: 767.98px)',
        md: '(min-width: 768px) and (max-width: 1023.98px)',
        lg: '(min-width: 1024px) and (max-width: 1279.98px)',
        xl: '(min-width: 1280px)',
    };

    const mediaQueryLists: Record<Breakpoint, MediaQueryList> = {};

    const updateBreakpoint = () => {
        for (const key in queries) {
            if (mediaQueryLists[key as Breakpoint]?.matches) {
                breakpoint.value = key as Breakpoint;
                break;
            }
        }
    };

    onMounted(() => {
        for (const key in queries) {
            const k = key as Breakpoint;
            mediaQueryLists[k] = window.matchMedia(queries[k]);
            mediaQueryLists[k].addEventListener('change', updateBreakpoint);
        }
        updateBreakpoint();
    });

    onBeforeUnmount(() => {
        for (const key in mediaQueryLists) {
            const k = key as Breakpoint;
            mediaQueryLists[k].removeEventListener('change', updateBreakpoint);
        }
    });

    // 💡 Individual
    const isXs = computed(() => breakpoint.value === 'xs');
    const isSm = computed(() => breakpoint.value === 'sm');
    const isMd = computed(() => breakpoint.value === 'md');
    const isLg = computed(() => breakpoint.value === 'lg');
    const isXl = computed(() => breakpoint.value === 'xl');

    // 📐 RANGOS COMBINADOS
    const isSmAndUp = computed(() =>
        ['sm', 'md', 'lg', 'xl'].includes(breakpoint.value),
    );
    const isMdAndUp = computed(() =>
        ['md', 'lg', 'xl'].includes(breakpoint.value),
    );
    const isLgAndUp = computed(() => ['lg', 'xl'].includes(breakpoint.value));
    const isMdAndLow = computed(() =>
        ['xs', 'sm', 'md'].includes(breakpoint.value),
    );
    const isLgAndLow = computed(() =>
        ['xs', 'sm', 'md', 'lg'].includes(breakpoint.value),
    );
    const isSmAndLow = computed(() => ['xs', 'sm'].includes(breakpoint.value));

    // 🧭 Agrupaciones prácticas
    const isMobile = computed(() => ['xs', 'sm'].includes(breakpoint.value));
    const isTablet = computed(() => breakpoint.value === 'md');
    const isDesktop = computed(() => ['lg', 'xl'].includes(breakpoint.value));

    return {
        breakpoint,

        // individuales
        isXs,
        isSm,
        isMd,
        isLg,
        isXl,

        // rangos combinados
        isSmAndUp,
        isMdAndUp,
        isLgAndUp,
        isSmAndLow,
        isMdAndLow,
        isLgAndLow,

        // agrupaciones
        isMobile,
        isTablet,
        isDesktop,
    };
}
