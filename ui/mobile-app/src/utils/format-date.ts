export const formatTimestamp = (timestamp: number | Date | string): string => {
  const date = new Date(Number(timestamp))

  // Specify the options for the date format
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  // Format the date according to the specified options
  return date.toLocaleDateString('en-US', options)
}
