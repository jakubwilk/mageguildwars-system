import { AuthModule } from '@auth/auth.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env['MONGO_DATABASE_URL']),
    AuthModule,
  ],
})
export class AppModule {}
