import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostpickerComponent } from './costpicker.component';

describe('CostpickerComponent', () => {
  let component: CostpickerComponent;
  let fixture: ComponentFixture<CostpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
