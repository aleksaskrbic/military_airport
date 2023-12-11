import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffProfileComponent } from './stuff-profile.component';

describe('StuffProfileComponent', () => {
  let component: StuffProfileComponent;
  let fixture: ComponentFixture<StuffProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
