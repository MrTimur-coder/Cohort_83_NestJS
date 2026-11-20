import { User } from '../users/users.entity.js';
import { INSURANCE_TYPES } from './enum/insurance-types.enum.js';

class Policy {
  id: string;
  type: INSURANCE_TYPES;
  holder: User;
  agent: User;
  coverageInCent: number;
  issuedAt: Date;
  expiresAt: Date;
  active: boolean;
}

export default Policy;