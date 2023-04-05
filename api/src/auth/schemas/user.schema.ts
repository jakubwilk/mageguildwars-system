import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  login: string
  @Prop({ required: true, unique: true })
  email: string
  @Prop({ required: true, unique: true })
  password: string
  @Prop({ required: false })
  group: string
  @Prop({ required: false, default: false })
  isActive: boolean
  @Prop({ required: false, default: false })
  isLocked: boolean
  @Prop({ required: false, default: new Date() })
  createdAt: Date
  @Prop({ required: false, default: new Date() })
  updatedAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
