import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(username: string, password: string, role: string) {
    const hashed = await bcrypt.hash(password, 10);

    // TEMP (DB later)
    const user = { id: 1, username, role };

    return {
      user,
      password: hashed,
    };
  }

  async login(username: string, role: string) {
    const payload = { username, role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
