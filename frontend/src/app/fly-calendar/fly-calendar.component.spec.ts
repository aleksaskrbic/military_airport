import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyCalendarComponent } from './fly-calendar.component';

describe('FlyCalendarComponent', () => {
  let component: FlyCalendarComponent;
  let fixture: ComponentFixture<FlyCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
