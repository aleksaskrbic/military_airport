import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffPilotProfileComponent } from './stuff-pilot-profile.component';

describe('StuffPilotProfileComponent', () => {
  let component: StuffPilotProfileComponent;
  let fixture: ComponentFixture<StuffPilotProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffPilotProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffPilotProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
