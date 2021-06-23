import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanService } from '../../../services/plan/plan.service';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { DetailPlanComponent } from './detail-plan.component';
import { of, throwError } from 'rxjs';
import { ReviewService } from '../../../services/review/review.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  let planService: PlanService;
  let reviewService: ReviewService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPlanComponent, NgbRating, ReviewComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [PlanService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlanComponent);
    component = fixture.debugElement.componentInstance;
    planService = fixture.debugElement.injector.get(PlanService);
    reviewService = fixture.debugElement.injector.get(ReviewService);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call ngOnInit', fakeAsync(() => {
    let getPlan = jest.spyOn(component, "getPlan");
    let getReviews = jest.spyOn(component, "getReviews");

    component.ngOnInit();

    expect(getPlan).toHaveBeenCalled();
    expect(getReviews).toHaveBeenCalled();
  }))

  it('Should call getPlan and get response as empty object', fakeAsync(() => {
    jest.spyOn(planService, "getById").mockImplementation(() => of({}));
    component.getPlan(1);
    expect(component.plan).toEqual({ totalNoches: null });
  }))

  it('Should call getPlan and get response as object', fakeAsync(() => {
    jest.spyOn(planService, "getById").mockImplementation(() => of({ totalDias: 2 }));
    component.getPlan(1);
    expect(component.plan).toEqual({ totalNoches: 1, totalDias: 2 });
  }))

  it('Should call getPlan and get response as error', fakeAsync(() => {
    jest.spyOn(planService, "getById").mockImplementation(() => throwError(new HttpErrorResponse({ status: 404, error: { message: "mensaje de error" } })));
    component.getPlan(1);
    expect(component.error.status).toEqual(404);
    expect(component.error.error.message).toEqual("mensaje de error");
  }))

  it('Should call getReviews and get response as empty array', fakeAsync(() => {
    jest.spyOn(reviewService, "getByPlan").mockImplementation(() => of([]));
    component.getReviews(1);
    expect(component.reviews).toEqual([]);
  }))

  it('Should call getReviews and get response as array', fakeAsync(() => {
    jest.spyOn(reviewService, "getByPlan").mockImplementation(() => of([{ id: 1 }]));
    component.getReviews(1);
    expect(component.reviews).toEqual([{ id: 1 }]);
  }))

  it('getTotalNightsByDays with input values not valids', () => {
    expect(component.getTotalNightsByDays(null)).toBeNull();
    expect(component.getTotalNightsByDays(0)).toBeNull();
  })

  it('getTotalNightsByDays with input values valids', () => {
    expect(component.getTotalNightsByDays(2)).toEqual(1);
  })

  it('getTextDays with input values not valids', () => {
    expect(component.getTextDays(null)).toBeNull();
    expect(component.getTextDays(0)).toBeNull();
  })

  it('getTextDays: plural result', () => {
    expect(component.getTextDays(3)).toEqual("3 días");
  })

  it('getTextDays: singular result', () => {
    expect(component.getTextDays(1)).toEqual("1 día");
  })

  it('getTextNights with input values not valids', () => {
    expect(component.getTextNights(null)).toBeNull();
    expect(component.getTextNights(0)).toBeNull();
  })

  it('getTextNights: plural result', () => {
    expect(component.getTextNights(3)).toEqual("3 noches");
  })

  it('getTextNights: singular result', () => {
    expect(component.getTextNights(1)).toEqual("1 noche");
  })
});
