import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';

import { SearcherPlanComponent } from './searcher-plan.component';

describe('SearcherPlanComponent', () => {
  let component: SearcherPlanComponent;
  let fixture: ComponentFixture<SearcherPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcherPlanComponent ],
      imports: [CiudadService]
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
