import { Module } from '@nestjs/common';
import { RandomDicesModule } from './modules/test/random-dices/random-dices.module.js';
import UsersModule from './modules/users/users.module.js';

@Module({
  imports: [RandomDicesModule, ],
})
export class AppModule {}
