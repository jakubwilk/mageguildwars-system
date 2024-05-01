export const loadEnvVariable = (name: string): string => {
  return import.meta.env[name] || ''
}

export enum routeEnum {
  HOME = '/',
  ROOT_PANEL = import.meta.env['VITE_ADMIN_PANEL_URL'] || '/',
  LOGIN_ISSUES = '/login-issues',
  USERS = '/users',
  MEDALS = '/medals',
  RULES = '/rules',
}

export const ROUTES = {
  home: () => '/',
  rootPanel: () => import.meta.env['VITE_ADMIN_PANEL_URL'] || '/',
  loginIssues: () => '/login-issues',
  users: () => '/users',
  medals: () => '/medals',
  rules: () => '/rules',
}

export const DATE_FORMAT_WITH_TIME = 'DD MMM YYYY, HH:mm'
export const DATE_FORMAT_WITH_NO_TIME = 'DD MMM YYYY'
