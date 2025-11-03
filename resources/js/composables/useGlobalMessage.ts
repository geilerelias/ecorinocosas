import { ref } from 'vue';
import Swal from 'sweetalert2';

type MessageType = 'success' | 'error' | 'info' | 'warning';

const globalMessage = ref<string | null>(null);
const messageType = ref<MessageType>('info');
const isVisible = ref(false);

export function useGlobalMessage() {
    const showGlobalMessage = (
        message: string,
        type: MessageType = 'info',
        duration = 4000
    ) => {
        globalMessage.value = message;
        messageType.value = type;
        isVisible.value = true;

        // ✅ Si SweetAlert2 está disponible, usa toast moderno
        if (Swal) {
            const colors: Record<string, string> = {
                success: '#69a936', // Verde del tema
                error: '#d9534f',
                info: '#3b82f6',
                warning: '#f59e0b',
            };

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: type,
                title: message,
                background: '#fff',
                color: '#333',
                showConfirmButton: false,
                timer: duration,
                timerProgressBar: true,
                customClass: {
                    popup: 'rounded-xl shadow-lg',
                },
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });
        } else {
            // 🧩 Fallback si SweetAlert no está cargado
            console.warn('SweetAlert2 no detectado, usando fallback visual.');

            setTimeout(() => {
                isVisible.value = false;
                globalMessage.value = null;
            }, duration);
        }
    };

    return {
        globalMessage,
        messageType,
        isVisible,
        showGlobalMessage,
    };
}
