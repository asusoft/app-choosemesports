export const ISOToDate = (itc: string) => {
  const converted = new Date(itc)
  return converted
}

export const formatDate = (date: Date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear().toString()

  return `${day < 10 ? `0` + day : day}.${month < 10 ? `0` + month : month}.${year.slice(
    -2,
  )}`
}

export const formatDateFromISO = (iso: string) => formatDate(ISOToDate(iso))

export const formatTime = (date: Date) => {
  let hours = date.getHours()
  let minutes = date.getMinutes()

  const frmtdHours = hours < 10 ? '0' + hours : hours.toString()
  const frmtdMinutes = minutes < 10 ? '0' + minutes : minutes

  return `${frmtdHours}:${frmtdMinutes}`
}

export const formatTimeFromISO = (iso: string) => formatTime(ISOToDate(iso))

export const areISODatesEqual = (a: string, b: string) =>
  ISOToDate(a).toDateString() === ISOToDate(b).toDateString()

export const isToday = (date: Date) => {
  const today = new Date()

  return (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  )
}

export const isTodayFromISO = (iso: string) => isToday(ISOToDate(iso))

export const formatTimeOrDate = (date: Date) => {
  if (isToday(date)) {
    return formatTime(date)
  }
  return formatDate(date)
}

export const formatTimeOrDateFromISO = (iso: string) => formatTimeOrDate(ISOToDate(iso))

export const formatDateToMonthYear = (iso: string): string => {
  const date = ISOToDate(iso)

  const monthFormatter = new Intl.DateTimeFormat('ru-RU', { month: 'long' })
  const yearFormatter = new Intl.DateTimeFormat('ru-RU', { year: 'numeric' })

  const month = monthFormatter.format(date)
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1)

  const year = yearFormatter.format(date)

  return `${capitalizedMonth} ${year}`
}
