export enum UserSettingsTabEnum {
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  INFORMATION = 'INFORMATION',
}

export interface IChangeEmailFormValues {
  currentEmail: string
  newEmail: string
}
