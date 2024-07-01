import { Resolver, Query } from '@nestjs/graphql';
import { FactService } from '../services/fact.service';

@Resolver('ChuckNorris')
export class AppService {
  constructor(private readonly factService: FactService) {}

  @Query('fact')
  async getFacts() {
    return this.factService.getFact();
  }
}
