import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { from } from 'rxjs';

import { PlanesComponent } from './planes.component';

describe('PlanesComponent', () => {
  let component: PlanesComponent;
  let fixture: ComponentFixture<PlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PlanesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: from([{ offset: "5", limit: "5" }]), } }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validate query params pagination', () => {
    expect(component.pagination.data).toEqual({ offset: 5, limit: 5 });
  })

  it('onChangePage', () => {
    component.getPlanes = jest.fn();
    component.pagination.page = 1;
    component.onChangePage();
    expect(component.pagination.data.offset).toEqual(0);
    expect(component.getPlanes).toBeCalled();

    component.pagination.page = 3;
    component.onChangePage();
    expect(component.pagination.data.offset).toEqual(10);
  })


});
