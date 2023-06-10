import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from 'src/application/services/create-user.service';

@Controller('/user')
export class UserController {
  constructor(private createUserService: CreateUserService) {}
  @Post('/create')
  async createUser(@Body() body: any) {
    const user = await this.createUserService.execute(body);

    if (user.isFailure) {
      throw new BadRequestException(user.error);
    }

    return user.getValue();
  }
}
