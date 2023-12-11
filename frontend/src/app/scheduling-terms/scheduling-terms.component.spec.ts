import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingTermsComponent } from './scheduling-terms.component';

describe('SchedulingTermsComponent', () => {
  let component: SchedulingTermsComponent;
  let fixture: ComponentFixture<SchedulingTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
