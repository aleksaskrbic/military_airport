import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MQuestionaryComponent } from './m-questionary.component';

describe('MQuestionaryComponent', () => {
  let component: MQuestionaryComponent;
  let fixture: ComponentFixture<MQuestionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MQuestionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MQuestionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
