/**
 * Created by yana on 25.03.18.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCreateHeaderComponent } from './patient-create-header.component';

describe('PatientCreateHeaderComponent', () => {
  let component: PatientCreateHeaderComponent;
  let fixture: ComponentFixture<PatientCreateHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCreateHeaderComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCreateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
