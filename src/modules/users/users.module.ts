import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity.js';
import UsersRepository from './users.repository.js';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersRepository],
})
class UsersModule {}

export default UsersModule;
