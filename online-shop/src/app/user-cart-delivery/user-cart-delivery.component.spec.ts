import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartDeliveryComponent } from './user-cart-delivery.component';

describe('UserCartDeliveryComponent', () => {
  let component: UserCartDeliveryComponent;
  let fixture: ComponentFixture<UserCartDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
