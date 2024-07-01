import { Query, Resolver } from '@nestjs/graphql';
import { FactResponse } from '../graphql/dto/fact';
import { FactService } from '../services/fact.service';

@Resolver(() => FactResponse)
export class FactResolver {
  constructor(private readonly factService: FactService) {}

  @Query(() => FactResponse)
  getFact() {
    return this.factService.getFact();
  }
}
