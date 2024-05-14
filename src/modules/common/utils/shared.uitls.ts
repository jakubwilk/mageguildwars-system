import { ISelectOption } from 'common/models'

export const loadEnvVariable = (name: string): string => {
  return import.meta.env[name] || ''
}

const rootPanelUrl = import.meta.env['VITE_ADMIN_PANEL_URL'] || '/'

export const routeKeys = {
  HOME: '/',
  ROOT_PANEL: import.meta.env['VITE_ADMIN_PANEL_URL'] || '/',
  ROOT_PANEL_USERS: `${rootPanelUrl}/users`,
  ROOT_PANEL_AREAS: `${rootPanelUrl}/areas`,
  ROOT_PANEL_MAGIC: `${rootPanelUrl}/magic`,
  ROOT_PANEL_SPELLS: `${rootPanelUrl}/spells`,
  ROOT_PANEL_SKILLS: `${rootPanelUrl}/skills`,
  LOGIN_ISSUES: '/login-issues',
  USERS: '/users',
  MEDALS: '/medals',
  RULES: '/rules',
}

export const ROUTES = {
  home: () => '/',
  rootPanel: () => import.meta.env['VITE_ADMIN_PANEL_URL'] || '/',
  rootPanelUsers: () => '/users',
  rootPanelAreas: () => '/areas',
  loginIssues: () => '/login-issues',
  users: () => '/users',
  medals: () => '/medals',
  rules: () => '/rules',
}

export const DATE_FORMAT_WITH_TIME = 'DD MMM YYYY, HH:mm'
export const DATE_FORMAT_WITH_NO_TIME = 'DD MMM YYYY'

export const BOOLEAN_SELECT_OPTIONS: ISelectOption[] = [
  {
    id: 1,
    label: 'Tak',
    value: true,
  },
  {
    id: 2,
    label: 'Nie',
    value: false,
  },
]

export const SORT_SELECT_OPTIONS: ISelectOption[] = [
  {
    id: 1,
    label: 'Rosnąco',
    value: 'asc',
  },
  {
    id: 2,
    label: 'Malejąco',
    value: 'desc',
  },
]
