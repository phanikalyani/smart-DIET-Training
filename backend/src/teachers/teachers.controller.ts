import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthModule } from './auth/auth.module';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Teachers')
@Controller('teachers')
export class TeachersController {

  @Get()
  @ApiOperation({ summary: 'Get all teachers' })
  findAll() {
    return [
      { id: 1, name: 'Ravi', subject: 'Math' },
      { id: 2, name: 'Sita', subject: 'Science' },
      { name: 'Ravi' }, { name: 'Sita' }
    ];
  }
}
