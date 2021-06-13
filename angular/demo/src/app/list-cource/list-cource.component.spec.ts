import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourceComponent } from './list-cource.component';

describe('ListCourceComponent', () => {
  let component: ListCourceComponent;
  let fixture: ComponentFixture<ListCourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
