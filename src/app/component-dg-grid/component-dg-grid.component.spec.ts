import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDgGridComponent } from './component-dg-grid.component';

describe('ComponentDgGridComponent', () => {
  let component: ComponentDgGridComponent;
  let fixture: ComponentFixture<ComponentDgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDgGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
