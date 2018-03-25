/**
 * Created by yana on 25.03.18.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoInputBlockComponent } from './patient-info-input-block.component';

describe('PatientInfoInputBlockComponent', () => {
  let component: PatientInfoInputBlockComponent;
  let fixture: ComponentFixture<PatientInfoInputBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInfoInputBlockComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoInputBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
