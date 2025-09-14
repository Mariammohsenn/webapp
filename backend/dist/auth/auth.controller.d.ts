import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(signupDto: SignupDto): Promise<{
        token: string;
    }>;
    signin(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    getProtected(): {
        message: string;
    };
}
