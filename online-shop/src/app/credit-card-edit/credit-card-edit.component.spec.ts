import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardEditComponent } from './credit-card-edit.component';

describe('CreditCardEditComponent', () => {
  let component: CreditCardEditComponent;
  let fixture: ComponentFixture<CreditCardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
