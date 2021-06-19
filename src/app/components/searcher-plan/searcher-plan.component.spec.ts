import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CiudadService } from '../../services/ciudad/ciudad.service';

import { SearcherPlanComponent } from './searcher-plan.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@Component({ selector: 'app-searcher', template: '' })
class SearcherComponent {
  @Input() list: any[];
  @Input() fieldSearch: string;
  @Input() label: String;
  @Input() model: any;
  @Input() key: string;
  @Output() onChangeEvent = new EventEmitter<string>();
}

@Component({ selector: 'app-datepicker', template: '' })
class DatepickerComponent {
  @Input() model;
  @Input() fromDate: string;
  @Input() toDate: string;
}

describe('SearcherPlanComponent', () => {
  let component: SearcherPlanComponent;
  let fixture: ComponentFixture<SearcherPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearcherPlanComponent, SearcherComponent, DatepickerComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [CiudadService]
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
