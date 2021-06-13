import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssignmentTeacherComponent } from './list-assignment-teacher.component';

describe('ListAssignmentTeacherComponent', () => {
  let component: ListAssignmentTeacherComponent;
  let fixture: ComponentFixture<ListAssignmentTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAssignmentTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAssignmentTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
