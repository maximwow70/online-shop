import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardPresetListComponent } from './credit-card-preset-list.component';

describe('CreditCardPresetListComponent', () => {
  let component: CreditCardPresetListComponent;
  let fixture: ComponentFixture<CreditCardPresetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardPresetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardPresetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
