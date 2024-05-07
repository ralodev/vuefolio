import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

export function useLocalizedData<T>(dataKey: string) {
  const { locale, tm } = useI18n()
  const data = ref<T>()

  const loadData = () => {
    data.value = tm(dataKey) as T
  }

  watch(
    () => locale.value,
    () => {
      loadData()
    },
    { immediate: true }
  )

  loadData()

  return {
    data
  }
}
