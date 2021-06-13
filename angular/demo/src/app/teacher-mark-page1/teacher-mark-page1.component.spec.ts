import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMarkPage1Component } from './teacher-mark-page1.component';

describe('TeacherMarkPage1Component', () => {
  let component: TeacherMarkPage1Component;
  let fixture: ComponentFixture<TeacherMarkPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherMarkPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMarkPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
