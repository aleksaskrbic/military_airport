import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPilotComponent } from './reg-pilot.component';

describe('RegPilotComponent', () => {
  let component: RegPilotComponent;
  let fixture: ComponentFixture<RegPilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPilotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
