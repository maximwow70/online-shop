import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartCheckoutComponent } from './user-cart-checkout.component';

describe('UserCartCheckoutComponent', () => {
  let component: UserCartCheckoutComponent;
  let fixture: ComponentFixture<UserCartCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
