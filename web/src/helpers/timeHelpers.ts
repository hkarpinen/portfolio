export function convertUnixUtcTimeToLocaleTime(utcTime: number) {
  return new Date(utcTime * 1000).toLocaleString('default', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}