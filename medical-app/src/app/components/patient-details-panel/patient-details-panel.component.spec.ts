import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsPanelComponent } from './patient-details-panel.component';

describe('PatientDetailsPanelComponent', () => {
  let component: PatientDetailsPanelComponent;
  let fixture: ComponentFixture<PatientDetailsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetailsPanelComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
