import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { IHousingLocation1 } from '../housing-location1';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: IHousingLocation1 | undefined;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
