import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('signin')
  async signin(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  getProtected() {
    return { message: 'You have accessed a protected route!' };
  }
}