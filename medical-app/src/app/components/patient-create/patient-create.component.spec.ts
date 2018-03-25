/**
 * Created by yana on 25.03.18.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCreateComponent } from './patient-create.component';

describe('PatientCreateComponent', () => {
  let component: PatientCreateComponent;
  let fixture: ComponentFixture<PatientCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCreateComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
