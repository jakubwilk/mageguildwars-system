export const loadEnvVariable = (name: string): string => {
  return import.meta.env[name] || ''
}

export enum routeEnum {
  HOME = '/',
  LOGIN_ISSUES = '/login-issues',
  USERS = '/users',
  MEDALS = '/medals',
  RULES = '/rules',
}

export const ROUTES = {
  home: () => '/',
  loginIssues: () => '/login-issues',
  users: () => '/users',
  medals: () => '/medals',
  rules: () => '/rules',
}
