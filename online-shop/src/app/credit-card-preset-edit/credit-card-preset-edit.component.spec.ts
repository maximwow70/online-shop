import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardPresetEditComponent } from './credit-card-preset-edit.component';

describe('CreditCardPresetEditComponent', () => {
  let component: CreditCardPresetEditComponent;
  let fixture: ComponentFixture<CreditCardPresetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardPresetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardPresetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
