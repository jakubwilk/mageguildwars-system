import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: '*',
    preflightContinue: true,
    methods: '*',
    allowedHeaders: '*',
  })
  app.use(cookieParser())
  await app.listen(parseInt(process.env['API_PORT']))
}
bootstrap()
