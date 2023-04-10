import { UsersGroup } from '@user/models'
import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true, unique: true, allowNull: false })
  id: number
  @Column({ unique: true, allowNull: false })
  uid: string
  @Column({ unique: true, allowNull: false })
  login: string
  @Column({ unique: true, allowNull: false })
  slug: string
  @Column({ unique: true, allowNull: false })
  email: string
  @Column({ allowNull: false })
  password: string
  @Column({ allowNull: false, defaultValue: UsersGroup.USER })
  group: UsersGroup
  @Column({ unique: true, defaultValue: '' })
  refreshToken: string
  @Column({ defaultValue: false })
  isActive: boolean
  @Column({ defaultValue: false })
  isCreateProfileEnabled: boolean
  @Column({ defaultValue: false })
  isLocked: boolean
  @Column({ defaultValue: new Date() })
  createdAt: Date
  @Column({ defaultValue: new Date() })
  updatedAt: Date
}
