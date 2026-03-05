import { useState, useEffect } from 'react'
import { getEventImageUrl, isFullImageUrl } from '../utils/getEventImage'

/**
 * Hook pro zobrazení obrázku události – řeší jak plné URL, tak lazy loading z galerie.
 * @returns [url, loading] – url je undefined, dokud se nenačte (u lazy)
 */
export function useEventImage(path: string | undefined): [string | undefined, boolean] {
  const [url, setUrl] = useState<string | undefined>(() => {
    if (!path) return undefined
    if (isFullImageUrl(path)) return path
    return undefined
  })
  const [loading, setLoading] = useState(!!path && !isFullImageUrl(path))

  useEffect(() => {
    if (!path || isFullImageUrl(path)) {
      setLoading(false)
      return
    }
    let cancelled = false
    setLoading(true)
    getEventImageUrl(path)
      .then((resolved) => {
        if (!cancelled) {
          setUrl(resolved)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [path])

  return [url, loading]
}
