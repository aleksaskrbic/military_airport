import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPilotsComponent } from './all-pilots.component';

describe('AllPilotsComponent', () => {
  let component: AllPilotsComponent;
  let fixture: ComponentFixture<AllPilotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPilotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
