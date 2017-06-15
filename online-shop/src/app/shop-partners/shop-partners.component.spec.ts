import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPartnersComponent } from './shop-partners.component';

describe('ShopPartnersComponent', () => {
  let component: ShopPartnersComponent;
  let fixture: ComponentFixture<ShopPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
