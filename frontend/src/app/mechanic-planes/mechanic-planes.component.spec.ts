import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicPlanesComponent } from './mechanic-planes.component';

describe('MechanicPlanesComponent', () => {
  let component: MechanicPlanesComponent;
  let fixture: ComponentFixture<MechanicPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
