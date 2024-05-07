import { useI18n } from 'vue-i18n'

export const useLocalizedDate = () => {
  const { locale, t } = useI18n()

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short'
  }
  /**
   * Receives a date in format YYYY-MM and returns a parsed locale date
   * @param stringDate a String date with format 'YYYY-MM'
   * @returns Locale Date String
   * @example
   * // When the current language is English:
   * getLocaleDate('2024-01') // returns Jan 2024
   * getLocaleDate('2024-09') // returns Sep 2024
   */
  function getDate(stringDate: string) {
    if (stringDate === t('experience.present')) return stringDate
    const [year, month] = stringDate.split('-').map(Number)
    const toDate = new Date(year, month - 1)
    return toDate.toLocaleDateString(locale.value, dateOptions)
  }

  /**
   * Takes two dates and returns the time between in a locale format
   * @param startDate The start of period in format 'YYYY-MM'
   * @param endDate The end of period in format 'YYYY-MM'
   * @returns a string containing the number of months and years between two dates
   * @example
   * // When the current language is English:
   * getLocaleTimeBetween('2023-07','2024-01') // returns "7 months"
   * getLocaleTimeBetween('2022-01','2024-03') // returns "2 years, 3 months"
   */
  function getTimeBetween(startDate: string | Date, endDate: string | Date) {
    const start = new Date(startDate)
    const end = endDate === t('experience.present') ? new Date() : new Date(endDate)
    const total_months =
      end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear())
    const months = total_months % 12
    const years = Math.floor(total_months / 12)
    return years == 0
      ? `${months} ${t('experience.month', months)}`
      : `${years} ${t('experience.year', years)}, ${months} ${t('experience.month', months)}`
  }

  return {
    getDate,
    getTimeBetween
  }
}
