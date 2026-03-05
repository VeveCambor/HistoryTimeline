/**
 * Převod hex barvy na rgb řetězec (např. "102, 126, 234").
 */
export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result) {
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)
    return `${r}, ${g}, ${b}`
  }
  return '102, 126, 234' // theme primary fallback
}

/** Převod hex na objekt { r, g, b } pro použití v rgba(). */
export function hexToRgbObject(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Převod hex barvy na rgba řetězec.
 */
export function hexToRgba(hex: string, alpha: number): string {
  const rgb = hexToRgb(hex)
  return `rgba(${rgb}, ${alpha})`
}
