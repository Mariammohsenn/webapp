import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AppLogger } from './logger/logger';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private readonly logger: AppLogger,
  ) {}

  async signup(signupDto: SignupDto): Promise<{ token: string }> {
    const { name, email, password } = signupDto;

    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      this.logger.log(`Failed Signing up user (Duplicate Email): ${email}`);
      throw new ConflictException('User already exists');
      
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userService.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ sub: user._id, email: user.email });
    
    this.logger.log(`Signing up user : ${email}`);

    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      this.logger.log(`Failed Signing in user Incorrect Email Or Password: ${email}`);

      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({ sub: user._id, email: user.email });
  

   this.logger.log(`Signing in user : ${email}`);

    return { token };
  }
}