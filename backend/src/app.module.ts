import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TeachersModule],
    imports: [AuthModule, TeachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
