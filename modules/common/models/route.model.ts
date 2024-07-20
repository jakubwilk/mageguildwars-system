export enum RouteEnum {
  HOME = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  ACCOUNT = '/account',
  SETTINGS = '/settings',
  GM_PANEL = '/panel',
  ADMIN_DASHBOARD = '/dashboard',
  ADD_CHARACTER = '/character/create'
}

export const ROUTES = {
  HOME: () => '/',
  LOGIN: () => '/login',
  REGISTER: () => '/register',
  ACCOUNT: () => '/account',
  SETTINGS: () => '/settings',
  GM_PANEL: () => '/panel',
  ADMIN_DASHBOARD: () => '/dashboard',
  ADD_CHARACTER: () => '/character/create'
}
