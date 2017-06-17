import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLikerComponent } from './item-liker.component';

describe('ItemLikerComponent', () => {
  let component: ItemLikerComponent;
  let fixture: ComponentFixture<ItemLikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemLikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
