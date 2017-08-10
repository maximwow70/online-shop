import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartPaymentComponent } from './user-cart-payment.component';

describe('UserCartPaymentComponent', () => {
  let component: UserCartPaymentComponent;
  let fixture: ComponentFixture<UserCartPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
