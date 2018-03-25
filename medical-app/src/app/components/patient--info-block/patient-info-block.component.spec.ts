/**
 * Created by yana on 24.03.18.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoComponent } from './patient-info-block.component';

describe('PatientInfoComponent', () => {
  let component: PatientInfoComponent;
  let fixture: ComponentFixture<PatientInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInfoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
