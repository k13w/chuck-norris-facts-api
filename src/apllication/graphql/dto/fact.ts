import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class FactResponse {
  @Field()
  icon_url: string;

  @Field(() => ID)
  id: string;

  @Field()
  url: string;

  @Field()
  value: string;
}
