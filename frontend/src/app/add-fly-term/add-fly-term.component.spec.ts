import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlyTermComponent } from './add-fly-term.component';

describe('AddFlyTermComponent', () => {
  let component: AddFlyTermComponent;
  let fixture: ComponentFixture<AddFlyTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlyTermComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlyTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
