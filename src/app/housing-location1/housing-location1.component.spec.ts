import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocation1Component } from './housing-location1.component';

describe('HousingLocation1Component', () => {
  let component: HousingLocation1Component;
  let fixture: ComponentFixture<HousingLocation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocation1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
