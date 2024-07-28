export function capitalize(text: string) {
  if (text.length <= 1) {
    return text.toUpperCase()
  }

  return text.substring(0, 1).toUpperCase().concat(text.substring(1))
}
