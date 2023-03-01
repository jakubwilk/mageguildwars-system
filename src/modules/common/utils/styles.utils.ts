export const important = (value: string | number): string => {
  const fixedValue = typeof value === 'number' && `${value}px`

  return `${fixedValue || value} !important`
}
