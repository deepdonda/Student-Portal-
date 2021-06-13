import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssignmentStudentComponent } from './list-assignment-student.component';

describe('ListAssignmentStudentComponent', () => {
  let component: ListAssignmentStudentComponent;
  let fixture: ComponentFixture<ListAssignmentStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAssignmentStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAssignmentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
