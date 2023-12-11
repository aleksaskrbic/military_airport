import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportProfileComponent } from './airport-profile.component';

describe('AirportProfileComponent', () => {
  let component: AirportProfileComponent;
  let fixture: ComponentFixture<AirportProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
