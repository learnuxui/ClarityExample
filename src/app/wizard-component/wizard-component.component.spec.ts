import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardComponentComponent } from './wizard-component.component';

describe('WizardComponentComponent', () => {
  let component: WizardComponentComponent;
  let fixture: ComponentFixture<WizardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
