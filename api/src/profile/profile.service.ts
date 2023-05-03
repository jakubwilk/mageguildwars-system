import { HttpStatus, Injectable } from '@nestjs/common'
import { Profile as ProfileModel } from '@prisma/client'
import { PrismaService } from '@prisma/prisma.service'
import { MAX_PROFILES_COUNT } from '@profile/constants'
import { ProfileCreateParams } from '@profile/models'
import { createSlug } from '@utils/database.helper'
import { ERROR_MESSAGES, HttpError } from '@utils/error.helper'

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) {}

  async isNextProfileAllowed(userId: string): Promise<boolean> {
    try {
      const profile: ProfileModel[] = await this.prismaService.profile.findMany({ where: { uid: userId }, orderBy: { createdAt: 'asc' } })
      return profile.length !== MAX_PROFILES_COUNT
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.PROFILE.NO_MORE_PROFILES)
    }
  }

  async isProfileNameFree(name: string): Promise<boolean> {
    try {
      const profile: ProfileModel = await this.prismaService.profile.findUnique({ where: { name } })
      return profile === null
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.PROFILE.PROFILE_WITH_NAME_EXIST)
    }
  }

  async getProfiles(userId: string): Promise<ProfileModel[]> {
    try {
      return await this.prismaService.profile.findMany({ where: { uid: userId }, orderBy: { createdAt: 'asc' } })
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.PROFILE.ISSUE_WITH_GET_PROFILES)
    }
  }

  async createProfile(userId: string, profile: ProfileCreateParams): Promise<ProfileModel[]> {
    try {
      await this.isNextProfileAllowed(userId)
      await this.isProfileNameFree(profile.name)
      const dataToCreate = {
        ...profile,
        uid: userId,
        slug: createSlug(profile.name),
      }
      await this.prismaService.profile.create({ data: dataToCreate })
      return await this.prismaService.profile.findMany({ where: { uid: userId }, orderBy: { createdAt: 'asc' } })
    } catch (err) {
      throw HttpError(HttpStatus.BAD_REQUEST, ERROR_MESSAGES.PROFILE.ISSUE_WITH_CREATE_PROFILE)
    }
  }
}
