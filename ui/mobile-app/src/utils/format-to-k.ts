export const formatToK = (number: number): string => {
  if (number < 1000) {
    return number.toString()
  } else {
    return `${(number / 1000).toFixed(1)}k`
  }
}
