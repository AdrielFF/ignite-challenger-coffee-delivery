export function valueWithOnlyNumber(value: string) {
  return value.replace(/\D/g, '')
}
export function cepValueFormatted(value: string) {
  return valueWithOnlyNumber(value).replace(/^(\d{5})(\d)/, '$1-$2')
}
