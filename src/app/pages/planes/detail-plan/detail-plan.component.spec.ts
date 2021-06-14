import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DetailPlanComponent } from './detail-plan.component';

describe('DetailPlanComponent', () => {
  let component: DetailPlanComponent;
  let fixture: ComponentFixture<DetailPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPlanComponent],
      providers: [
        { provide: Router, useValue: 2 }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlanComponent);
    // activatedRoute.setParamMap({ id: 99999 });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTotalNightsByDays', () => {
    let result = component.getTotalNightsByDays(2);
    expect(result).toEqual(1);
  })
});
