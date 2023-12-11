import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlanesComponent } from './all-planes.component';

describe('AllPlanesComponent', () => {
  let component: AllPlanesComponent;
  let fixture: ComponentFixture<AllPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
