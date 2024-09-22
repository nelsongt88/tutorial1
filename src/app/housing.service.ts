import { Injectable } from '@angular/core';
import { IHousingLocation1 } from './housing-location1';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected url = 'http://localhost:3000/location';

  constructor() {}

  async getAllHousingLocations(): Promise<IHousingLocation1[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<IHousingLocation1 | undefined> {
    //return this.housingLocationList.find((location) => location.id === id);
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    // Simulate a form submission to a server.
    console.log(`Application submitted by ${firstName} ${lastName} (${email})`);
  }
}
