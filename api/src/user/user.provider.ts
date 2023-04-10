import { User } from '@user/entities/user.entity'

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
]
