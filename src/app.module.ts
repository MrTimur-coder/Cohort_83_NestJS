import { Module } from '@nestjs/common';

import { DBModule } from './utils/db.js';
import UsersModule from './modules/users/users.module.js';
import PoliciesModule from './modules/policies/policies.module.js';

@Module({
  imports: [DBModule, PoliciesModule, UsersModule],
})
export class AppModule {}
