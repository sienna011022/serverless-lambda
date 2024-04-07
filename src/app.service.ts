import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const { DB_URL } = process.env;
    return DB_URL;
  }
}
