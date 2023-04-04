import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({ origin: 'http://localhost:3000', credentials: true })
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Mage Guild Wars API')
    .setDescription('API description for MGW server')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)
  app.use(cookieParser())
  await app.listen(3001)
}
bootstrap()
