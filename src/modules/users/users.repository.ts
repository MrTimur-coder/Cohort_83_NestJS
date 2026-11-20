import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './users.entity.js';

@Injectable()
class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async findAllActiveUsers(): Promise<User[]> {
    return this.repository.findBy({ active: true });
  }

  async findUserById(id: number): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  async deleteUserById(id: string): Promise<void>{
    await this.repository.delete(id)
  }
}

export default UsersRepository;
