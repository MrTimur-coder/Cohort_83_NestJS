import { Repository } from 'typeorm';
import Policy from './policies.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
class PoliciesRepository {
  constructor(
    @InjectRepository(Policy)
    private readonly repository: Repository<Policy>,
  ) {}

  async createPolicy(policy: Policy): Promise<Policy> {
    return this.repository.save(policy);
  }

  async findAllActivePolicies(): Promise<Policy[]> {
    return this.repository.findBy({ active: true });
  }

  async findPolicyById(id: number) : Promise<Policy | null>{
    return this.repository.findOneBy({ id });
  }

  async deletePolicy(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export default PoliciesRepository;
