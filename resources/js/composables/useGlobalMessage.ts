import { ref } from 'vue'

type MessageType = 'success' | 'error' | 'info'

const globalMessage = ref<string | null>(null)
const messageType = ref<MessageType>('info')
const isVisible = ref(false)

export function useGlobalMessage() {
  const showGlobalMessage = (message: string, type: MessageType = 'info', duration = 4000) => {
    globalMessage.value = message
    messageType.value = type
    isVisible.value = true

    // Oculta el mensaje automáticamente después del tiempo indicado
    setTimeout(() => {
      isVisible.value = false
      globalMessage.value = null
    }, duration)
  }

  return {
    globalMessage,
    messageType,
    isVisible,
    showGlobalMessage,
  }
}
