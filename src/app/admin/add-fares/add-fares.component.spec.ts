import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFaresComponent } from './add-fares.component';

describe('AddFaresComponent', () => {
  let component: AddFaresComponent;
  let fixture: ComponentFixture<AddFaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
