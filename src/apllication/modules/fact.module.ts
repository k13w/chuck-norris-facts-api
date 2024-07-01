import { Module } from '@nestjs/common';
import { FactResolver } from '../resolvers/fact.resolver';
import { FactService } from '../services/fact.service';

@Module({
  providers: [FactResolver, FactService],
})
export class FactModule {}
