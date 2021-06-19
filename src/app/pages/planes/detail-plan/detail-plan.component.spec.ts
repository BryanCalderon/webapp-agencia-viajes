import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { DetailPlanComponent } from './detail-plan.component';

@Component({
  selector: 'app-review',
  template: ''
})
class ReviewComponent {
  @Input() picture: any;
  @Input() comentario: any;
  @Input() calificacion: any;
}

describe('DetailPlanComponent', () => {
  let component: DetailPlanComponent;
  let fixture: ComponentFixture<DetailPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPlanComponent, NgbRating, ReviewComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlanComponent);
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

  it('getTextDays: plural result', () => {
    let result = component.getTextDays(3);
    expect(result).toEqual("3 días");
  })

  it('getTextDays: singular result', () => {
    let result = component.getTextDays(1);
    expect(result).toEqual("1 día");
  })

  it('getTextNights: plural result', () => {
    let result = component.getTextNights(3);
    expect(result).toEqual("3 noches");
  })

  it('getTextNights: singular result', () => {
    let result = component.getTextNights(1);
    expect(result).toEqual("1 noche");
  })
});
