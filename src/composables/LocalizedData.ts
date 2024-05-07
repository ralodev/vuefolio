import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

/**
 * Returns an array of <T> objects from i18n files, whenever the locale is updated, the objects are fetched again in the current language
 * @param dataKey the name or path of the objects in i18n messages
 * @returns a reactive array of objects
 */
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
