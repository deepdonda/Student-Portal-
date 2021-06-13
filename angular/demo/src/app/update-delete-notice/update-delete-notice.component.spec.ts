import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteNoticeComponent } from './update-delete-notice.component';

describe('UpdateDeleteNoticeComponent', () => {
  let component: UpdateDeleteNoticeComponent;
  let fixture: ComponentFixture<UpdateDeleteNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
