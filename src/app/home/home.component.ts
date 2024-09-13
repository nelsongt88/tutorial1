import { Component } from '@angular/core';
import { HousingLocation1Component } from '../housing-location1/housing-location1.component';
import { IHousingLocation1 } from '../housing-location1';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocation1Component, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: IHousingLocation1[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://github.com/angular/codelabs/blob/homes-app-start/src/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg?raw=true',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo:
        'https://github.com/angular/codelabs/blob/homes-app-start/src/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg?raw=true',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo:
        'https://github.com/angular/codelabs/blob/homes-app-start/src/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg?raw=true',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://github.com/angular/codelabs/blob/homes-app-start/src/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg?raw=true',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo:
        'https://github.com/angular/codelabs/blob/homes-app-start/src/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg?raw=true',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://github.com/angular/codelabs/blob/homes-app-start/src/assets/r-architecture-GGupkreKwxA-unsplash.jpg?raw=true',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://github.com/angular/codelabs/blob/homes-app-start/src/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg?raw=true',
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://github.com/angular/codelabs/blob/homes-app-start/src/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg?raw=true',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://github.com/angular/codelabs/blob/homes-app-start/src/assets/webaliser-_TPTXZd9mOo-unsplash.jpg?raw=true',
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
  ];
}
