import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AppLogger } from './logger/logger';
export declare class AuthService {
    private userService;
    private jwtService;
    private readonly logger;
    constructor(userService: UserService, jwtService: JwtService, logger: AppLogger);
    signup(signupDto: SignupDto): Promise<{
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
