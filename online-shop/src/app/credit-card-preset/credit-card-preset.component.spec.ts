import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardPresetComponent } from './credit-card-preset.component';

describe('CreditCardPresetComponent', () => {
  let component: CreditCardPresetComponent;
  let fixture: ComponentFixture<CreditCardPresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardPresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
