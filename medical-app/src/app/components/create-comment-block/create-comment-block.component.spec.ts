/**
 * Created by yana on 26.03.18.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentBlockComponent } from './create-comment-block.component';

describe('CreateCommentBlockComponent', () => {
  let component: CreateCommentBlockComponent;
  let fixture: ComponentFixture<CreateCommentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommentBlockComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
