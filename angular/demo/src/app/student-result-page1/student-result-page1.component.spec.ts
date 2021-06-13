import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResultPage1Component } from './student-result-page1.component';

describe('StudentResultPage1Component', () => {
  let component: StudentResultPage1Component;
  let fixture: ComponentFixture<StudentResultPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentResultPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResultPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
