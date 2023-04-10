import { Controller, Get } from '@nestjs/common'

@Controller('')
export class UserController {
  @Get()
  async sayHello() {
    return { text: 'Hello' }
  }
}
