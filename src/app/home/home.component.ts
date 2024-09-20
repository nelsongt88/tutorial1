import { Component, inject } from '@angular/core';
import { HousingLocation1Component } from '../housing-location1/housing-location1.component';
import { IHousingLocation1 } from '../housing-location1';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocation1Component, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: IHousingLocation1[] = [];
  housingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
