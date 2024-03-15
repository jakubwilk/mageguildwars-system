export const loadEnvVariable = (name: string): string => {
  return import.meta.env[name] || ''
}
