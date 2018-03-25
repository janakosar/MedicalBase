import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPanelComponent } from './patients-panel.component';

describe('PatientsPanelComponent', () => {
  let component: PatientsPanelComponent;
  let fixture: ComponentFixture<PatientsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsPanelComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
