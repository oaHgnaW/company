import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOrderDetailComponent } from './store-order-detail.component';

describe('StoreOrderDetailComponent', () => {
  let component: StoreOrderDetailComponent;
  let fixture: ComponentFixture<StoreOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
