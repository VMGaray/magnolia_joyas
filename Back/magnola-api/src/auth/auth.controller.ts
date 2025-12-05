import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ChangePasswordDto, LoginDto, RegisterDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: RegisterDto) {
    return this.authService.registerUser(user);
  }

  @Post('login')
  async login(@Body() credentials: LoginDto) {
    return this.authService.loginUser(credentials);
  }

  @Get('profile/:id')
  async getProfile(@Param('id') id: string) {
    return this.authService.getUserById(id);
  }

  @Put('change-password/:id')
  async changePassword(
    @Param('id') id: string,
    @Body() data: ChangePasswordDto,
  ) {
    return this.authService.changePassword(id, data);
  }

  @Delete('delete-account/:id')
  async deleteAccount(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }
}
