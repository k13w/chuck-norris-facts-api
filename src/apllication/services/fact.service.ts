import { Injectable } from '@nestjs/common';
import { FactResponse } from '../graphql/dto/fact';

@Injectable()
export class FactService {
  async getFact(): Promise<FactResponse> {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      if (!response.ok) {
        throw new Error(`Error fetching fact: ${response.statusText}`);
      }
      const fact = await response.json() as FactResponse;
      return fact;
    } catch (error) {
      console.error('Failed to fetch fact:', error);
      throw new Error('Could not fetch fact at this time. Please try again later.');
    }
  }
}
