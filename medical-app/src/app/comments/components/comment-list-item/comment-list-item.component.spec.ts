/**
 * Created by yana on 26.03.18.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListItemComponent } from './comment-list-item.component';

describe('CommentListItemComponent', () => {
  let component: CommentListItemComponent;
  let fixture: ComponentFixture<CommentListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListItemComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
