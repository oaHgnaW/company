import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopIndexComponent } from './shop-index.component';

describe('ShopIndexComponent', () => {
  let component: ShopIndexComponent;
  let fixture: ComponentFixture<ShopIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
