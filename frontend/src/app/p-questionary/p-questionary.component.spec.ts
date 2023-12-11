import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PQuestionaryComponent } from './p-questionary.component';

describe('PQuestionaryComponent', () => {
  let component: PQuestionaryComponent;
  let fixture: ComponentFixture<PQuestionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PQuestionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PQuestionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
