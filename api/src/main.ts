import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as process from 'process'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env['CLIENT_URL'])
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept')
    next()
  })
  app.enableCors({
    origin: process.env['CLIENT_URL'],
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: '*',
  })
  app.use(cookieParser())
  await app.listen(parseInt(process.env['API_PORT']))
}
bootstrap()
