/**
 * Created by yana on 26.03.18.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListItemComponent } from './patient-list-item.component';

describe('PatientListItemComponent', () => {
  let component: PatientListItemComponent;
  let fixture: ComponentFixture<PatientListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListItemComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
