export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date))
}
