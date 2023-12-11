import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneProfileComponent } from './plane-profile.component';

describe('PlaneProfileComponent', () => {
  let component: PlaneProfileComponent;
  let fixture: ComponentFixture<PlaneProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
