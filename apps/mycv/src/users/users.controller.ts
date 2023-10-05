import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    const { email, password } = body;
    const user = await this.authService.signup(email, password);
    return user;
  }
  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findOne(parseInt(id));
    return user;
  }

  @Get()
  async findAllUsers(@Query('email') email: string) {
    const users = await this.userService.find({ email });
    return users;
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    const deletedUser = await this.userService.remove(parseInt(id));
    return deletedUser;
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    const updatedUser = await this.userService.update(parseInt(id), body);
    return updatedUser;
  }
}
