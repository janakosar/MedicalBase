/**
 * Created by yana on 24.03.18.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsHeader } from './patient-details-header.component';

describe('PatientDetailsHeader', () => {
  let component: PatientDetailsHeader;
  let fixture: ComponentFixture<PatientDetailsHeader>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetailsHeader ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
