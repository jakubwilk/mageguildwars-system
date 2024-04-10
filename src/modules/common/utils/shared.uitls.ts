export const loadEnvVariable = (name: string): string => {
  return import.meta.env[name] || ''
}

export enum routeEnum {
  HOME = '/',
}

export const ROUTES = {
  home: () => '/',
}
