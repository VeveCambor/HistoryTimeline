/**
 * URL obrázku události. Galerie se načte až při prvním použití (dynamický import).
 * Plné URL (http, /) se vrátí beze změny.
 */
export function isFullImageUrl(value: string): boolean {
  return value.startsWith('http') || value.startsWith('/')
}

let galleryChunkPromise: Promise<{ getImage: (path: string) => string }> | null = null

function getGalleryChunk(): Promise<{ getImage: (path: string) => string }> {
  if (!galleryChunkPromise) {
    galleryChunkPromise = import('../data/galleryChunk').then(m => ({ getImage: m.getImage }))
  }
  return galleryChunkPromise
}

export function getEventImageUrl(path: string): Promise<string> {
  if (isFullImageUrl(path)) return Promise.resolve(path)
  return getGalleryChunk().then(({ getImage }) => getImage(path) || '')
}
