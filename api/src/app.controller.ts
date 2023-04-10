import { Controller, Get } from '@nestjs/common'

@Controller('app')
export class UserController {
  @Get('/')
  async sayHello() {
    return { text: 'Hello' }
  }
}
