type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | { [key: string]: boolean | undefined | null }

export function clsx(...classes: ClassValue[]): string {
  return classes
    .flatMap((cls) => {
      if (!cls) return []
      if (typeof cls === 'string' || typeof cls === 'number') return [cls]
      if (Array.isArray(cls)) return clsx(...cls).split(' ')
      if (typeof cls === 'object') {
        return Object.keys(cls).filter(
          (key) => (cls as Record<string, boolean | undefined | null>)[key],
        )
      }
      return []
    })
    .join(' ')
}
