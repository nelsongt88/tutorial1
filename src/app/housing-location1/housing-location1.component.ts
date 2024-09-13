import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHousingLocation1 } from '../housing-location1';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './housing-location1.component.html',
  styleUrl: './housing-location1.component.css',
})
export class HousingLocation1Component {
  @Input() housingLocationInput!: IHousingLocation1;
}
