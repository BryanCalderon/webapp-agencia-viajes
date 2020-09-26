import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherPlanComponent } from './searcher-plan.component';

describe('SearcherPlanComponent', () => {
  let component: SearcherPlanComponent;
  let fixture: ComponentFixture<SearcherPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcherPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
