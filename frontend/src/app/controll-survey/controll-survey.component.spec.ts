import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllSurveyComponent } from './controll-survey.component';

describe('ControllSurveyComponent', () => {
  let component: ControllSurveyComponent;
  let fixture: ComponentFixture<ControllSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
